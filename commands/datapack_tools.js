const Discord = require('discord.js');

module.exports = {
  name: 'datapack_tools',
	description: 'Shows important website and Application for datapack',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
     .setDescription(`Here are some useful tools for datapack creating:`)
     .addFields(
       {
         name:`MOST USEFUL COMMAND GENERATOR\nhas \`/summon\`,\`/give\`,\`/fill\`,\`/kill\` etc.`,
         value:`[mcstacker.net](https://mcstacker.net/)`
       },
       {
         name:`Custom Recipe for Crafting Table, Furnace , Blast Furnace, Smoker, Stone Cutter and Smithing Table\n[Note:All this does\'t include items with nbt data]`,
         value:`[Recipe Generator](https://crafting.thedestruc7i0n.ca/)`
       }

     );

    message.channel.send(embed);
	},
};
