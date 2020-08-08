module.exports = {
	name: 'tutorial',
	description: 'Links Video Tutorial',
	aliases: ['tut'],
	usage: '[Video Topic]',
	args:true,
	execute(message, args) {
		const choice = args[0].toLowerCase();
		switch (choice) {
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
			default:

		}
	},
};
