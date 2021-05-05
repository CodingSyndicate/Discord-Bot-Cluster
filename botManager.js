const Bot = require("./Bot");
const logger = require("./lib/logger");

module.exports = class BotManager {

    bots = {};

    /**
     * 
     * @param {Object} botsConfig holds the configuration of all bots
     */
    constructor(botsConfig) {
        // for every bot
        botsConfig.forEach(botConfig => {
            // Save initialized bot in the bots map
            let bot = new Bot(botConfig);
            this.bots[bot.name] = bot;
        });
        logger.log(this, "bots initialized!");
    }

    /**
     * Execute login for all bots
     */
    allLogin() {
        for (const botKey of Object.keys(this.bots)) {
            this.bots[botKey].login();
        }
    }

    /**
     * Execute logout for all bots
     */
    allLogout() {
        for (const botKey of Object.keys(this.bots)) {
            this.bots[botKey].logout();
        }
    }
}