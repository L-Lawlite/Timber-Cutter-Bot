const Discord = require('discord.js');

module.exports = {
  name: 'log',
	description: 'Tells how to activate log!',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setDescription('To see the game log to debug errors in your datapack do this:')
    .setImage('https://i.imgur.com/aL8XRaq.png');

    message.channel.send(embed);
	},
};
