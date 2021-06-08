const Discord = require('discord.js');
const {color} = require('./info_config.json')


module.exports = {
  name: 'custom_throwable',
	description: 'Details about custom model of throwable object',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('Custom Model of Throwable Object')
    .setFooter('Made by Nope#1730');
    embed.setDescription(`
    `)
    return message.channel.send(embed);
	},
};
