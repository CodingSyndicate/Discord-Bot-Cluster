const chalk = require("chalk");

module.exports = {
    init,
    log,
    warn,
    error
}

function init() {
    console.clear();
    console.log("--------------------------------");
    log("Logger", "initialized!");
}

function log(entity, message, ...other) {
    if (other.length > 0) {
        console.log(generateMessage(chalk.blue("LOG"), entity, message), other.length === 1 ? other.pop() : other);
    } else {
        console.log(generateMessage(chalk.blue("LOG"), entity, message),);
    }
}

function warn(entity, message, ...other) {
    if (other.length > 0) {
        console.warn(generateMessage(chalk.yellow("WARN"), entity, message), other.length === 1 ? other.pop() : other);
    } else {
        console.warn(generateMessage(chalk.yellow("WARN"), entity, message));
    }
}

function error(entity, message, ...other) {
    if (other.length > 0) {
        console.error(generateMessage(chalk.red("ERROR"), entity, message), other.length === 1 ? other.pop() : other);
    } else {
        console.error(generateMessage(chalk.red("ERROR"), entity, message));
    }
}

function generateMessage(type, entity, message) {
    return "[" + type + "][" + (typeof entity === 'string' ? entity : entity.constructor.name) + "]" + (entity.name ? "[" + entity.name + "]" : "") + " \t" + message;
}