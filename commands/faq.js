const fs = require('fs');
const Discord = require('discord.js');
module.exports = {
	name: 'faq',
	description: 'Some useful faq',
	execute(message, args) {
    var faqs = new Discord.Collection();
    const faqName = fs.readdirSync('./faq').filter(file => file.endsWith('.js'));

		}
	},
};
