const { MessageReaction, User, Message } = require("discord.js");

module.exports = function (bot) {

    /**
     * 
     * @param {Message} message 
     */
    function message(message) {
        if (message.cleanContent.includes("noot")) {
            message.react('🐧');
        }
        if (message.cleanContent.includes("dick")) {
            message.react('🍆');
        }
        if (message.cleanContent.includes("wtf")) {
            message.react('🤨');
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

    return {
        name: "Noot",
        commands: {
        },
        events: {
            message,
            messageReactionAdd
        }
    }
}