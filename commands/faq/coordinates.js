const Discord = require('discord.js');
const {color} = require('./info_config.json')

module.exports = {
  name: 'coordinates',
  aliases:['coords'],
	description: 'Details about cartesian coordinate system in minecraft',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('Coordinates')
    embed.setDescription(`
    **Coordinate system**
    Coordinates are based on a grid where three lines or axes intersect at the origin point.
     •The x-axis indicates the player's distance east (positive) or west (negative) of the origin point—i.e., the longitude,
     •The z-axis indicates the player's distance south (positive) or north (negative) of the origin point—i.e., the latitude,
     •The y-axis indicates how high or low (from 0 to 255, with 64 being sea level) the player is—i.e., the elevation,
     •The unit length of the three axes equal the side of one block. And, in terms of real-world measurement, one block equals 1 cubic meter.

    **Block position**
    The position of a block is actually the coordinates of the point at the lower northwest corner of the block, that is, the integer coordinates obtained by rounding down the coordinates inside the block.
    
    In Minecraft, decimal coordinates usually needs to be converted into integer coordinates by rounding down, which is called the block position of the coordinate.

    For more details [click here!](https://minecraft.fandom.com/wiki/Coordinates) 
    `)
    .setImage('https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/51/Coordinates.png/revision/latest/scale-to-width-down/200?cb=20200729013357')
    .setThumbnail('https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e9/Minecraft_axes.png/revision/latest/scale-to-width-down/180?cb=20181111214433');

    return message.channel.send(embed);
	},
};
