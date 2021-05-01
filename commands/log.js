const Discord = require('discord.js');
const image = {files:['./commands/images/Log.jpg']}
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
