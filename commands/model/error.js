const Discord = require('discord.js');
const {color} = require('./model_config.json')
const {prefix} = require(`../../config.json`)

module.exports = {
  name: 'help',
	description: 'Files need to send for resource pack help',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    embed.setColor(color)
         .setDescription(`**To ask for live help with a resource pack item model error, send the following components:**\n  1. File STRUCTURE of pack leading to the folder holding the custom model.\n  2. File STRUCTURE of pack leading to the folder holding the textures.\n  3.The TEXT of the json file for the item receiving the model. (Not the model itself)\n  4.The TEXT of the top section of the model's json file.\n 5.Add screenshot of log with the message. Look for YELLOW text. (If you dont know how to check log use \`${prefix}log\`).`);
    return message.channel.send(embed);
	},
};
