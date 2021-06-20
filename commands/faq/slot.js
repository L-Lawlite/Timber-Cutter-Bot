
module.exports = {
	name: 'slot',
	description: 'Displays slot number in Inventory',
  	aliases: ['slots'],
	execute(message, args) {
	  message.channel.send({files:['../images/300px-Items_slot_number.png']})
	},
};
