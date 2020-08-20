const Discord = require('discord.js');
const {prefix} = require('../config.json')

module.exports = {
	name: 'tutorial',
	description: 'Links Video Tutorial',
	aliases: ['tut','video',['videos']],
	usage: '[Video Topic]',
	execute(message, args) {
		var videos = require("./video/videos.json");

		if(!args.length)
		{
			var helpDesc = [];
			videos.forEach(v => {
				helpDesc.push(`\`${v.name[0]}\``);
				helpDesc.push(v.description);
				helpDesc.push("\n");
			})
			const embed = new Discord.MessageEmbed();
			embed.setTitle(`Video list\nuse \`${prefix}tutorial [video name]\``)
			 .setDescription(helpDesc.join("\n"));
			return message.channel.send(embed);
		}

		const choice = args[0].toLowerCase();

		for(var i = 0; i < videos.length; i++)
		for(var j=0;j< videos[i].name.length;j++)
		{
			if(choice === videos[i].name[j])
			{
				if(!videos[i].note) message.channel.send(videos[i].url);
				else if (videos[i].note) {
					message.channel.send(videos[i].url + `\n**Note: ${videos[i].note}** ` );
				}
				if(videos[i].url2) message.channel.send(videos[i].url2);
			}
		}
	},
};
