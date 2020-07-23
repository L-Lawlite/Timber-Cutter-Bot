const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;
		const helpEmbed = new Discord.MessageEmbed();

		if (!args.length) {
			helpEmbed.setTitle('Here\'s a list of all my commands:\n');
			var commandName = command.map(command =>	command.name);
			var desc = command.map(command => command.description);
			for(var i=0; i<commandName.length; i++){
				helpEmbed.addFields(
					{ name: commandName[i] , value: desc[i], inline: true},
					{ name: '\u200B', value: '\u200B' }
				)
			}

			helpEmbed.setFooter(`You can send \`${prefix}help [command name]\` to get info on a specific command!`);

			return message.author.send(helpEmbed)
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a DM with all my commands!');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('it seems like I can\'t DM you!');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(`\n`)}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);


		helpEmbed.setDescription(data.join());

		message.channel.send(helpEmbed);
	},
};
