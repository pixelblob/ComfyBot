module.exports = {
	name: 'verify',
	description: 'Verify',
	execute(message, args) {
        //Check if member is already verified...
        if (message.member.roles.cache.find(r => r.name === "Ver")) {
            message.channel.send(`You are already verified!`)
            console.log(`${message.author.username} Tried to verify, even though they were already verified.`)
        } else {
        //changed roles idfk.
		message.member.roles.add("716875625847324793")
        message.member.roles.remove("799677620521926689")
        message.channel.send(`${message.author.username} Has been verified!`)
        console.log(`${message.author.username} Has been verified!`)
        }
        message.delete({ timeout: 5000 })
        .catch(console.error);
	},
};






