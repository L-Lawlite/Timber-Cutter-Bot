const fs = require('fs');
const Discord = require('discord.js');
module.exports = {
	name: 'faq',
	description: 'Some useful faq',
	execute(message, args) {
    const { faqs } = message.client;
    console.log(faqs);
    if(!args.length){

    }
	},
};
