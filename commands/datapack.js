const fs = require('fs');
const Discord = require('discord.js');
module.exports = {
	name: 'datapack',
	aliases: ['dpc'],
	description: 'Shows Datapack Structure for 1.17',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setDescription(`To download the template [Click Here!](https://drive.google.com/uc?export=download&id=1VE7HHIKvzixx9J-ZshZQ-Bimr8B6jCoN)`)
		fs.readFile('./commands/txt/datapack_format.txt','utf8',function(err,data){
			if(err) console.log(err);
			message.channel.send(`**Datapack Structure for 1.17 and above:**\n\n${data}`);
			message.channel.send(embed);
		});
	},
};
