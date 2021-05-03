const path = require("path");
const fs = require("fs");
const { Client, Message } = require("discord.js");

module.exports = class ModuleManager {
    /**
     * Constructor of ModuleManager taking the a client object
     * @param {Client} client 
     */
    constructor(client) {
        this.client = client;
        this.commandsMap = {};
        this.modulesMap = {};
    }

    /**
     * loads the modules and registers them with their commands and events
     */
    register() {
        this.loadModules();
        this.registerModules();
        this.registerCommands();
        console.log(">>> Finished loading. ");
    }

    /**
     * Loads all modules from the modules folder and adds them to the internal modules map
     */
    loadModules() {
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
    registerModules() {
        console.log("Registered Modules:");
        // for every module
        for (const [moduleName, module] of Object.entries(this.modulesMap)) {

            // register every command of the module
            if (module.commands) {
                for (const [command, handler] of Object.entries(module.commands)) {
                    this.registerCommand(command, handler);
                }
            }

            // register every event of the module
            if (module.events) {
                for (const [event, handler] of Object.entries(module.events)) {
                    this.registerEvent(event, handler);
                }
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
    registerEvent(event, handler) {
        this.client.on(event, handler);
    }

    /**
     * Registers a single command with its handler to the commandsMap
     * @param {string} command
     * 
     * @param {Function} handler
     */
    registerCommand(command, handler) {
        if (this.commandsMap === undefined) {
            this.commandsMap = {};
        }
        this.commandsMap[command] = handler;
    }

    /**
     * Registers the commandHandler to the client to get triggered at every message event
     * @param {Client} client 
     */
    registerCommands() {
        this.client.on("message", (message) => { this.commandHandler(message) });
    }

    /**
     * Triggered at every message event to determine which registered command should be run
     * @param {Message} message 
     */
    commandHandler(message) {
        const userId = this.client.user.id;

        if (message.mentions.users.has(userId)) {
            let contents = message.cleanContent.split(" ");


            if (contents.length >= 5) {
                message.channel.send("🖕");
                message.channel.send("Was muckst du murruck????!!!");
                return;
            }

            for (const content of contents) {
                if (content) {
                    if (this.commandsMap[content]) {
                        this.commandsMap[content](message);
                    } else {
                        message.channel.send("Sorry, aber ich kenne diesen Befehl:" + content + " nicht.");
                    }
                }
            }
        }
    }
}