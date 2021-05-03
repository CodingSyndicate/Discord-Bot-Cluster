require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();
const moduleManager = require("./moduleManager");
console.clear();

moduleManager.loadModules();

moduleManager.registerModules(client);

moduleManager.registerCommands(client);

client.on("ready", () => {
    console.log(`Bot connected: ${client.user.tag}`);
    console.log("Connected to:");
    client.guilds.cache.forEach(g => {
        console.log(" - " + g.name)
    });
});

client.login(process.env.TOKEN);