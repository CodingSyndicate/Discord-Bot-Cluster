const { MessageReaction, User, Message } = require("discord.js");

module.exports = function (bot) {

    /**
     * 
     * @param {Message} message 
     */
    function ping(message) {
        message.channel.send("Pong!");
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

    return {
        name: "Ping",
        commands: {
            ping
        },
        events: {
            message,
            messageReactionAdd
        }
    }
}