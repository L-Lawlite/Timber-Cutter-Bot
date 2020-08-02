const Discord = require('discord.js');
module.exports = {
	name: 'useful_tools',
	description: 'Shows links to useful website and applications',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
      .setDescription('Here are some useful tools for datapack creating:\n  WEBSITES: ')
      .addFields(
        {
          name:'[mcstacker.net](https://mcstacker.net/)',
          value:`Most useful command generator - \`/execute\`,\`/summon\`,\`/give\` etc. `
        }
      );

      message.channel.send(embed);
	},
};
