const Discord = require('discord.js');

module.exports = {
  name: 'pack.mcmeta',
	description: 'Format of pack.mcmeta',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#ff4500')
    .setTitle('pack.mcmeta');
    embed.setDescription(`
    \`\`\`json
      {
        "pack": {
          "pack_format": <number>⁽¹⁾,
          "description": "<Your Description>⁽²⁾"
        }
      }
    \`\`\`
    
    ⁽¹⁾ : Pack Format number is:
    4 for 1.14
    5 for 1.15
    6 for 1.16
    7 for 1.17

    ⁽²⁾: any string
    `)
    return message.channel.send(embed);
	},
};
