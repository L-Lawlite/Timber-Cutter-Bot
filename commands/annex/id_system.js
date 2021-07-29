const Discord = require('discord.js');
const {color} = require('./annex_config.json')


module.exports = {
  name: 'id_system',
	description: 'Library for id System',
    execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('How to Use?')
    .setFooter('Made by 𝖄𝖆𝖑𝖉𝖆𝖇𝖆𝖔𝖙𝖍#7926');
    embed.setDescription(`ID is a scoreboard named \`lib.ID\`

This gives unique id to each and every player.

    [**Download Link**](https://datapackcenter.com/projects/datapack-utility-library.300/)
    `);
    return message.channel.send(embed);
	},
};
