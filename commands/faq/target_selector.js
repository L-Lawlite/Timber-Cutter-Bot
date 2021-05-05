const Discord = require('discord.js');
const {prefix} = require('../../config.json')

module.exports = {
  name: 'target_selector',
  aliases:['target_selectors','@a','@e','@s','@r','@p'],
	description: 'Details of target Selector',
	execute(message, args) {
    const embed1 = new Discord.MessageEmbed()
    .setColor('#0099ff');
    const embed2 = new Discord.MessageEmbed()
    .setColor('#0099ff');
    
    let targetArguments=['position','distance','volume','scores','team','limit','level','gamemode','name','rotation','type','tag','nbt','advancement','predicate'];

    if(!args.length){
        embed1.setTitle('Target selector')
        .setDescription(`
        A target selector variable identifies the broad category of targets to select.here are five variables:

        **@p**
        Targets the nearest player from the command's execution. If there are multiple nearest players, caused by them being precisely the same distance away, the player who most recently joined the server is selected.Target selector arguments may be used to specify what category of players to select the nearest player from. For example, \`@p[team=Red]\` targets the nearest player on team Red even if there are other players closer.
        If no execution place is sepecified(as in datapack) the location is considered world spawn and the nearest player is taken from world spawn itself.

        **@r**
        Targets a random player.Targets a random player. Target selector arguments may be used to specify what category of players to select a random player (or more) from. For example, \`@r[team=Red]\` targets a random player from team Red.

        **@a**
        Targets every player (alive or dead) by default unless Target selector arguments are used. For example, \`@a[team=Red]\` only targets all players on team Red.

        **@e**
        Targets all alive entities (including players) in loaded chunks. It ignores dead entities. Target selector arguments may be used to specify what category of entities to target from. For example, \`@e[type=cow]\` only targets cows. It is usually a good idea to use \`@e\` selector with atleast a type argument so u dont have to loop through all entities in the search as \`@e\` selector is most resource heavy selector out of all other selectors.

        **@s**
        Targets the entity (alive or dead) that executed the command. It does not target anything if the command was run by a command block or server console. It will be most used selector in datapack as it uses least resources out of all selectors.
        `)
        .setImage('https://i.imgur.com/EWc748I.jpg');

      embed2.setTitle('Target selector arguments')
      .setDescription(`
      After a target selector, optional arguments can be used to narrow down the set of targets to a group that also matches certain criteria. When used with \`@a\` or \`@e\`, arguments narrow down the targets from the full list to a specific group. When used with \`@p\` or \`@r\`, the nearest or random player is selected from the group. When used with \`@s\`, the player using the command is targeted only if they would be in the narrowed group.

      Argument-value pairs appear within square brackets after the target selector variable, separated by commas:

                               \`@<variable>[<argument>=<value>,<argument>=<value>,...]\`
    Arguments and values are case-sensitive. Spaces are allowed around the brackets, equal signs, and commas, except in between the target variable and the first bracket. Commas must be used to separate argument-value pairs.

    If there are multiple argument-value pairs, they all must be satisfied to add a potential target to the group. (In other words, they are [AND](https://en.wikipedia.org/wiki/AND_gate)-ed together).

    To visit [minecraft gamepedia click here!](https://minecraft.fandom.com/wiki/Commands#Target_selector_variables)

    and for information about other selectors use ${prefix}info target_selector ${targetArguments.join(' / ')}
      `);

        message.channel.send(embed1);
        message.channel.send(embed2);
        return;
    }

    
    switch(args.toString().toLowerCase())
    {
      case targetArguments[0]:{
        embed1.setTitle('Position arguments')
        .setDescription(`
        \`[x=<value>,y=<value>,z=<value>]\`
        Define a position in the world the selector starts at, for use with the distance argument or the volume arguments. Defining the position alone can be used with a target selector that selects the nearest or farthest entities from those coordinates, but it otherwise has no use, so applying it (and only it) to \`@e\` still selects all entities in the same dimension. Cannot duplicate any one of these three arguments.
        The positional components are doubles, allowing for values like \`+12.34\`, and they are not center-corrected, meaning \`x=0\` is not corrected to \`x=0.5\`.
        `);
        break;
      }
      case targetArguments[1]:{
        embed1.setTitle('Selecting targets by distance')
        .setDescription(`
        Filter target selection based on their Euclidean distances from some point, searching for the target's feet (a point at the bottom of the center of their hitbox). If the positional arguments are left undefined, radius is calculated relative to the position of the command's execution. Cannot duplicate this argument.

        **\`[distance=<value>]\`** - Specifies the range of distance. Only unsigned values are allowed. Ranges are supported to select a specific region:
        \`\`\`elixir
        @e[distance=10] — Target all entities exactly ten blocks away.
        @e[distance=8..16] — Target all entities more than eight blocks, but less than 16 blocks away (inclusive).
        @e[distance=..16] — Target all entities between source and 16 blocks away (inclusive).
        \`\`\`
        `);
        break;
      }

    }

    message.channel.send(embed1);


	},
};
