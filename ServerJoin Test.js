const Discord = require('discord.js');
const client = new Discord.Client();

//Triggers When Client connects
client.once('ready', () => {
    console.log("Ready!");
});

//Adds The !verify command
client.on('message', message => {
    if (message.content.toLowerCase() === '!verify') {
    message.member.roles.add("716875625847324793")
    message.member.roles.remove("799677620521926689")
    }
});

//Add's The Unverified role to users on join
client.on('guildMemberAdd', member => {
    console.log(`${member.user.username} Joined The Server!`)
    member.roles.add("799677620521926689")
  });

//Client Login Token
client.login('Nzk5NjMzNDc5OTYzNzcwODkx.YAGatg.j2cpP8A1wGZiMCL_Fs0UD-CIIPI');