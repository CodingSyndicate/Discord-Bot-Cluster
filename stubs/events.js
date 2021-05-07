/**
 * Copy from here!
 */

const { MessageReaction, User, Message, DMChannel, GuildChannel, TextChannel, GuildEmoji } = require("discord.js");

module.exports = {
    message,
    voiceStateUpdate
}

/**
 * Emitted whenever a channel is created.
 * @param {DMChannel|GuildChannel} channel The channel that was created
 */
function channelCreate(channel) {

}

/**
 * Emitted whenever a channel is deleted.
 * @param {DMChannel|GuildChannel} channel 
 */
function channelDelete(channel) {

}

/**
 * Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself.
 * @param {DMChannel|TextChannel} channel The channel that the pins update occurred in
 * @param {Date} time The time of the pins update
 */
function channelPinsUpdate(channel, time) {

}

/**
 * Emitted whenever a channel is updated - e.g. name change, topic change, channel type change.
 * @param {DMChannel|GuildChannel} oldChannel The channel before the update
 * @param {DMChannel|GuildChannel} newChannel The channel after the update
 */
function channelUpdate(oldChannel, newChannel) {

}

/**
 * Emotted for general debugging information
 * @param {string} info The debug information
 */
function debug(info) {

}

/**
 * Emitted whenever a custom emoji is created in a guild.
 * @param {GuildEmoji} emoji The emoji that was created
 */
function emojiCreate(emoji) {

}

/**
 * Emitted whenever a custom emoji is deleted in a guild.
 * @param {GuildEmoji} emoji The emoji that was deleted
 */
function emojiDelete(emoji) {

}

/**
 * Emitted whenever a custom emoji is updated in a guild.
 * @param {GuildEmoji} oldEmoji The old emoji
 * @param {GuildEmoji} newEmoji The new emoji
 */
function emojiUpdate(oldEmoji, newEmoji) {

}

function error(params) {

}