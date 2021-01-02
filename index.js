
//for file sharing
const fs = require('fs');
//to define it is using discord.js
const Discord = require('discord.js');
//import prefix and token from config.json
const { prefix , token} = require('./config.json');

//create a new Client named bot
const bot = new Discord.Client();
//takes command
bot.commands = new Discord.Collection();

//reads all the file from commands folder that are of type .js
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

bot.faqs = new Discord.Collection();
const faqName = fs.readdirSync('./commands/faq').filter(file => file.endsWith('.js'));

//displays the message "This bot is online!" on console log
bot.on('ready',() =>{
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

//for cooldown operation if needed
const cooldowns = new Discord.Collection();



bot.on('message', message => {
  //checks	if message is send by this bot if yes terminate the program
	if (message.author.bot) return;


  //loads the command after removing prefix
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

  //checks if that command or its alias exist
  const command = bot.commands.get(commandName)
  		|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  //open close channel
  if(message.channel.type != "dm")
  if(message.channel.name.startsWith(`🔑`) && !message.content.startsWith(prefix)){
      message.channel.setName(`⏳${message.author.username} question`)
        .then(r => console.log('channel became busy'))
        .catch(error => console.log(error));
    }
/*  if(message.channel.name == `⏳busy-help` && message.content.startsWith(`mcstacker`))
  {
    message.content.send(`https://mcstacker.net/`);
  }
*/
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
	   command.execute(message,args,bot.faqs);
   }
   catch (error) {
	     console.error(error);
	     message.reply('there was an error trying to execute that command!');
   }
});

bot.login(token);
