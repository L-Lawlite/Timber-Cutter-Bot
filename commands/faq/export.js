module.exports = {
	name: 'export',
	description: 'Displays instructions on exporting project from Blockbench',
  	aliases: [],
	execute(message, args) {
	  message.channel.send({files:['./commands/images/export.png']})
	},
};
