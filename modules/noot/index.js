const { MessageReaction, User, Message } = require("discord.js");

module.exports = function (bot) {

    /**
     * 
     * @param {Message} message 
     */
    function message(message) {
        if (message.cleanContent.includes("noot")) {
            message.react('๐ง');
        }
        if (message.cleanContent.includes("dick")) {
            message.react('๐');
        }
        if (message.cleanContent.includes("wtf")) {
            message.react('๐คจ');
        }
    }

    /**
     * 
     * @param {MessageReaction} messageReaction 
     * @param {User} user 
     */
    function messageReactionAdd(messageReaction, user) {
        messageReaction.message.react('๐ง');
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