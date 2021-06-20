const Discord = require('discord.js');
const {color} = require('./info_config.json')


module.exports = {
  name: 'access_default_files',
	description: 'Details about custom model of throwable object',
    aliases:['access_default_file', 'access_minecraft_file','access_minecraft_files','access_file','access_files'],
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('How to get the default resourcepack/datapack of minecraft')
    .setFooter('Made by GFTK#4227');
    embed.setDescription(`Go to \`.minecraft/versions\`, look for the version you want to get the files from, and open the \`.jar\` file there using \`.7z\` or some similar program like winrar. Then it will make an assets folder, along with other stuff. That's your default resourcepack. from there you can access all of the default models, textures sounds and more of minecraft. (for the default DATAPACK, just open the jar, and click data instead of assets) another option is to change its extension from \`.jar\` to \`.zip\`. Afterwards, right click the zip file and extract it.

    Alterately visit [mcassets.cloud](http://mcasset.cloud/) and browse your files from there.
    `)
    return message.channel.send(embed);
	},
};
