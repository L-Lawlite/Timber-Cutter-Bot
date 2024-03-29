const Discord = require('discord.js');
module.exports = {
	name: 'syntax',
	description: 'Some useful Syntax of commands or files',
    usage:'[Topic]',
	execute(message, args) {
    const { syntax } = message.client;
    const syntaxEmbed = new Discord.MessageEmbed();
    var data = [];
    if(!args.length){
        syntaxEmbed.setTitle('Here\'s a list of all my Syntax:\n');
			var syntaxName = syntax.map(syntax => syntax.name);
			var desc = syntax.map(syntax => syntax.description);
			for(var i=0; i<syntaxName.length; i++){
				data[i] = `**${syntaxName[i]}**\n${desc[i]}`;
			}
            syntaxEmbed.setDescription(data.join('\n\n'));
        return message.channel.send(syntaxEmbed);
    }

    const Syntax_names = args.shift().toLowerCase();
    const syntaxCheck = syntax.get(Syntax_names)
  		|| syntax.find(cmd => cmd.aliases && cmd.aliases.includes(Syntax_names));
    if(!syntaxCheck)
        return message.reply('invalid syntax id');
    try {
        syntaxCheck.execute(message,args);
    }
   catch (error) {
        console.error(error);
        message.reply('there was an error trying to fetch the syntax!');
    }

    
	},
};
