const fs = require('fs');
module.exports = {
	name: 'struct datapack',
	description: 'Shows Datapack Structure for 1.16',
  aliases: ['datapack'],
	execute(message, args) {
		fs.readFile('datapack_format.txt','uft8',function(err,data){
			if(err) throw err;
			message.content.send(data);
		});
	},
};
