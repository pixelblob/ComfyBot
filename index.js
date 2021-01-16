const Discord = require('discord.js');
const client = new Discord.Client();
//Import Cool Shit that lets me type in the console...
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

//Triggers When Client connects
client.once('ready', () => {
    console.log();
});

SendCustom();


//Send Message Function WIP
function SendCustom() {
    readline.question('What Would You Like To Send?', msgsend => {
        client.channels.cache.get('769167796022018048').send(`${msgsend}`);
        console.log(`"${msgsend}" Has been sent!`);
        readline.close();
        
    });
    
};



client.login('Nzk5NjMzNDc5OTYzNzcwODkx.YAGatg.j2cpP8A1wGZiMCL_Fs0UD-CIIPI');