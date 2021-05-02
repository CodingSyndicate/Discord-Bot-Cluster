require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();

console.clear();

client.on("ready", () => {
    console.log(`Bot connected: ${client.user.tag}`);
    console.log("Connected to:");
    client.guilds.cache.forEach(g => {
        console.log(" - " + g.name)
    });
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login(process.env.TOKEN);