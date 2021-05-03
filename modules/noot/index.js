const { MessageReaction, User, Message } = require("discord.js");

module.exports = {
    name: "Noot",
    commands: {
        help,
    },
    events: {
        message,
        messageReactionAdd
    }
}

function help(message) {
    const helpMessage = "\
    Noot: \
    - noot \
    ";
    message.member.voice.channel.send(helpMessage);
}

/**
 * 
 * @param {Message} message 
 */
function message(message) {
    if (message.cleanContent.includes("noot")) {
        message.react('🐧');
    }
}

/**
 * 
 * @param {MessageReaction} messageReaction 
 * @param {User} user 
 */
function messageReactionAdd(messageReaction, user) {
    messageReaction.message.react('🐧');
}