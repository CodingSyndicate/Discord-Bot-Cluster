const path = require("path");
const fs = require("fs");
const logger = require("./logger");

const rootFolder = path.join(__dirname, "..");
const configFolder = path.join(rootFolder, "config");
const modulesFolder = path.join(rootFolder, "modules");

module.exports = {
    loadConfig,
    loadModule
}

/**
 * Loads a specific config file out of the config folder and parses it
 * @param {String} configfile Name of the config file that should be loaded in the config folder
 * @returns The read and parsed config file as an object
 */
function loadConfig(configfile) {
    return JSON.parse(fs.readFileSync(path.join(configFolder, configfile + ".json")));
}

/**
 * Loads a specific module from the modules folder, connects it with the bot and returns it
 * @param {Bot} bot The bot that will be connected to the module
 * @param {String} modulePath the name of the module folder in the modules folder that should be loaded
 * @returns the required module
 */
function loadModule(bot, modulePath) {
    try {
        return require(path.join(modulesFolder, modulePath))(bot);
    } catch (error) {
        logger.error("FileLib", "Could not find Module: ", modulePath);
    }
}