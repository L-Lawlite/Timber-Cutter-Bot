const Discord = require('discord.js');

module.exports = {
  name: 'open',
	description: 'Opens channel',
	execute(message, args) {
		const openEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('**Minecraft Help Channel**')
      .setDescription('Feel free to ask for help or advice on data packs, resource packs, or anything else related to Minecraft');

      if(message.channel.name == `busy-help`){
        message.channel.send(openEmbed);
        message.channel.setName(`open-help`);
      }
      else{
        message.reply('u can\'t use it right now');
      }
	},
};
