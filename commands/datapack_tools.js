const Discord = require('discord.js');

module.exports = {
  name: 'datapack_tools',
	description: 'Shows important website and Application for datapack',
  aliases:['dpc_tools','dpc_tool'],
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
       },
       {
         name:`Loot Table Generator (both are good use on your personal preference)`,
         value:`[Misode](https://misode.github.io/loot-table/)\n[mcstacker.net](https://mcstacker.net/)`,
       },
       {
         name:`Browse gamefiles and get the default loot tables, Advancement etc.`,
         value:`[MC Cloud](https://mcasset.cloud/)`
       },
       {
         name:`Tellraw, Title, Sign and Book Generator`,
         value:`[Minecraft json](https://minecraftjson.com/)\n[mcstacker.net](https://mcstacker.net/)\n[Minecraft Tools](https://minecraft.tools/en/)`
       },
       {
         name:`Lot of Asthetic and useful tools`,
         value:`[Minecraft Tools](https://minecraft.tools/en/)`
       },
       {
         name:`Predicate Generator`,
         value:`[Predicate Generator](https://misode.github.io/predicate/)`
       },
       {
         name:`Advancement Generator`,
         value:`[Advancement Generator](https://misode.github.io/advancement/)`
       },
       {
         name:`World setting Generator (Note: Can also be used for Custom Dimensions with little editing)`,
         value:`[World Generator](https://misode.github.io/worldgen/)`
       },
       {
         name:`Particle Generator`,
         value:`[Cloud Wolf](https://cloudwolfyt.github.io/pages/gens/particle-plots.html)`
       },
       {
	 name:`Predicate Location Check Generator`,
	 value:`[Location Check Predicate](https://weaversong.github.io/) made by WeaverSong#7358`
       },
       {
	 name:`JMC, Javascript-Like Minecraft Functions`,
         value:`[Compiler for JavaScript inspired minecraft functions](https://wingedseal.github.io/docs.jmc/) made by WingedSeal#0795`
       },
       {
	 name:`FancyPants, 1.17 shader for custom armor textures`,
	 value:`[Shader to make custom armor textures in vanilla minecraft](https://github.com/Ancientkingg/fancyPants) made by Ancientkingg#0420`
       },
       {
	 name:`Mitochondria Online, Pack Merger`,
         value:`[Online tool to automatically merge datapacks or resourcepacks, to reduce imcompatibility](https://mito.thenuclearnexus.live) made by TheNuclearNexus#8255`

     );

    message.channel.send(embed);
	},
};
