const Discord = require('discord.js');

module.exports = {
  name: 'model_parent',
	description: 'Details about the parent of models used for Resource Pack',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Model Parent')
    .setFotter('Made by Nope#1730');
    embed.setDescription(`When deciding on a parent item, you need to figure out what item you're using
    the default generic parent items are \`item/generated\`, \`item/handheld\`, and \`item/handheld_rod\` for most items, along with five template parent items for their own specific items (for banners, beds, skulls, shulker boxes, and spawn eggs respectively). For some items, the parent is builtin/entity, two items of note being the shield and the trident, only the former of which can allow custom model data.

    •\`item/handheld_rod\` is the default parent for the fishing rod, carrot on a stick, and its warped fungus variant

    •\`item/handheld\` is the default parent for tools and weapons the player uses. IE swords, pickaxes, shovels, axes, and hoes.

    •\`item/generated\` is the default parent for every other item that isn't a block

    •\`blocks\` in their item form have the parent models of their block counterparts in the block folder. usually within the models folder, there are block and item sub-folders that hold their specific models, the blocks in the item folder take their parents from the blocks in the block folder

    •\`builtin/entity\` is a unique designation where the item (or block) whose model is directly hardcoded into the game, most often is the case of the item taking its texture from an existing mob elsewhere in the game, such as a creeper head taking its texture from the creeper mob. In most cases, this means that the item cannot support custom model data. In general, blocks (when placed) cannot support custom model data, while the block items can support custom model data.

    •generally, you can have a custom parent item for your custom model file, such as creating an alternate bow texture and making it show up the same as the bow, using item/bow, or if you want to set up your own model type, and having other items use that specific model (ie making a item/derpy json file and having one of your models reference that model as its parent).
    `)
    return message.channel.send(embed);
	},
};
