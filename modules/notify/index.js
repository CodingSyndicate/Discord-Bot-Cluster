const { Member, Presence, Message, VoiceState } = require("discord.js");

module.exports = {
    name: "Notify",
    commands: {
        notify
    },
    events: {
        presenceUpdate,
        voiceStateUpdate,
    }
}


/**
 * 
 * @param {Message} message Message Object comming from the command handler
 */
function notify(message) {
    console.log("User " + message.author.username + " notified me!");
}

/**
 * @param {?Presence} oldPresence
 * @param {Presence} newPresence
 */
function presenceUpdate(oldPresence, newPresence) {
    console.log(newPresence.user.username + " changed status to " + newPresence.status);
}

/**
 * @param {VoiceState} oldVoiceState
 * @param {VoiceState} newVoiceState
 */
function voiceStateUpdate(oldVoiceState, newVoiceState) {
    if (newVoiceState.channel) {
        console.log(oldVoiceState.member.displayName + " joined " + newVoiceState.channel.name);
    } else {
        console.log(oldVoiceState.member.displayName + " left");
    }
}