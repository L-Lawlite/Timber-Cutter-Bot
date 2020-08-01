const Discord = require('discord.js');

module.exports = {
  name:'model',
  description:'List everything related to model',
  args: true,
  usage: '[command name]',
  cooldown: 10,
  execute(message, args){
    const { models } = message.client;
    const embed = new Discord.MessageEmbed();

    const name = args[0].toLowerCase();
    switch (name) {
      case error:

        break;
      default:

    }

  },
};
