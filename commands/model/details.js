
const fs = require('fs');


module.exports = {
  name: 'details',
	description: 'Some Details regarding models',
	execute(message, args) {
        fs.readFile('./commands/txt/big_help.txt','utf8',function(err,data) {
            if(err) {
                console.log(err);
                return message.channel.send(`error reading the file`);
                }
            message.channel.send(`${data}`);
        });
    }
                 
};
