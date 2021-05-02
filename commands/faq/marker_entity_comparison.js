const Discord = require('discord.js');

module.exports = {
  name: 'marker_entity_comparison',

	description: 'Comparison between different entities used as marker (Armor Stand, Area effect cloud and Marker(1.17 only))',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Comparison between:')
    .setFooter('Made by GFTK#4227');
    embed.setDescription(`**Area Effect Cloud:** 
    1. The most optimized entity before 1.17
    2. Has a "Duration" tag, which is essentially a timer for self destruction, which could save a lot of effort for making scoreboard timers and kill commands
    3. Not visible in spectator mode
    4. Automatically disappears after one tick if the Duration tag is not specified 
    5. Command for maximum duration AEC is \`summon area_effect_cloud ~ ~ ~ {Duration:2147483647}\` lasts almost 6 years.
    
    **Armor stand:**
    1. Can hold items and models in different rotations and positions
    2. Visible on spectator mode
    
    **Marker:**
    1. The most optimized entity - only has Pos and rotation tags for full optimization
    2. Is completely server side - players cannot see it at all including in the E counter in the f3 screen, making the entity even more optimized (doesn't hold any textures, not visible in spectator mode etc)
    3. Can hold any data like data storages and can be manipulated to have a mobile, physical data storage
    4. Not available before 1.17
    `)
    return message.channel.send(embed);
	},
};
