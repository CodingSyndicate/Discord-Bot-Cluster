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

function loadConfig(configfile) {
    return JSON.parse(fs.readFileSync(path.join(configFolder, configfile + ".json")));
}

function loadModule(bot, modulePath) {
    try {
        return require(path.join(modulesFolder, modulePath))(bot);
    } catch (error) {
        logger.error("FileLib", "Could not find Module: ", modulePath);
    }
}