const Discord = require('discord.js');

module.exports = {
  name: 'invite',
	description: 'Invite bot to your channel',
	execute(message, args) {
		const Embed = {
      color: 0x0099ff,
      title: 'Invite Bot Link:',
      description: {
        name: 'click here!',
        url: 'https://discord.com/oauth2/authorize?client_id=728842617705726026&scope=bot&permissions=8'
      }
    }
	},
};
