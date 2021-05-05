const Bot = require("./Bot");
const logger = require("./lib/logger");

module.exports = class BotManager {

    bots = {
    };

    constructor(botsConfig) {
        // for every bot
        botsConfig.forEach(botConfig => {
            // Save initialized bot in the bots map
            let bot = new Bot(botConfig);
            this.bots[bot.name] = bot;
        });
        logger.log(this, "bots initialized!");
    }

    allLogin() {
        for (const botKey of Object.keys(this.bots)) {
            this.bots[botKey].login();
        }
    }

    allLogout() {
        for (const botKey of Object.keys(this.bots)) {
            this.bots[botKey].logout();
        }
    }
}