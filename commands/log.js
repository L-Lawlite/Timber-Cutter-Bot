const Discord = require('discord.js');
module.exports = {
  name: 'log',
  aliases:["logs"],
	description: 'Tells how to activate log!',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setDescription('To see the game log to debug errors in your datapack or resourcepack, do this:')
    .setImage('https://i.imgur.com/NGo4pkg.png');

    message.channel.send(embed);
	},
};
