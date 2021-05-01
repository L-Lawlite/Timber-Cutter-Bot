const Discord = require('discord.js');
const image = 'https://github.com/L-Lawlite/Timber-Cutter-Bot/blob/master/commands/images/Log.JPG'
module.exports = {
  name: 'log',
	description: 'Tells how to activate log!',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setDescription('To see the game log to debug errors in your datapack or resourcepack, do this:')
    .setImage(image);

    message.channel.send(embed);
	},
};
