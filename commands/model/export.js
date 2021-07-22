const Discord = require('discord.js');
const {color} = require('./model_config.json')


module.exports = {
  name: 'export',
	description: 'Export model as \`json\` in Blockbench ',
    aliases:['export_as_json','blockbench_export'],
	execute(message, args) {
        message.channel.send({files:['./commands/images/export.png']});
	},
};
