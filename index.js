
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

//displays the message "This bot is online!" on console log
bot.once('ready',() =>{
  console.log('This bot is online!');
})


//load commands from `commands` folder
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
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
  if(message.channel.name == `open-help`)
    message.channel.setName(`busy-help`)
      .catch(console.error());

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
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
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
