const fs = require('fs');
module.exports = {
	name: 'datapack',
	description: 'Shows Datapack Structure for 1.16',
	execute(message, args) {
		fs.readFile('./commands/datapack_format.txt','utf8',function(err,data){
			if(err) console.log(err);
			message.channel.send(data);
		});
	},
};
