const Discord = require('discord.js');

module.exports = {
  name: 'invite',
	description: 'Invite bot to your channel',
	execute(message, args) {
    const openEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**Invite Bot Link:**')
    .setDescription('Click Here!')
    .setURL('https://discord.com/oauth2/authorize?client_id=728842617705726026&scope=bot&permissions=8')
    message.channel.send(Embed);
	},
};
