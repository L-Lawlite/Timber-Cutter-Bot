module.exports = {
	name: 'Export',
	description: 'Displays instructions on exporting project from Blockbench',
  	aliases: [],
	execute(message, args) {
	  message.channel.send({files:['./commands/images/export.png']})
	},
};
