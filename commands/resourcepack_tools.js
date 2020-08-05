const Discord = require('discord.js');

module.exports = {
  name: 'resourcepack_tools',
	description: 'Shows important website and Application for Resource Pack',
  aliases:['rs_tools'],
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
     .setDescription(`Here are some useful tools for datapack creating:`)
     .addFields(
       {
         name:`Make 3d Models`,
         value:`[Blockbench](https://blockbench.net/)`
       },
       {
         name:`Animated Models`,
         value:`[Animated Models](http://vberlier.github.io/animated-models/)`
       },
       {
         name:`Custom Heads`,
         value:`[Lots of Player Heads](https://minecraft-heads.com/ )`
       },
       {
         name:`Browse gamefiles and get the default loot tables, Advancement etc.`,
         value:`[MC Cloud](https://mcasset.cloud/)`
       }
     );

    message.channel.send(embed);
	},
};
