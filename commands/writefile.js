module.exports = {
	name: 'writefile',
	description: 'FUCK',
	execute(message, args) {
        const fs = require('fs');
        var content = message.content
        fs.writeFile('file.txt', content, error => {
            if (error) {
            console.error(error);
            return;
            } else {
                message.channel.send(`A File Has Been Created With The Text "${content}".`);
            }
        })
	},
};





