console.clear();
require("dotenv").config();

// Discord
const Discord = require('discord.js');
const client = new Discord.Client();

// ModuleManager
const ModuleManager = require("./ModuleManager");
const moduleManager = new ModuleManager(client);

moduleManager.register();

client.on("ready", () => {
    console.log(`Bot connected: ${client.user.tag}`);
    console.log("Connected to:");
    client.guilds.cache.forEach(g => {
        console.log(" - " + g.name)
    });
});

client.login(process.env.TOKEN);