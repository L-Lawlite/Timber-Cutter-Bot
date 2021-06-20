const Discord = require('discord.js');

const {color} = require('./editor/editor_config.json')

module.exports = {
	name: 'editor',
	description: 'Some useful editors',
    usage:'[Topic]',
	execute(message, args) {
    const { editors } = message.client;
    const editorEmbed = new Discord.MessageEmbed()
        .setColor(color);
    var data = [];
    if(!args.length){
        editorEmbed.setTitle('Here\'s a list of all my editors:\n');
			var editorName = editors.map(editor => editor.name);
			var desc = editors.map(editor => editor.description);
			for(var i=0; i<editorName.length; i++){
				data[i] = `**${editorName[i]}**\n${desc[i]}`;
			}
            editorEmbed.setDescription(data.join('\n\n'));
        return message.channel.send(editorEmbed);
    }

    const editorNames = args.shift().toLowerCase();
    const editor = editors.get(editorNames)
  		|| editors.find(cmd => cmd.aliases && cmd.aliases.includes(editorNames));
    if(!editor)
        return message.reply('invalid editor id');
    try {
        editor.execute(message,args);
    }
   catch (error) {
        console.error(error);
        message.reply('there was an error trying to fetch the editor information!');
    }

    
	},
};
