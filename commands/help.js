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
/*			data.push('Here\'s a list of all my commands:\n');
			data.push(commands.map(command => command.name && command.description).join('\n'));
*/
			var desc = commands.map(cmd => cmd.description)
			for(var i = 0; i < desc.length; i++){
					var commandName = commands.map(command => command.name);
					for(var a = 0; a < commandName.length; a++){
						data.push(commandName[a].join('\n'));
						data.push(desc[i].join('\n\n'));

						}
					}

			helpEmbed.setDescription(data.join())
				.setFooter('You can send \`${prefix}help [command name]\` to get info on a specific command!');

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
