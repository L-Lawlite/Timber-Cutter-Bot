module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.').then(result =>{
			const pingTime = result.createdTimestamp - message.createdTimestamp;
			message.channel.send(`\`${pingTime}ms\``);
		});
	},
};
