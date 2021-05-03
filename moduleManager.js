const path = require("path");
const fs = require("fs");
const { Client, Message } = require("discord.js");


module.exports = {
    modulesMap: {},
    commandsMap: {},
    loadModules,
    registerModules,
    registerCommands
}

/**
 * Loads all modules from the modules folder and adds them to the internal modules map
 */
function loadModules() {
    let folderPath = path.join(__dirname, "./modules");
    let content = fs.readdirSync(folderPath);

    for (let file of content) {
        const modulePath = folderPath + path.sep + file;
        try {
            let module = require(modulePath);
            this.modulesMap[module.name] = module;
        } catch (error) {
            console.error("Module at " + modulePath + " failed to load!");
        }
    }
}

/**
 * Register events and commands of the modules on the client
 * @param {Client} client 
 */
function registerModules(client) {
    console.log("Registered Modules:");
    // for every module
    for (const [moduleName, module] of Object.entries(this.modulesMap)) {

        // register every command of the module
        for (const [command, handler] of Object.entries(module.commands)) {
            registerCommand(command, handler);
        }

        // register every event of the module
        for (const [event, handler] of Object.entries(module.events)) {
            registerEvent(client, event, handler);
        }

        console.log("- " + module.name);
    }
}


/**
 * Registers a single event with its handler to the client
 * @param {Client} client
 * 
 * @param {string} event
 * 
 * @param {Function} handler
 */
function registerEvent(client, event, handler) {
    client.on(event, handler);
}

/**
 * Registers a single command with its handler to the commandsMap
 * @param {string} command
 * 
 * @param {Function} handler
 */
function registerCommand(command, handler) {
    if (this.commandsMap === undefined) {
        this.commandsMap = {};
    }
    this.commandsMap["yeet"] = "Hallo";
    this.commandsMap[command] = handler;
}

/**
 * Registers the commandHandler to the client to get triggered at every message event
 * @param {Client} client 
 */
function registerCommands(client) {
    client.on("message", commandHandler);
}

/**
 * Triggered at every message event to determine which registered command should be run
 * @param {Message} message 
 */
function commandHandler(message) {
    /**
     * In der message steht content und cleanContent.
     * die commandsMap ist eine Map bestehend aus key = command name, value = commandHandler
     * 
     * 
     * 1. Setzt euch mit dem unterschied von content und cleanContent auseinander
     * 2. schaut euch die string.startsWith methode an
     * 3. überprüft ob eine der Commands getriggert wurde und führt dessen handler aus.
     * 4. Ausprobieren!
     * 5. Marvin zeigen
     */
}