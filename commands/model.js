const Discord = require('discord.js');
const { prefix } = require('../config.json');
const fs = require('fs');
const syntax = require('./syntax');
const { model } = require('mongoose');

module.exports = {
  name:'model',
  description:'List everything related to model',
  execute(message,args) {
    const { modelCommands } = message.client;
    const modelEmbed = new Discord.MessageEmbed();
    var data = [];
    if(!args.length){
      modelEmbed.setTitle(`List of all commands available in ${prefix}model`)
      var modelName = modelCommands.map(model => model.name);
      var desc = modelCommands.map(model => model.description);
      for (i=0; i<modelName.length ; i++) {
        data[i] = `**${modelName[i]}**\n${desc[i]}`;
      }
      modelEmbed.setDescription(data.join('\n\n'));
      return message.channel.send(modelEmbed);
    } 

    const ModelNames = args.shift().toLowerCase();
    const modelCheck = modelCommands.get(ModelNames) 
      || modelCommands.find(cmd => cmd.aliases && cmd.aliases.includes(ModelNames));
    if(!modelCheck){
      var modelName = modelCommands.map(model => model.name);
      return message.reply(`Wrong model syntax correct model syntax is \`${prefix}model ${modelName.join('/')}\``);

    }
    try {
      modelCheck.execute(message,args);

    }
    catch(error) {
      console.error(error);
      message.reply('there was an error trying to fetch the command!');
    }
    
  }
};
