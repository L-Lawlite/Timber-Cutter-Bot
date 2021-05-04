const Discord = require('discord.js');
const {prefix} = require('../../config.json');

module.exports = {
  name: 'coordinates_in_commands',
  aliases:['local_coordinates','relative_coordinates','coords_in_commands','coordinates_in_cmds','coords_in_cmds','local_coords','relative_coords','rel_coords','loc_coords'],
	description: 'Details about Relative and Local Coordinates ',
	execute(message, args) {
    const embed1 = new Discord.MessageEmbed()
    .setColor('#0099ff');
    var embed2 = new Discord.MessageEmbed();
    embed2=embed1;
    embed1.setTitle('Relative world coordinates: Tilde notation(~)')
    .setDescription(`
    Ordinarily, position arguments are expressed as a set of three absolute world coordinates (X Y Z), each number representing a distance along an axis from the world origin.For more details use \`${prefix}info coordiantes\`.

    Each coordinate can alternatively be expressed as a *relative world coordinate*, written in *tilde notation* (~ΔX ~ΔY ~ΔZ). A number following a [tilde](https://en.wikipedia.org/wiki/tilde) (~) describes an offset from execution position along one of the world axes, and a lone tilde assumes an offset of 0; for example, the position \`~10 ~ ~-30\` means \`10 blocks east (+X) and 30 blocks north (–Z) of here\`.

    Essentially, \`~ ~ ~\` is shorthand for the command's current position.

    Relative world coordinates can mix with absolute coordinates; for example, \`tp ~ 64 ~\` keeps the sender's X and Z positions unchanged but teleports them to an absolute height of 64 blocks.

    The \`execute\` command can update a command's current position, changing the meaning of \`~ ~ ~\`.
    `);
    embed2.setTitle(`Local coordinates: Caret notation(^)`)
    .setDescription(`
    The other way to describe positions is with *local coordinates*, written entirely in *caret notation* (\`^ΔXlocal ^ΔYlocal ^ΔZlocal\`). Like relative coordinates, these describe positions relative to where a command is executed from, but with different directions. A number following a [caret](https://en.wikipedia.org/wiki/caret) (^) is an offset within a moving, entity-centric frame: This coordinate system is centered at the sender's feet, with \`+Xlocal\` directed to its left, \`+Ylocal\` directed upward, and \`+Zlocal\` directed in the direction the sender faces. (Note that an entity with rotation 0 0 has its local frame aligned with the world frame.)

    Described in other terms, these coordinates express \`^ΔSway ^ΔHeave ^ΔSurge\`

    The origin is the position of the command's execution. For example, in \`tp\` the offset is from the position of execution.

    For example, \`tp ^ ^ ^5\` teleports the player 5 blocks forward. If they turn around and repeat the command, they are teleported back to where they started.

    Pressing F3+B displays the \`+Zlocal\` direction for all entities as a blue ray centered on their heads.

    Local coordinates cannot be mixed with world coordinates (e.g. \`^ 0 ^\`, \`^ 0 ~1\`), and attempting so alerts the typist, "Cannot mix world & local coordinates (everything must either use ^ or not)." So such a command fails or cannot be executed.

    A command's execution position, rotation, dimension, and anchor all change the effect of using \`^ ^ ^\`. These can be updated by the \`execute\` command.


    For more details [click here!](https://minecraft.fandom.com/wiki/Commands#Relative_world_coordinates:_Tilde_notation) 
    `);

    message.channel.send(embed1);
    message.channel.send(embed2);
	},
};
