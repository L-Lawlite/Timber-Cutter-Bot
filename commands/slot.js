module.exports = {
	name: 'slot',
	description: 'Displays slot number in Inventory',
	execute(message, args) {
	  message.channel.send({files:['./commands/images/300px-Items_slot_number.png']})
	},
};
