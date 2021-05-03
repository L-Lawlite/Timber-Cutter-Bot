const Discord = require('discord.js');

module.exports = {
  name: 'tick.json',
  aliases:['load.json','second.json'],
	description: 'Format of tick.json or load.json',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#ff4500')
    .setTitle(`${args[0]}`);
    embed.setDescription(`
    \`\`\`json
    {
        "values": [
          "<namespace>:<function1>",
          "<namespace>:<function2>"
        ]
      }
    \`\`\`
    `)
    return message.channel.send(embed);
	},
};
