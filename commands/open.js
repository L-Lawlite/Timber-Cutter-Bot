const Discord = require('discord.js');

module.exports = {
  name: 'open',
	description: 'Opens channel',
  guildOnly: true,
  cooldown: 60,
	execute(message, args) {
		const openEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('**Minecraft Help Channel**')
      .setDescription('Feel free to ask for help or advice on data packs, resource packs, or anything else related to Minecraft')
      .addFields(
        {
          name:'How to ask a question',
          value:'Many would think this is simple, but please read this anyways.'
        },
        {
          name:'**Give properly**:',
          value:`1.What are you trying to do?\n2.What have you tried? (Send the commands and such)\n3. What's the problem? Is it invalid, or does it just not do what you want it to do?\n4. What does log say? (Optional, unless the Helper asks for it)\n\nTo learn how to properly ask a question [Click Here!](https://dontasktoask.com/)`
        }
      );


      if(message.channel.name.startsWith(`⏳`)){
        message.channel.send(openEmbed);
        message.channel.setName(`🔑ask-question-here`)
          .then(r => console.log('channel became open'))
          .catch(error => console.log(error));
      }
      else{
        if(message.channel.name.startsWith(`🔑`))
        message.reply(' Just ask the question');
        else
        message.reply(' You can\'t use this here!');
      } 
	},
};
