const Discord = require('discord.js');

const {color} = require('./faq/info_config.json')

module.exports = {
	name: 'info',
	description: 'Some useful information',
    usage:'[Topic]',
	execute(message, args) {
    const { faqs } = message.client;
    const faqEmbed = new Discord.MessageEmbed()
        .setColor(color);
    var data = [];
    if(!args.length){
        faqEmbed.setTitle('Here\'s a list of all my faqs:\n');
			var faqName = faqs.map(faq => faq.name);
			var desc = faqs.map(faq => faq.description);
			for(var i=0; i<faqName.length; i++){
				data[i] = `**${faqName[i]}**\n${desc[i]}`;
			}
            faqEmbed.setDescription(data.join('\n\n'));
        return message.channel.send(faqEmbed);
    }

    const faqNames = args.shift().toLowerCase();
    const faq = faqs.get(faqNames)
  		|| faqs.find(cmd => cmd.aliases && cmd.aliases.includes(faqNames));
    if(!faq)
        return message.reply('invalid faq id');
    try {
        faq.execute(message,args);
    }
   catch (error) {
        console.error(error);
        message.reply('there was an error trying to fetch the faq!');
    }

    
	},
};
