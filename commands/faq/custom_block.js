const Discord = require('discord.js');
const {prefix} = require('.../config.json')

module.exports = {
  name: 'custom_blocks',
	description: 'Details about custom model of Blocks',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Custom model of Blocks')
    .setFooter('Made by Nope#1730');
    embed.setDescription(`Blocks, while they can technically support having custom models, a single block can only ever have one model. The only way to make a block have a custom model is to overwrite an existing block.

    So to make custom blocks we have to use some workaround. There are many kind of work arounds we can do one of which is shown in \`${prefix}tutorial custom_blocks\`
    `)
    return message.channel.send(embed);
	},
};
