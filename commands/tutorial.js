const { prefix } = require('../config.json');
const Discord = require('discord.js');
const fs = require('fs');


module.exports = {
	name: 'tutorial',
	description: 'Links Video Tutorial',
	aliases: ['tut'],
	usage: '[Video Topic]',
	execute(message, args) {

    const commands = new Discord.Collection();
    const videoFiles = fs.readdirSync('./commands/video').filter(file => file.endsWith('.js'));

    for (const file of videoFiles) {
    	const command = require(`./commands/video/${file}`);
    	bot.commands.set(command.name, command);
    }

    const embed = new Discord.MessageEmbed();

    if (!args.length) {
      embed.setTitle('Here\'s a list of all my commands:\n');
      var commandName = commands.map(command => command.name);
      var desc = commands.map(command => command.description);
      for(var i=0; i<commandName.length; i++){
        embed.addFields(
          { name: commandName[i] , value: desc[i],inline: false}
        )
      }

    return message.channel.send(embed);


    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) {
			return message.reply('that\'s not a valid command!');
		}

    try {
  	   command.execute(message,args);
     }
     catch (error) {
  	     console.error(error);
  	     message.reply('there was an error trying to execute that command!');
     }
   }
	},
};
