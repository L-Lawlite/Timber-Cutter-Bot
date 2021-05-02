const Discord = require('discord.js');

module.exports = {
  name: 'custom_model_bows',
  aliases:["custom_model_crossbows,custom_model_shields,custom_model_compass,custom_model_clocks"],
	description: 'Details about custom model of Bows,Crossbows,Shields,Compass and Clocks',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Custom Model of Bows,Crossbows,Shields,Compass and Clocks')
    .setFooter('Made by Nope#1730');
    embed.setDescription(`The items noted above each have an animation inherent to the item itself, and thus have different code you need to remember when creating custom models.

    • Bows, crossbows, and shields (and by extension clocks and compass’) automatically have overrides in their base vanilla files which allows them to have the animations they possess (ie when loading a crossbow, or when blocking with a shield). When adding custom model data to these items, if you haven’t copied the vanilla file into your resource pack, it’s generally a good idea to also add or keep the vanilla overrides in there, which allow the vanilla items to keep their animations, along with creating models/textures for each animation of your custom item (and adding multiple additional overrides depending on how many the item originally has), allowing your custom item to have animation. Here’s an example of how you would set it up:
    
    \`\`\`
  Vanilla shield json file
    -Override: Vanilla shield blocking json
    -Override: Custom shield json, custom model data 123456
    -Override: Custom shield blocking json, custom model data 123456
    \`\`\`(this description is in no way the actual code for overrides)
    
    > Please note that you don’t need the vanilla override files in your pack, as those overrides are checked in the vanilla files if not in your resource pack
    
         The vanilla Minecraft animation files are as follows:
         -Bows have 4 files total: \`bow.json\` and \`bow_pulling_0.json\` through \`bow_pulling_2.json\`

         -Crossbows have 6 files total: \`crossbow.json\`, \`crossbow_arrow.json\`, \`crossbow_firework.json\`, and \`crossbow_pulling_0.json\` through \`crossbow_pulling_2.json\`
         
         -Shields have two files total: \`shield.json\` and \`shield_blocking.json\`
         
         -Clocks have 64 files total (insanity, I know): \`clock.json\`, and \`clock_01.json\` through \`clock_63.json\`
         
         -Compass’ have 33 files total (still insanity): \`compass.json\`, and \`compass_00.json\` through \`compass_31.json\`
    `)
    return message.channel.send(embed);
	},
};
