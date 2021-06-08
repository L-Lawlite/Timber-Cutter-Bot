const Discord = require('discord.js');
const {prefix} = require('../../config.json')
const {color} = require('./info_config.json')


module.exports = {
  name: 'target_selector',
  aliases:['target_selectors','@a','@e','@s','@r','@p'],
	description: 'Details of target Selector',
	execute(message, args) {
    const embed1 = new Discord.MessageEmbed()
    .setColor(color);
    const embed2 = new Discord.MessageEmbed()
    .setColor(color);
    
    let targetArguments=['position','distance','volume','scores','team','limit','level','gamemode','name','rotation','type','tag','nbt','advancement','predicate'];

    if(!args.length){
        embed1.setTitle('Target selector')
        .setDescription(`
        A target selector variable identifies the broad category of targets to select. Here are the five variables:

        **@p**
        Targets the nearest player from the command's execution. If there are multiple nearest players, caused by them being precisely the same distance away, the player who most recently joined the server is selected.Target selector arguments may be used to specify what category of players to select the nearest player from. For example, \`@p[team=Red]\` targets the nearest player on team Red even if there are other players closer.
        If no execution place is sepecified(as in datapack) the location is considered world spawn and the nearest player is taken from world spawn itself.

        **@r**
        Targets a random player. Target selector arguments may be used to specify what category of players to select a random player (or more) from. For example, \`@r[team=Red]\` targets a random player from team Red.

        **@a**
        Targets every player (alive or dead) by default unless Target selector arguments are used. For example, \`@a[team=Red]\` only targets all players on team Red.

        **@e**
        Targets all alive entities (including players) in loaded chunks. It ignores dead entities. Target selector arguments may be used to specify what category of entities to target from. For example, \`@e[type=cow]\` only targets cows. It is usually a good idea to use \`@e\` selector with atleast a type argument so u dont have to loop through all entities in the search as \`@e\` selector is most resource heavy selector out of all the selectors.

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
        \`\`\`ts
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

        Examples:\`\`\`ts
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
\`\`\`ts
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
\`\`\`ts
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
\`\`\`ts
[limit=<value>,sort=(nearest|furthest|random|arbitrary)] - Limit the number of targets, and specify selection priority.
sort=nearest — Sort by increasing distance. (Default for @p)
sort=furthest — Sort by decreasing distance.
sort=random — Sort randomly. (Default for @r)
sort=arbitrary — Do not sort. (Default for @e, @a)
\`\`\`

Examples:
\`\`\`ts
@a[limit=3,sort=nearest] or @p[limit=3] — Select the nearest three players.
@a[limit=4,sort=furthest] — Select the furthest four players.
@a[limit=2,sort=random] or @r[limit=2] — Select two players, chosen randomly.
\`\`\`
        
        `);
        break;
      }
      case targetArguments[6]:{
        embed1.setTitle('Selected Target by experience level')
        .setDescription(`
        Filter target selection based on their experience levels. This naturally filters out all non-player targets.
        \`[level=<value>]\`
        Cannot duplicate this argument. This selector supports ranges:
        \`\`\`ts
@a[level=10] — Select all players who have exactly ten levels.
@a[level=8..16] — Select all players who have between eight and 16 levels (inclusive).
\`\`\`

        `);
        break;
      }
      case targetArguments[7]:{
        embed1.setTitle('Selecting targets by game mode')
        .setDescription(`
        This naturally filters out all non-player targets. Cannot duplicate this argument.
        \`\`\`ts
[gamemode=<gamemodeName>] — Filter target selection to those who are in the specified game mode.
[gamemode=!<gamemodeName>] — Filter target selection to those who are not in the specified game mode.
\`\`\`
Permitted values for <gamemodeName> are \`spectator\`, \`adventure\`, \`creative\`, and \`survival\`
Examples:
\`\`\`ts
@a[gamemode=survival] — Select all players who are in Survival mode.
@a[gamemode=!spectator] — Select all players who are not in Spectator mode.
\`\`\`

        `);
        break;
      }
      case targetArguments[8]:{
        embed1.setTitle('Selecting targets by name')
        .setDescription(`
        Cannot duplicate this argument.\`\`\`ts
[name=<givenName>] — Filter target selection to all those with a given name.
[name=!<givenName>] — Filter target selection to all those without a given name.
\`\`\`
This is a string, so spaces are allowed only if quotes are applied. This cannot be a JSON text compound.\`\`\`ts
@e[name=!Steve] - Select all entities that are not named "Steve".
\`\`\`
        `);
        break;
      }
      case targetArguments[9]:{
        embed1.setTitle('Selecting targets by rotation')
        .setDescription(`**Vertical**
        Filter target selection based on their pitch, or more specifically their declination from the horizon, measured in degrees. Values range from -90 (straight up) to 0 (at the horizon) to +90 (straight down). Cannot duplicate this argument.
        \`[x_rotation=<value>]\`
This argument supports ranges:\`\`\`ts
@e[x_rotation=0] — Select all entities that are looking directly at the horizon.
@e[x_rotation=30..60] — Select all entities that are looking between 30° and 60° (inclusive) below the horizon.
@e[x_rotation=45..] — Select all entities that are looking 45° or more below the horizon.
@e[x_rotation=..0] — Select all entities that are looking at or above the horizon.
\`\`\`
**Horizontal**
Filter target selection based on their rotation in the horizontal XZ-plane, measured clockwise in degrees from due south (or the positive Z direction). Values vary from -180 (facing due north) to -90 (facing due east) to 0 (facing due south) to +90 (facing due west) to +180 (facing due north again). Cannot duplicate this argument.
\`[y_rotation=<value>]\`
This argument supports ranges, and the maximum can reach values over 180. Some examples:\`\`\`ts
@e[y_rotation=0] — Select all entities that are facing due south.
@e[y_rotation=45] — Select all entities that are facing 45° west of south.
@e[y_rotation=180..270] — Select all entities that are facing in the 90° between due north and due east (inclusive).
@e[y_rotation=-90..0] — Select all entities that are facing in the 90° between due east and due south (inclusive).
@e[y_rotation=-90..90] — Select all entities that are facing between due east and due west (inclusive), through south.
@e[y_rotation=0..180] — Select all entities that are not facing at all east.
\`\`\`
        `);
        break;

      }
      case targetArguments[10]:{
        embed1.setTitle('Selecting targets by type')
        .setDescription(`
        \`[type=<entityType>]\` — Filter target selection to those of a specific entity type.
\`[type=!<entityType>]\` — Filter target selection to those not of a specific entity type.
The given entity type must be a valid [entity ID](https://minecraft.fandom.com/wiki/Namespaced_ID) or [entity type tag](https://minecraft.fandom.com/wiki/Tag#Entity_type_tags) used to identify different types of entities internally. The namespace can be left out if the ID is within the minecraft: namespace. (For example, creeper for creepers, minecart for regular minecarts, tnt for primed TNT, etc.) Entity IDs or tags are case-sensitive.
Examples:\`\`\`ts
@e[type=skeleton] — Select all skeletons.
@e[type=!chicken,type=!cow] — Select all entities except chickens and cows.
@e[type=#skeletons] — Select all skeletons, wither skeletons, and strays.‌
\`\`\`
        `);
        break;
      }
      case targetArguments[11]:{
        embed1.setTitle('Selecting targets by tag')
        .setDescription(`
        \`\`\`ts
[tag=<string>] — Filter target selection to those that have at least one tag of the given name.
[tag=!<string>] — Filter to those that have no tags of the given name.
[tag=] — Filter to those that have exactly zero tags.
[tag=!] — Filter to those that have at least one tag.
\`\`\`

Multiple tag arguments are allowed. All argument specifications must be fulfilled for an entity to be selected.\`\`\`ts
@e[tag=a,tag=b,tag=!c] — Select all entities that have tags a and b, but not tag c.
@r[tag=a] — Select one random player who has tag a.
\`\`\`

For more details about tag [click here](https://minecraft.fandom.com/wiki/Commands/tag)
        `);
        break;
      }
      case targetArguments[12]:{
        embed1.setTitle('Selecting targets by NBT‌')
        .setDescription(`
        \`[nbt=<compoundTag>]\` — Select all targets that have the specified NBT. The NBT is written in its [command definition.](https://minecraft.fandom.com/wiki/NBT_format#TAG_definition)
\`[nbt=!<compoundTag>]\` — Select all targets that does not have the specified NBT.
For example:\`\`\`ts
@a[nbt={OnGround:true}] — Select all players on the ground.
@e[type=sheep,nbt={Color:0b}] — Select all sheep that are dyed white.
@e[type=item,nbt={Item:{id:"minecraft:slime_ball"}}] — Selects all slime ball item entities.
@e[nbt={Tags:[a,b]}] is the same as @e[tag=a,tag=b]. The latter is simpler and reduces CPU load.
\`\`\`
Note: When matching the string form of [namespaced IDs](https://minecraft.fandom.com/wiki/Namespaced_ID) within a tag, the namespace cannot be omitted.
Hence \`@e[type=item,nbt={Item:{id:slime_ball}}]\` cannot find any item entities as the id field always contains a namespaced ID-converted string.
        `);
        break;
      }
      case targetArguments[13]:{
embed1.setTitle('Selecting targets by advancements‌')
.setDescription(`\`\`\`ts
[advancements={<namespaced ID>=<bool>}] — Select all targets that match the specified advancement and value.
[advancements={<namespaced ID>={<criteria>=<bool>}}] — Select all targets that match the specified advancement and value.
\`\`\`
The argument name is the advancement ID (namespace can be left out when namespaced minecraft). The value is true or false.
For advancements with one criterion, testing for that criterion always gives the same results as testing for the advancement.
\`\`\`
@a[advancements={story/form_obsidian=true}] — Selects players who have achieved the advancement minecraft:story/form_obsidian.
@a[advancements={story/form_obsidian=false}] — Selects players who haven't achieved the advancement minecraft:story/form_obsidian.
@a[advancements={story/obtain_armor={iron_helmet=true}}] — Selects players who had armored with iron helmet. The selected players needn't be wearing iron helmet when selected, and needn't have achieved the advancement minecraft:story/obtain_armor.
@a[advancements={story/follow_ender_eye=true}] is the same as @a[advancements={story/follow_ender_eye={in_stronghold=true}}].
\`\`\`
`);
        break;
      }
      case targetArguments[14]:{
        embed1.setTitle('')
        .setDescription(`\`\`\`ts
[predicate=<namespaced ID>] — Select all targets that match the specified predicate.
[predicate=!<namespaced ID>] — Select all targets that fail to match the specified predicate.
\`\`\`
Examples:
\`\`\`
@a[predicate=example:test_predicate] — Selects players who match the example:test_predicate predicate.
@e[predicate=example:test_predicate] — Selects entities who do not match the example:test_predicate predicate.
execute at @a if predicate example:location_plains - Checks if the location command is executed matches the example:location_plains predicate or not.
\`\`\`
        `);
        break;
      }


    }

    message.channel.send(embed1);


	},
};
