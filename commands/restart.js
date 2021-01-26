module.exports = {
	name: 'restart',
	description: 'Ping!',
	execute(message, args) {
        const { exec } = require('child_process');
        message.channel.send("Restarting Service!!!")
        setTimeout(restart, 3000);
        function restart() {
            exec('pm2 restart Discord', (err, stdout, stderr) => {
                if (err) {
                //some err occurred
                console.error(err)
            } else {
            // the *entire* stdout and stderr (buffered)
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
      }
    });
        }

	},
};

