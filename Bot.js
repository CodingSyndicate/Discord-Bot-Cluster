const Discord = require('discord.js');
const fileLib = require("./lib/file.js");
const logger = require("./lib/logger");

module.exports = class Bot {
    // Private Attributes
    token;
    client;

    // Public Attribute
    modules;
    commands;
    events;

    /**
     * 
     * @param {BotConfig} config 
     */
    constructor(config) {
        if (!config.name || !config.token) {
            throw "Name or token does not exists!";
        }

        // Initialized attributes
        this.name = config.name;
        this.token = config.token;
        this.modules = config.modules.map(modulePath => fileLib.loadModule(this, modulePath)).filter(e => e);
        this.client = new Discord.Client();
        this.commands = {};
        this.events = {};

        // registers all modules
        this.registerModules();

        logger.log(this, "initialized!", this.modules);
    }

    /**
     * Login to discord servers
     */
    login() {
        try {
            this.client.login(this.token);
            logger.log(this, "logged in!");
        } catch (error) {
            logger.error(this, " cannot login!", error);
        }
    }

    /**
     * Logout of discord servers
     */
    logout() {
        this.client.destroy();
        logger.log(this, "logged out!");
    }

    /**
     * Register modules to the command Handler and the events of the client
     */
    registerModules() {
        this.modules.forEach(module => {
            try {
                // Register commands
                if (module.commands) {
                    for (const [command, handler] of Object.entries(module.commands)) {
                        this.commands[command] = handler;
                    }
                }

                // Register events
                if (module.events) {
                    for (const [event, handler] of Object.entries(module.events)) {
                        this.client.on(event, handler);
                        this.events[event] = handler;
                    }
                }
            } catch (error) {
                logger.error(this, "failed to register Module", module);
            }
        });
        this.client.on("message", (message) => { this.commandHandler(message) });
    }

    /**
     * 
     * @param {Discord.Message} message 
     */
    commandHandler(message) {
        // check if the message is send to the bot
        if (message.mentions.users.has(this.client.user.id) || (message.channel.type == "dm" && message.author.id !== this.client.user.id)) {
            // split message by space
            // let parameters = message.cleanContent.split(/[ ]+/).filter(el => el !== " " && el !== "");
            let parameters = message.cleanContent.split(/[ ]+/g);
            // get rid of the bot name
            if (message.channel.type !== "dm") {
                parameters.shift();
            }
            let command = parameters[0];

            if (parameters) {
                if (this.commands[command]) {
                    this.commands[command](message, parameters.shift());
                } else {
                    message.channel.send("Sorry, aber ich kenne diesen Befehl: <" + command + "> nicht.");
                }
            }
            if (this.client.token)
                message.react("✅");
        }
    }
}