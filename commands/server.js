const Discord = require('discord.js');

module.exports = {
  name: 'server',
  aliases:["support_server","support"],
	description: 'Join the Official Server :)',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**Timber Cutter Official Server!**')
    .setDescription('[Click Here!](https://discord.gg/PW2cjm6NsP)');
    message.channel.send(embed);
	},
};