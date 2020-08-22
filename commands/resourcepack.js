const fs = require('fs');
module.exports = {
	name: 'resourcepack',
	description: 'Shows Resource Pack Structure for 1.16',
	execute(message, args) {
		fs.readFile('./commands/txt/resourcepack_format.txt','utf8',function(err,data){
			if(err) console.log(err);
			message.channel.send(`**Resource pack Structure for 1.16:**\n\n${data}`);
		});
	},
};
