const Discord = require('discord.js');

module.exports = {
  name: 'tag.json',
	description: 'Format of tag.json',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#ff4500')
    .setTitle(`tag.json`);
    embed.setDescription(`
    \`\`\`json
    {
        "replace": <bool>⁽¹⁾,
        "values": [
          "<namespace>⁽²⁾:<some_entry>",
          "minecraft:<another_entry>",
          "#<namespace>:<some_tag>⁽³⁾"
        ]
      }
    \`\`\`

    ⁽¹⁾ Bool values can be true or false (if nothing is provided default is false). It is used to deterimine whether the given tag file replace or append to another file of same in different datapack(if present).
    ⁽²⁾ Namespace is the self defined namespace in the datapack or default namespace(minecraft) used to determine where that entry belongs to. In vanilla u cant have custom blocks or items in the namespace. But can have custom tags as shown in ⁽³⁾.
    ⁽³⁾ Tags are self defined or default minecraft tags used to group a certain kind of things together.

      
    `)
    return message.channel.send(embed);
	},
};
