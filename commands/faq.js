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

    const name = args[1];
    console.log(args); 
    console.log(name);
    
	},
};
