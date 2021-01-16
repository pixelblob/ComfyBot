const Discord = require('discord.js');
const client = new Discord.Client();

//Triggers When Client connects
client.once('ready', () => {
    console.log("Ready!");
});



client.on('message', message => {
    console.log(message.content);
    if (message.content === '!ping') {
        message.channel.send('Pong.').catch(console.error);
    }
    else if (message.content.toLowerCase() === 'pog') {
        message.channel.send('POG!').catch(console.error);
        
    }
    else if (message.content === '!Fuckoff') {
        process.exit(1)
    }
    else if (message.content === '!Verify') {
        console.log(message.author)
        member = (message.author)
        member.roles.add("716875625847324793")
        console.log(member)
    }

    client.on('guildMemberAdd', member => {
        console.log("New Member Joined!")
      });
});


    


client.login('Nzk5NjMzNDc5OTYzNzcwODkx.YAGatg.j2cpP8A1wGZiMCL_Fs0UD-CIIPI');