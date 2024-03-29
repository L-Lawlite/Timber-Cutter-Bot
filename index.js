// Silabear is super epic

//for file sharing
const fs = require('fs');
//to define it is using discord.js
const Discord = require('discord.js');
//import prefix and token from config.json
const { prefix , token} = require('./config.json');

const mongo = require('./mongo');
const { Console } = require('console');

//create a new Client named bot
const bot = new Discord.Client();
//takes command
bot.commands = new Discord.Collection();



Master_id=["228141283175038977","536249458065670154","847688315742060544", "719624459824267295","641455200049037321"];
async function check_master(msg){
  for(const masters of Master_id)
    if(msg.author.id == masters)
      return 'you summoned me, Master🙇';
    if(msg.author.id == "523997461078081537")
      return 'What are your orders, My Lord 🙇';
  
  return `${msg.author.toString()}, Why have you disturbed my slumber, mortal?\n👿`;
  

}

//reads all the file from commands folder that are of type .js
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

bot.faqs = new Discord.Collection();
const faqName = fs.readdirSync('./commands/faq').filter(file => file.endsWith('.js'));

bot.syntax = new Discord.Collection();
const syntaxName = fs.readdirSync('./commands/syntax').filter(file => file.endsWith('.js'));

bot.editors = new Discord.Collection();
const editorName = fs.readdirSync('./commands/editor').filter(file => file.endsWith('.js'));

bot.modelCommands = new Discord.Collection();
const modelCommandName = fs.readdirSync('./commands/model').filter(file => file.endsWith('.js'));

bot.annex = new Discord.Collection();
const annexName = fs.readdirSync('./commands/annex').filter(file => file.endsWith('.js'));


//displays the message "This bot is online!" on console log
bot.on('ready',async () =>{
  console.log(`${bot.user.tag} is online!`);
  setInterval(async function(){
    try{
      let serverCount = bot.guilds.cache.size;
      console.log(serverCount);
      bot.user.setActivity(`help channel in ${serverCount} servers 👀 For help use \`??help\``,{type:"WATCHING"});
    }
    catch(err)
    {
      console.log('unable to update status');
    }
  },1000*60*10);

  await mongo().then(mongoose => {
    try {
      console.log('connected to database');
    }
    finally {
      mongoose.connection.close();
    }
  });

})


//load commands from `commands` folder
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

for (const file of faqName) {
	const faq = require(`./commands/faq/${file}`);
	bot.faqs.set(faq.name, faq);
}

for (const file of syntaxName) {
	const syntax = require(`./commands/syntax/${file}`);
	bot.syntax.set(syntax.name, syntax);
}

for (const file of editorName) {
	const editor = require(`./commands/editor/${file}`);
	bot.editors.set(editor.name, editor);
}

for(const file of modelCommandName) {
  const model = require(`./commands/model/${file}`);
  bot.modelCommands.set(model.name, model);
}

for (const file of annexName) {
  const annex = require(`./commands/annex/${file}`);
  bot.annex.set(annex.name, annex);
}

//for cooldown operation if needed
const cooldowns = new Discord.Collection();



bot.on('message', message => {
  //checks	if message is send by this bot if yes terminate the program
	if (message.author.bot) return;

  if(message.mentions.has(bot.user)){
    check_master(message)
      .then(result =>{
        message.channel.send(result);
        return;
      });
  }
    

  //loads the command after removing prefix
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

  //checks if that command or its alias exist
  const command = bot.commands.get(commandName)
  		|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  //open close channel
  if(message.channel.type != "dm") {
    if(message.channel.name.startsWith(`🔑`) && !message.content.startsWith(prefix)){
        message.channel.setName(`⏳${message.author.username}’s question`)
          .then(r => console.log('channel became busy'))
          .catch(error => console.log(error));
      }

    if(message.channel.name.startsWith(`🔑`) && message.content.startsWith(prefix) && command) {
      message.reply('Commands are disabled in open help channel')
        .then(msg => {
          msg.delete({timeout : 5000});
        })
        .catch(err => console.log(err));
      if(message.guild.id == '618187296474267680')
        message.channel.send(`please use <#626224313002885120> for bot-commands `)
          .then(msg => {
            msg.delete({timeout : 5000});
          })
          .catch(err => console.log(err));
      message.delete();
      return;
    }
  }

  if(!message.content.startsWith(prefix)) return;
  //if not terminate the program
  if (!command) return;

  //for those messages which cant be operated in dm
  if (command.guildOnly && message.channel.type !== 'text') {
	   return message.reply('I can\'t execute that command inside DMs!');
   }

  //for command with arguments
  if(command.args && !args.length){
    //error message
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``
    }
    return message.channel.send(reply);
  }

  //cooldown start
  if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${prefix}${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  //cooldown end

  //for all command execution
  try {
	   command.execute(message,args);
   }
   catch (error) {
	     console.error(error);
	     message.reply('there was an error trying to execute that command!');
   }
});

bot.login(token);
