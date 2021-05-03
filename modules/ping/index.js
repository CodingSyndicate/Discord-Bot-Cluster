const { MessageReaction, User, Message } = require("discord.js");

module.exports = {
    name: "Ping",
    commands: {
        help,
        ping
    },
    events: {
        message,
        messageReactionAdd
    }
}

function help(message) {
    const helpMessage = "\
    Ping: \
    - ping \
    ";
    message.member.voice.channel.send(helpMessage);
}

function ping(message) {
    message.member.voice.channel.send("Pong!");
}

/**
 * 
 * @param {Message} message 
 */
function message(message) {
    if (message.cleanContent.includes("ping")) {
        message.react('🏓');
    }
}

/**
 * 
 * @param {MessageReaction} messageReaction 
 * @param {User} user 
 */
function messageReactionAdd(messageReaction, user) {
    if (messageReaction.emoji === "🏓") {
        messageReaction.message.react("✋");
    }
}