console.clear();
require("dotenv").config();

// BotsManager
const BotManager = require("./BotManager");
const botManager = new BotManager();

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