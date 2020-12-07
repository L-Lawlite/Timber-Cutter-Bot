const fs = require('fs');
const Discord = require('discord.js');
module.exports = {
	name: 'info',
	description: 'Gives copypaste of info on channels',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('**Here\'s what each channel does**')
		fs.readFile('./commands/txt/channelinfo.txt','utf8',function(err,data){
			if(err) console.log(err);
			message.channel.send(embed);
		});
	},
};