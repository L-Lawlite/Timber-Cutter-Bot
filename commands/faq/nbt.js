const Discord = require('discord.js');
const {color} = require('./info_config.json')


module.exports = {
  name: 'nbt',
	description: 'Brief Description of nbt',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('Named Binary Tag (NBT)')
    embed.setDescription(`
    A data tag is a tree-shaped data structure that can be described starting with attribute-value pairs enclosed in curly braces. One common usage of data tags in Java Edition is in commands, used to specify complex data for any entity.

    A data tag consists of zero or more attribute-value pairs delimited by commas and enclosed in curly braces. Each attribute-value pair consists of an attribute name and the attribute's value, separated by a colon. Some values, however, may themselves contain attribute-value pairs, allowing a data tag to describe a hierarchical data structure.

    Example: \`\`\`js
    {name1:123,name2:"sometext",name3:{subname1:456,subname2:789}}
    \`\`\`

    For more details [click here](https://minecraft.fandom.com/wiki/NBT_format)
    `)
    return message.channel.send(embed);
	},
};
