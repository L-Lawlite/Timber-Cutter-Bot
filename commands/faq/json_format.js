const Discord = require('discord.js');

module.exports = {
  name: '',
	description: 'Brief description about json formatting',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Json Formatting')
    .setDescription(`
    The \`/tellraw\` and \`/title\` commands use the raw JSON text format to display texts.
Also, Some values of arguments in NBT structures are using JSON format.

For more details [click here](https://minecraft.fandom.com/wiki/Raw_JSON_text_format)
    `)
    return message.channel.send(embed);
	},
};
