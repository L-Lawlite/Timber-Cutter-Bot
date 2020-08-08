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
				message.channel.send('https://www.youtube.com/watch?v=L79L2qaH3Mw');
				break;
			default:

		}
	},
};
