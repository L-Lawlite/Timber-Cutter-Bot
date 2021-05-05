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

      case targetArguments[2]:{
        embed1.setTitle('Selecting targets by volume')
        .setDescription(`
        \`[dx=<value>,dy=<value>,dz=<value>]\` - Filter target selection based on their x-difference, y-difference, and z-difference from some point, as measured from the closest corner of the entities' hitboxes. Cannot duplicate any one of these three arguments.
        This can be interpreted as creating a rectangular volume defined by an initial position (<x>,<y>,<z>) and diagonal vector (<dx>,<dy>,<dz>), then selecting all entities whose hitboxes are at least partially contained by that volume‌. If the positional arguments are left out, the selection is interpreted as originating from the position of the command's execution. Any values are allowed, including signed and fractional numbers.
        Note that \`dx\`,\`dy\`,\`dz\` specify signed differences from the given coordinate. They do not specify a separate coordinate, nor do they extend in both the positive and negative directions.

        Examples:\`\`\`elixir
@e[x=1,dx=4,y=2,dy=5,z=3,dz=6] — Select all entities whose hitbox collides with the block region (1~5, 2~7, 3~9) (or, mathematically speaking, the region that is {(x,y,z)∈R³|x∈[1.0,5.0),y∈[2.0,7.0),z∈[3.0,9.0)}).
@e[x=1,y=2,z=3,dx=0,dy=0,dz=0] — Select all entities whose hitbox contains the point (1,2,3).
        \`\`\`
        It is possible to combine selection by distance and selection by volume, in which case the command select targets only within the overlap of both regions (within a certain radius/I of the volume's initial point and not outside the defined volume).
        `);
        break;
      }
      
      case targetArguments[3]:{
        embed1.setTitle('Selecting targets by scores')
        .setDescription(`
        \`[scores={<objective>=<value>,...}]\` - Filter target selection based on their scores in the specified objectives. Cannot duplicate this argument.
All tested objectives are in a single tag, with a list of individual score selectors between braces afterward. The selectors inside the braces support ranges.
\`\`\`elixir
@e[scores={myscore=10}] — Select all entities with a score in objective myscore of exactly ten.
@e[scores={myscore=10..12}] — Select all entities with a score in objective myscore of between ten and 12 (inclusive).
@e[scores={myscore=5..}] — Select all entities with a score in objective myscore of five or greater.
@e[scores={myscore=..15}] — Select all entities with a score in objective myscore of 15 or less.
@e[scores={foo=10,bar=1..5}] — Select all entities with a score in objective foo of exactly ten, and a score in objective bar of between one and five (inclusive).
\`\`\`
        For more details about scoreboard objectives [click here](https://minecraft.fandom.com/wiki/Scoreboard#Objectives)
        `);
        break;
      }

      case targetArguments[4]:{
        embed1.setTitle('Selecting targets by team')
        .setDescription(`
        Cannot duplicate this argument.
\`\`\`elixir
[team=<teamName>] - Filter target selection to those who are on a given team.
[team=!<teamName>] — Filter to those who are not on a given team.
[team=] — Filter to those who are teamless.
[team=!] — Filter to those who have some team.
\`\`\`
        For more details about teams [click here](https://minecraft.fandom.com/wiki/Scoreboard#Teams)
        `);
        break;
      }
      case targetArguments[5]:
      case 'sorting':
      case 'sort':{
        embed1.setTitle('Limiting and sorting target selection')
        .setDescription(`
        Cannot duplicate these arguments.
        \`[limit=<value>] - Selects only the specified number of targets.\`
        When using the variables @p and @r, this argument defaults to one. Applying the limiting argument to them may artificially increase the number of nearest or random targets selected. When applying this argument to @a or @e, this argument returns only a limited number of targets.
\`\`\`elixir
[limit=<value>,sort=(nearest|furthest|random|arbitrary)] - Limit the number of targets, and specify selection priority.
sort=nearest — Sort by increasing distance. (Default for @p)
sort=furthest — Sort by decreasing distance.
sort=random — Sort randomly. (Default for @r)
sort=arbitrary — Do not sort. (Default for @e, @a)
\`\`\`

Examples:
\`\`\`elixir
@a[limit=3,sort=nearest] or @p[limit=3] — Select the nearest three players.
@a[limit=4,sort=furthest] — Select the furthest four players.
@a[limit=2,sort=random] or @r[limit=2] — Select two players, chosen randomly.
\`\`\`
        
        `);
      }


    }

    message.channel.send(embed1);


	},
};
