const Discord = require('discord.js');
module.exports = {
	name: 'Syntax',
	description: 'Some useful Syntax of commands or files',
    usage:'[Topic]',
	execute(message, args) {
    const { syntax } = message.client;
    const syntaxEmbed = new Discord.MessageEmbed();
    var data = [];
    if(!args.length){
        syntaxEmbed.setTitle('Here\'s a list of all my Syntax:\n');
			var syntaxName = Syntax.map(syntax => syntax.name);
			var desc = Syntax.map(syntax => syntax.description);
			for(var i=0; i<syntaxName.length; i++){
				data[i] = `**${syntaxName[i]}**\n${desc[i]}`;
			}
            syntaxEmbed.setDescription(data.join('\n\n'));
        return message.channel.send(syntaxEmbed);
    }

    const Syntax_names = args.shift().toLowerCase();
    const syntax = Syntax.get(Syntax_names)
  		|| Syntax.find(cmd => cmd.aliases && cmd.aliases.includes(Syntax_names));
    if(!syntax)
        return message.reply('invalid syntax id');
    try {
        syntax.execute(message,args);
    }
   catch (error) {
        console.error(error);
        message.reply('there was an error trying to fetch the syntax!');
    }

    
	},
};
