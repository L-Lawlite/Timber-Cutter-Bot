const Discord = require('discord.js');

module.exports = {
  name: 'vote',
	description: 'Vote bot for you favorite bot on Discord :)',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**Vote for Timber Cutter!**')
    .setDescription('[Click Here!](https://top.gg/bot/728842617705726026)');
    message.channel.send(embed);
	},
};