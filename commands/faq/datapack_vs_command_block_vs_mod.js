const Discord = require('discord.js');

module.exports = {
  name: 'datapack_is_better',
  aliases:['datapack_vs_command_blocks','dpc_is_better','datapack_vs_mod'],
	description: 'Comparison between Datapack, Command block and Mods',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Comparison between Datapack, Command block and Mods')
    .setDescription(`**----========Why datapacks are better than command blocks: ========----**
    1. Command blocks are way laggier
    2. Datapacks have things like custom drops for entities and they have a lot more things that are not possible with only using command blocks. for example predicates and custom dimensions. 
    3. Datapacks have functions which can be used to run a sequence of commands in a very convenient way, instead of needing a block for each command. 
    4. Functions are only running when something triggers them, which means you can have thousands of functions sitting in your datapacks without any of them using resources unless they were triggered, which makes them way more optimized than command blocks. 
    5. Easier way to trigger sequence of commands.
    6. Datapack functions run all of the commands in the same tick, but the order still matters. that means you can have actions that the player cant see. for example setting a block and removing it in one function won't be seen by that player at all.
    **----========Why datapacks are better than mods: ========----**
    1. Datapacks use a much easier coding language.
    2. Datapacks don't need any extra downloads
    3. Datapacks are easier to understand
    4. Datapacks are easier to implement into your gameplay
    5. In servers, individuals don't need to download the pack, you can just upload the pack to the server's files
    6. Datapacks community is currently bigger than the mod community, and the mod community is dying very fast. 

    Datapacks only have one major disadvantage from mods: datapacks have way less power - they can't create custom gui, armor, crafting, mobs, blocks etc. although some of these have an alternative ways to get those. hopefully mojang will add an official way to create all of those.
    `);
    return message.channel.send(embed);
	},
};
