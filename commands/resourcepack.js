const fs = require('fs');
const Discord = require('discord.js');
module.exports = {
	name: 'resourcepack',
	description: 'Shows Resource Pack Structure for 1.16',
	execute(message, args) {
		fs.readFile('./commands/txt/resourcepack_format.txt','utf8',function(err,data){
			if(err) console.log(err);
			//message.channel.send(`**Resource pack Structure for 1.16:**\n\n${data}`);
		});
		const embed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setDescription(`**Resource pack Structure for 1.16:**\n\n${data}\nTo download the template [Click Here!](https://drive.google.com/uc?export=download&id=1qbl6o0SYC4rOq0-nObG76psJ1k0K__-Z)`)

		message.channel.send(embed);
	},
};
