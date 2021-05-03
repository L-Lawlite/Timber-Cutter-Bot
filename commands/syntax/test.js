const Discord = require('discord.js');

module.exports = {
  name: 'pack.mcmeta',
	description: 'Format of pack.mcmeta',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#ff4500')
    .setTitle('Custom Model of Throwable Object');
    embed.setDescription(`
    \`\`\`json
      {
        "pack": {
          "pack_format": <number>`+'[1]'.sup()+` ,
          "description": "<Your Desription>"`+`[2]`.sup()+`
        }
      }
    \`\`\`
    
    `+`[1]`.sup()+` Pack Format number is:
    4 for 1.14
    5 for 1.15
    6 for 1.16
    7 for 1.17

    `+`[2]`.sup()+` any string
    `)
    return message.channel.send(embed);
	},
};
