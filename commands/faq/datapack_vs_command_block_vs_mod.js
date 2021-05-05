const Discord = require('discord.js');

module.exports = {
  name: 'datapack_is_better',
  aliases:['datapack_vs_command_blocks','dpc_is_better','datapack_vs_mod'],
	description: 'Comparison between Datapack, Command block and Mods',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setFooter('Made by GFTK#4227')
    .setTitle('Comparison between Datapack, Command block and Mods')
    .setDescription(`**----========Why datapacks are better than command blocks: ========----**
    1. Command blocks cause more lag in general
    2. Datapacks have things like custom drops for entities and they have a lot more things that are not possible by only using command blocks. For example predicates and custom dimensions, and loot tables. 
    3. Datapacks have functions which are used to run a sequence of commands in a very convenient way, instead of needing a block for each command. 
    4. Functions only run when something triggers them, so you can have thousands of functions sitting in your datapacks without any of them using resources unless they were triggered, which makes them way more optimized than command blocks. 
    5. Easier way to trigger  sequences of commands (no need in any redstone, just one command).
    6. Datapack functions run all of the commands in the same tick, but the order still matters. That means you can have actions that the player cant see. For example setting a block and removing it in one function won't be seen by that player at all. This is useful for things like custom names and more
    **----========Why datapacks are better than mods: ========----**
    1. Datapacks use a much easier coding language.
    2. Datapacks don't need any extra downloads - you just straight up make folders, create text files, change their extensions and you got a datapack function. 
    3. Datapacks are easier to understand
    4. Datapacks are easier to implement into your gameplay. You just drag the folder into the right path and your datapack is added to a world. 
    5. In servers, individuals don't need to download the pack, you can just upload the pack to the server's files. 
    6. The datapack community is currently bigger than the mod community, and the mod community is dying very fast. 
    
    Datapacks only have one major disadvantage from mods: Datapacks have way less power - they can't create custom gui, armor, crafting, mobs, blocks etc. although some of these have an alternative ways to get those. hopefully mojang will add an official way to create all of those in the future.
    `);
    return message.channel.send(embed);
	},
};
