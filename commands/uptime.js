module.exports = {
	name: 'uptime',
	description: 'Display Server Uptime!',
	execute(message, args) {
        var uptime = message.channel.client.uptime
        var uptimeLength = message.channel.client.uptime.toString().length
        var uptimesecond = uptime / 1000
        var uptimeminute = uptime / 60000
        var uptimehour = uptime / 3.6e+6
        var uptimeday = uptime / 8.64e+7
        if (uptimeLength <= 3) {
            message.channel.send(`Current Uptime is ${uptime}ms`);
        } else if (uptimeLength === 4 || uptimeLength === 5) {
            message.channel.send(`Current Uptime is ${Math.round(uptimesecond)}s`);
        } else if (uptimeLength === 6) {
            message.channel.send(`Current Uptime is ${Math.round(uptimeminute)}m`);
        } else if (uptimeLength === 7) {
            message.channel.send(`Current Uptime is ${Math.round(uptimehour)}h`);
        } else if (uptimeLength === 8) {
            message.channel.send(`Current Uptime is ${Math.round(uptimeday)}d`);
        }
		
	},
};