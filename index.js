//Import Everything The Bot Requires.
const fs = require('fs');
const Discord = require('discord.js');
const { OpusEncoder } = require('@discordjs/opus');
const ytdl = require('ytdl-core');
const { config } = require('process');
const client = new Discord.Client();
client.commands = new Discord.Collection();
async function play(connection, url) {
	connection.play(await ytdl(url), { type: 'opus' });
}
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const path = './config.json'


//Check if config file exists...
fs.access(path, fs.F_OK, (err) => {
  if (err) {
    console.log(`Config file not found "${path}" \nCreating a new one...`)
    fs.writeFile('config.json', '{\n "prefix": "!",\n  "token": "your-token-goes-here"\n}', function (err) {
      if (err) throw err;
      console.log('Saved!');
      process.exit()
    });
    return
  }
console.log("Config File Found!")
const { prefix, token } = require('./config.json');
if (token == `your-token-goes-here`) {
   throw new Error('Please Provide A Valid Token...');

}
console.log(`Using Prefix "${prefix}" \nUsing Token "${token}"`)
//Client Login Token
client.login(token); 

})






//Import Commands, I have no fucking clue how this works...
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


//Triggers When The Bot Connects.
client.once('ready', () => {
    console.log("Ready!");
});


//Add's The Unverified role to users on join
client.on('guildMemberAdd', member => {
    console.log(`${member.user.username} Joined The Server!`)
    member.roles.add("799677620521926689")
  });

  //Deletes user message
  client.on('message', message => {
    if (message.author.username === "ComfyBot") {
      console.log("A bot has sent a message...")
      message.delete({ timeout: 5000 })
      .catch(console.error);
    }
  })

client.on('message', async message => {
  //Check if message content starts with "play"
    if (message.content.startsWith(`${prefix}play`)) {
        const args = message.content.slice(5).trim().split(/ +/);

        //Plays The Youtubes
        if (message.member.voice.channel) {
            var URL = args
            const connection = await message.member.voice.channel.join();
            const stream = ytdl(URL, { filter: 'audioonly' }); 
            const dispatcher = connection.play(stream)
            dispatcher.on('error', console.error);
            console.log(error)
        }
      }

});

//Command handeler, pretty fuck cool, no clue how it works...
client.on('message', message => {
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();

if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}


});

