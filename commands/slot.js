module.exports = {
	name: 'slot',
	description: 'Displays slot number in Inventory',
	execute(message, args) {
	  message.channel.send({file:['./commands/images/300px-Items_slot_number.png']})
	},
};
