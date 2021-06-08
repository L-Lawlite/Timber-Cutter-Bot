const Discord = require('discord.js');
const {prefix} = require('../../config.json');
const {color} = require('./info_config.json')


module.exports = {
  name: 'custom_model_armor',
  aliases:['custom_model_elytra','custom_model_playerhead','custom_model_skull','custom_model_helmet'],
	description: 'Why Custom Armor model not possible and how can u make custom helmet',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('Custom Model Armor')
    .setFooter('Made by Nope#1730');
    embed.setDescription(`• Armor, and by extension elytras, and mob/player skulls, are hardcoded into the game, and could technically be counted as their own entity that follows the player’s movements exactly. While the armor MODEL cannot support custom model data, the armor ITEM can, although adding custom models to the item will not in any way change the models for the armor that shows up on the player. This applies to the helmet and mob/player skulls as well, and this was noted for reasons I will explain next

    • Items placed on a player’s head will show up as the items themselves. This would allow you to, for example, create a custom model for the carrot on a stick that shows up in a special way when placed on your head, allowing for a rather roundabout way to create a custom helmet, although items placed in the chest, legs, and feet will not show up on a player model. As noted above, creating custom models for helmets, and mob/player skulls still do not show up differently on the player’s head. Any item that is not a helmet or a mob/player skull will show up on a player’s head, either normally or with a custom model

    For more details about custom model use \`${prefix}tutorial custom_helmet\`
    `)
    return message.channel.send(embed);
	},
};
