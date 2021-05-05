const chalk = require("chalk");

module.exports = {
    init,
    log,
    warn,
    error
}

/**
 * Initialization of the logger
 */
function init() {
    console.clear();
    console.log("--------------------------------");
    log("Logger", "initialized!");
}

/**
 * Logs to the console in a pretty fancy way with colors, brackets and all that stuff :)
 * @param {Object|String} entity The object or name executing this
 * @param {String} message The logging message
 * @param  {...any} other objects or other output you want to display at its fullest
 */
function log(entity, message, ...other) {
    if (other.length > 0) {
        console.log(generateMessage(chalk.blue("LOG"), entity, message), other.length === 1 ? other.pop() : other);
    } else {
        console.log(generateMessage(chalk.blue("LOG"), entity, message),);
    }
}

/**
 * Warns the console well formatted about sth. 
 * @param {Object|String} entity The object or name executing this
 * @param {String} message The warning message
 * @param  {...any} other object or other output you want to display at its fullest
 */
function warn(entity, message, ...other) {
    if (other.length > 0) {
        console.warn(generateMessage(chalk.yellow("WARN"), entity, message), other.length === 1 ? other.pop() : other);
    } else {
        console.warn(generateMessage(chalk.yellow("WARN"), entity, message));
    }
}

/**
 * Errors the console well formatted about sth.
 * @param {Object|String} entity The object or name executing this
 * @param {String} message The error message
 * @param  {...any} other objects or other output you want to display at its fullest
 */
function error(entity, message, ...other) {
    if (other.length > 0) {
        console.error(generateMessage(chalk.red("ERROR"), entity, message), other.length === 1 ? other.pop() : other);
    } else {
        console.error(generateMessage(chalk.red("ERROR"), entity, message));
    }
}

/**
 * Generates for every type of console messages the specific message
 * @param {String} type The type of the message that should be printed
 * @param {Object|String} entity The object or name executing this
 * @param {String} message The message should be modified
 * @returns {String} The well formated String that now can be printed
 */
function generateMessage(type, entity, message) {
    return "[" + type + "][" + (typeof entity === 'string' ? entity : entity.constructor.name) + "]" + (entity.name ? "[" + entity.name + "]" : "") + " \t" + message;
}