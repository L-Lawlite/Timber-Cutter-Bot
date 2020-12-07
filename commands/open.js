const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
  name: 'open',
	description: 'Free the channel so another person can ask question',
  guildOnly: true,
  cooldown: 10,
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
          name:'**Give these properly**:',
          value:`1.What are you trying to do?\n2.What have you tried? (Send the commands and such)\n3. What's the problem? Is it invalid, or does it just not do what you want it to do?\n4. What does log say? (Optional, unless the Helper asks for it)\n\nTo learn how to properly ask a question [Click Here!](https://dontasktoask.com/)`
        },
        {
          name:"Opened by",
          value:`${message.author.username}`
        }
      );
      if(args.length)
      {
       
        openEmbed.addFields(
          
        { name:"Reason",value:`${args}`,inline: true}
        )
      }

      if(message.channel.name.startsWith(`⏳`)){
        
        message.channel.send(openEmbed);
        message.channel.setName(`🔑ask-question-here`)
          .then(r => console.log('channel became open'))
          .catch(error => console.log(error));
        
      }
      else{
        if(message.channel.name.startsWith(`🔑`))
        message.reply(' Just ask the question. Channel is already open.');
        else
        message.reply(' You can\'t use this here!');
      } 
	},
};
