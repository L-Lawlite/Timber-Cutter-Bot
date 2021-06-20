const Discord = require('discord.js');
const {color} = require('./editor_config.json')


module.exports = {
  name: 'vscode',
	description: 'Vscode download link and datapack related plugins',
    aliases:['visual_studio_code'],
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('Visual Studio Code download')
    .setDescription(`
    [VSCode](https://code.visualstudio.com/download)

    **VS Code plugins**
    [Data-pack Helper Plus](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-language-server)
    [language-mcfunction](https://marketplace.visualstudio.com/items?itemName=arcensoth.language-mcfunction)
    [Minecraft GLSL Shaders](https://marketplace.visualstudio.com/items?itemName=strum355.vscode-mc-shader)
    [NBT Editor](https://marketplace.visualstudio.com/items?itemName=Misode.vscode-nbt)
    [MC Datapack](https://marketplace.visualstudio.com/items?itemName=HuJohner.mc-datapack)

    `)
    return message.channel.send(embed);
	},
};
