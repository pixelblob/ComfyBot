module.exports = {
	name: 'destroy',
	description: 'Ping!',
	execute(message, args) {
        message.channel.send('Destroying Client!');
        setTimeout(destroy, 3000);
        function destroy() {
        message.client.destroy();
        process.exit()
        }

	},
};