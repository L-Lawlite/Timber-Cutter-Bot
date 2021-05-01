const Discord = require('discord.js');
module.exports = {
	name: 'faq',
	description: 'Some useful faq',
	execute(message, args) {
    const { faqs } = message.client;
    const faqEmbed = new Discord.MessageEmbed();
    if(!args.length){
        faqEmbed.setTitle('Here\'s a list of all my faqs:\n');
			var faqName = faqs.map(faq => faq.name);
			var desc = faqs.map(faq => faq.description);
			for(var i=0; i<faqName.length; i++){
				faqEmbed.setDescription(`**${faqName[i]}**\n${desc[i]}`);
			}
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
