const Discord = require('discord.js');
const { prefix } = require('../config.json')

module.exports = {
	name: 'annex',
	description: 'Some useful Libraries or commands',
    usage:'[Topic]',
	execute(message, args) {
    const { annex } = message.client;
    const annexEmbed = new Discord.MessageEmbed();
    var data = [];
    if(!args.length){
        syntaxEmbed.setTitle('Annex:');
            var Description;
            Description = `What is meaning of Annex?
            Add as an extra or subordinate part.
            
            List of all the Annex:\n`


			var annexName = annex.map(annex => annex.name);
			var desc = annex.map(annex => annex.description);
			for(var i=0; i<annexName.length; i++){
				data[i] = `**${annexName[i]}**\n${desc[i]}`;
			}
            annexEmbed.setDescription(Description + data.join('\n\n'));
        return message.channel.send(annexEmbed);
    }

    const Annex_names = args.shift().toLowerCase();
    const AnnexCheck = annex.get(Annex_names)
  		|| annex.find(cmd => cmd.aliases && cmd.aliases.includes(Annex_names));
    if(!AnnexCheck)
        return message.reply(`invalid syntax id.\nCorrect Syntax is \`${prefix}annex \[Topic\]\``);
    try {
        annexCheck.execute(message,args);
    }
   catch (error) {
        console.error(error);
        message.reply('there was an error trying to fetch the syntax!');
    }

    
	},
};
