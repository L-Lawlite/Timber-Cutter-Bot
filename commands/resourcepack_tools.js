const Discord = require('discord.js');

module.exports = {
  name: 'resourcepack_tools',
	description: 'Shows important websites and applications for Resource Packs',
  aliases:['rs_tools','rpc_tools'],
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
         name:`Browse gamefiles, get the default model json files, etc`,
         value:`[MC Cloud](https://mcasset.cloud/)`
       },
       {
        name:`Custom Model Data Generator`,
        value:`[Custom Model Data Generator](https://gravitowl.github.io/modeldata.html)`
      }
     );

    message.channel.send(embed);
	},
};
