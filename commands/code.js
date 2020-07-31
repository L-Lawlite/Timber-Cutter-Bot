const fs = require('fs');
module.exports = {
	name: 'code',
	description: 'Shows how to format codes on Discord',
	execute(message, args) {
		fs.readFile('./commands/txt/code_format_discord.txt','utf8',function(err,data){
			if(err) console.log(err);
			message.channel.send(data);
		});
	},
};
