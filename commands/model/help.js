const Discord = require('discord.js');
const {color} = require('./model_config.json')


module.exports = {
  name: 'error',
	description: 'Common mistake made in resource pack',
    aliases:['errors'],
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
    embed.setDescription('If you have an error in your 3D Minecraft model, Check:\n')
         .setColor(color)
         .addFields(
           {
             name:'1. The texture files are properly saved and directly exported from blockbench to the correct file structure.',
             value:'    - Make sure the model\'s json file points to the correct textures with the correct file path.'
           },
           {
             name:'2. ALL files (except the main data pack folder) have NO UPPERCASE LETTERS and NO SPACES.',
             value:'   - Make sure that when you change the names, you change the names within the files that refer to them too.'
           },
           {
             name:'3. Your resource pack is properly loaded into the game.',
             value: ' -Pack.mcmeta pack format number of 4 before 1.15, 5 for 1.15, 6 for 1.16'
           },
           {
             name:'4. All the cubes in your model have a texture applied to them',
             value:'   - Make sure to check by going into the model\'s .json file TEXT, and searching for the word \"missing\".'
           },
           {
             name:'5.Make sure all angles are -45/-22.5/0/22.5/45',
             value:'\u200B'
           },
           {
             name:'6. Use a 6 digit custom model data number, and increase the number(Ex. 000001 will not work)',
             value:'\u200B'
           },
           {
             name:'7.Make sure ALL surfaces of ALL the cubes in the model have a texture on it, even if you can\'t see that side of the cube. (Or else the texture will be labeled as missing)',
             value:'\u200B'
           },
           {
             name:'8. If there are multiple custom model datas/predicates in the item json file, make sure there is a comma after each predicate line after the last curly brace EXCEPT the last predicate line.',
             value:'\u200B'
           },
           {
             name:'9. If multiple custom model datas are present, make sure they go in increasing numerical order from top to bottom of the file.',
             value:'\u200B'
           },
           {
             name:'10. Make sure that you are using a .json model. If it’s a bbmodel, go to file—> export—> blockmodel and it should say saved as a .json file.',
             value:'\u200B'
           },
           {
             name:'11.Check the log for errors',
             value:`if u dont know how to check log use \`${prefix}log\``
           }
         );
    return message.channel.send(embed);
	},
};
