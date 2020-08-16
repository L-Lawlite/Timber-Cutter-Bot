const Discord = require('discord.js');

module.exports = {
	name: 'tutorial',
	description: 'Links Video Tutorial',
	aliases: ['tut','video'],
	usage: '[Video Topic]',
	execute(message, args,cmd) {

		if(!args.length)
		{
			const cmd = bot.commands

			var helpDesc = []
			cmd.forEach(command => {
				helpDesc.push(`**${command.name}**`);
				helpDesc.push(command.description);
				helpDesc.push("\n");
			})
			const embed = new Discord.MessageEmbed();
			embed.setTitle("Videos");
			embed.setDescription(helpDesc.join("\n");
			message.channel.send(embed);
		}

		const choice = args[0].toLowerCase();
		var videos = require("./video/videos.json");
		console.log(videos);
		for(var i = 0; i < videos.length; i++)
		for(var j=0;j< videos[i].name.length;j++)
		{
			if(choice === videos[i].name[j])
			{
				message.channel.send(videos[i].url);
			}
		}

/*		switch (choice) {
			case 'troubleshoot':
			case 't':
				message.channel.send('https://www.youtube.com/watch?v=L79L2qaH3Mw');
				break;
			case 'custom_mob':
				message.channel.send('https://www.youtube.com/playlist?list=PLi7Dhu-qOl8O1ejPf2ePGYimGLsRUCD0z');
				break;
			case 'custom_item':
				message.channel.send('https://www.youtube.com/playlist?list=PLi7Dhu-qOl8NQObbSPoDzJ4_7Auy-U2Gs');
				break;
			case 'raycasting':
				message.channel.send(`https://youtu.be/ASVpGeLf_HU`);
				message.channel.send('https://youtu.be/fGlJpli5cYc');
				break;
			case 'unicode':
				message.channel.send('https://youtu.be/Eifs8BW1jNc');
				break;
			case 'custom_sound':
			case '.ogg':
			case 'ogg':
				message.channel.send('https://youtu.be/rGPxEYZW08Q');
				break;
			default:

		}*/
	},
};
