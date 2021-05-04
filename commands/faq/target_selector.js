const Discord = require('discord.js');

module.exports = {
  name: 'target_selector',
  aliases:['target_selectors','@a','@e','@s','@r','@p'],
	description: 'Details of target Selector',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff');
    if(!args.length){
        embed.setTitle('Target selector')
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
        return message.channel.send(embed);
    }

	},
};
