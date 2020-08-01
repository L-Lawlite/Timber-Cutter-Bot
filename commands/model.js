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
      case 'error':
        embed.setDescription('If you have an error in your 3D Minecraft model, Check:')
         .setColor('#0099ff')
         .addFields(
           {
             name:'1. The texture files are properly saved and directly exported from blockbench to the correct file structure.',
             value:'    - Make sure the model\'s json file points to the correct textures with the correct file path.'
           },
           {
             name:'2. ALL files (except the main data pack folder) have no uppercase and no spaces.',
             value:'\ub002'
           },
           {
             name:'Your resource pack is properly loaded into the game.',
             value: ' -Pack.mcmeta pack format number of 4 before 1.15, 5 for 1.15, 6 for 1.16'
           },
           {
             name:'4. All the cubes in your model have a texture applied to them',
             value:'   - Make sure to check by going into the model\'s .json file TEXT, and searching for the word \"missing\".'
           },
           {
             name:'5.Make sure all angles are -45/-22.5/0/22.5/45',
             value:'\ub002'
           },
           {
             name:'6. Use a 6 digit custom model data number, and increase the number(Ex. 000001 will not work)',
             value:'\ub002'
           },
           {
             name:'7.Make sure ALL surfaces of ALL the cubes in the model have a texture on it, even if you can\'t see that side of the cube. (Or else the texture will be labeled as missing)',
             value:'\ub002'
           },
           {
             name:'8. If there are multiple custom model datas/predicates in the item json file, make sure there is a comma after each predicate line after the last curly brace EXCEPT the last predicate line.',
             value:'\ub002'
           },
           {
             name:'9. If multiple custom model datas are present, make sure they go in increasing numerical order from top to bottom of the file.',
             value:'\ub002'
           },
           {
             name:'10. Make sure that you are using a .json model. If it’s a bbmodel, go to file—> export—> blockmodel and it should say saved as a .json file.',
             value:'\ub002'
           }
         );
         message.channel.send(embed);
        break;
      default:

    }

  },
};
