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
				faq.setDescription(`**${faqName[i]}**\n${desc[i]}`);
			}
        return message.channel.send(helpEmbed);
    }

    const name = args[1].toLowercase();
    console.log(args); 
    console.log(name);
    
	},
};
