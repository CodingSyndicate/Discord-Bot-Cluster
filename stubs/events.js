/**
 * Copy from here!
 */

const { MessageReaction, User, Message, DMChannel, GuildChannel, TextChannel, GuildEmoji, Guild, GuildMember, Collection, Speaking, Snowflake, Invite, Presence, Role, VoiceState } = require("discord.js");

/**
 * Table of events
 */
module.exports = {
    channelCreate,
    channelDelete,
    channelPinsUpdate,
    channelUpdate,
    debug,
    emojiCreate,
    emojiDelete,
    emojiUpdate,
    error,
    guildBanAdd,
    guildBanRemove,
    guildCreate,
    guildDelete,
    guildIntegrationsUpdate,
    guildMemberAdd,
    guildMemberAvailable,
    guildMemberRemove,
    guildMembersChunk,
    guildMemberSpeaking,
    guildMemberUpdate,
    guildUnavailable,
    guildUpdate,
    invalidated,
    inviteCreate,
    inviteDelete,
    message,
    messageDelete,
    messageDeleteBulk,
    messageReactionAdd,
    messageReactionRemove,
    messageReactionRemoveAll,
    messageReactionRemoveEmoji,
    messageUpdate,
    presenceUpdate,
    rateLimit,
    ready,
    roleCreate,
    roleDelete,
    roleUpdate,
    shardDisconnect,
    shardError,
    shardReady,
    shardReconnecting,
    shardResume,
    typingStart,
    userUpdate,
    voiceStateUpdate,
    warn,
    webhookUpdate
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
 * Emotted for general debugging information.
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

/**
 * Emitted when the client encouters an error.
 * @param {Error} error The error encountered
 */
function error(error) {

}

/**
 * Emitted whenever a member is banned from a guild.
 * @param {Guild} guild The guild that the ban occurred in
 * @param {User} user The user that was banned
 */
function guildBanAdd(guild, user) {

}

/**
 * Emitted whenever a member is unbanned from a guild.
 * @param {Guild} guild The guild the unban occured in
 * @param {User} user The user that was unbanned
 */
function guildBanRemove(guild, user) {

}

/**
 * Emitted whenever the client joins a guild.
 * @param {Guild} guild The created guild
 */
function guildCreate(guild) {

}

/**
 * Emitted whenever a guild kicks the client or the guild is deleted/left.
 * @param {Guild} guild The guild that was deleted
 */
function guildDelete(guild) {

}

/**
 * Emitted whenever a guild integration is updated.
 * @param {Guild} guild The guild whose integrations were updated
 */
function guildIntegrationsUpdate(guild) {

}

/**
 * Emitted whenever a user joins a guild.
 * @param {GuildMember} member The member that has joined a guild
 */
function guildMemberAdd(member) {

}

/**
 * Emitted whenever a member becomes available in a large guild.
 * @param {GuildMember} member The member that became available
 */
function guildMemberAvailable(member) {

}

/**
 * Emitted whenever a member leaves a guild, or is kicked.
 * @param {GuildMember} member The member that has left/been kicked from the guild
 */
function guildMemberRemove(member) {

}

/**
 * Emitted whenever a chunk of guild members is received (all members come from the same guild).
 * @param {Collection<Snowflake, GuildMember} members The members in the chunk
 * @param {Guild} guild The guild related to the member chunk
 * @param {Object} chunk Properties of the received chunk
 * @param {number} chunk.index Index of the received chunk
 * @param {number} chunk.count Number of chunks the client should receive
 * @param {?string} chunk.nonce Nonce for this chunk
 */
function guildMembersChunk(members, guild, chunk) {

}

/**
 * Emitted once a guild member changes speaking state.
 * @param {GuildMember} member The member that started/stopped speaking
 * @param {Readonly<Speaking} speaking The speaking state of the member
 */
function guildMemberSpeaking(member, speaking) {

}

/**
 * Emitted whenever a guild member changes - i.e. new role, removed role, nickname. Also emitted when the user's details (e.g. username) change.
 * @param {GuildMember} oldMember The member before the update
 * @param {GuildMember} newMember The member after the update
 */
function guildMemberUpdate(oldMember, newMember) {

}

/**
 * Emitted whenever a guild becomes unavailable, likely due to a server outage.
 * @param {Guild} guild The guild that has become unavailable
 */
function guildUnavailable(guild) {

}

/**
 * Emitted whenever a guild is updated - e.g. name change.
 * @param {Guild} oldGuild The guild before the update
 * @param {Guild} newGuild The guild after the update
 */
function guildUpdate(oldGuild, newGuild) {

}

/**
 * Emitted when the client's session becomes invalidated. You are expected to handle closing the process gracefully and preventing a boot loop if you are listening to this event.
 */
function invalidated() {

}

/**
 * Emitted when an invite is created. Only when the client has MANAGE_GUILD or MANAGE_CHANNEL permissions.
 * @param {Invite} invite The invite that was created
 */
function inviteCreate(invite) {

}

/**
 * Emitted when an invite is deleted. Only when the client has MANAGE_GUILD or MANAGE_CHANNEL permissions.
 * @param {Invite} invite The invite that was deleted
 */
function inviteDelete(invite) {

}

/**
 * Emitted whenever a message is created.
 * @param {Message} message The created message
 */
function message(message) {

}

/**
 * Emitted whenever a message is deleted.
 * @param {Message} message The deleted message
 */
function messageDelete(message) {

}

/**
 * Emitted whenever messages are deleted in bulk.
 * @param {Collection<Snowflake, Message} messages The deleted messages, mapped by their ID
 */
function messageDeleteBulk(messages) {

}

/**
 * Emitted whenever a reaction is added to a cached message.
 * @param {MessageReaction} messageReaction The reaction object
 * @param {User} user The user that applied the guild or reaction emoji
 */
function messageReactionAdd(messageReaction, user) {

}

/**
 * Emitted whenever a reaction is removed from a cached message.
 * @param {MessageReaction} messageReaction The reaction object
 * @param {User} user The user whose emoji or reaction emoji was removed
 */
function messageReactionRemove(messageReaction, user) {

}

/**
 * Emitted whenever all reactions are removed from a cached message.
 * @param {Message} message The message the reactions were removed from
 */
function messageReactionRemoveAll(message) {

}

/**
 * Emitted when a bot removes an emoji reaction from a cached message.
 * @param {MessageReaction} reaction The reaction that was removed
 */
function messageReactionRemoveEmoji(reaction) {

}

/**
 * Emitted whenever a message is updated - e.g. embed or content change.
 * @param {Message} oldMessage The message before the update
 * @param {Message} newMessage The messafe after the update
 */
function messageUpdate(oldMessage, newMessage) {

}

/**
 * Emitted whenever a guild member's presence (e.g. status, activity) is changed.
 * @param {?Presence} oldPresence The presence before the update, if one at all
 * @param {Presence} newPresence The presence after the update
 */
function presenceUpdate(oldPresence, newPresence) {

}

/**
 * Emitted when the client hits a rate limit while making a request.
 * @param {Object} rateLimitInfo Object containing the rate limit info
 * @param {number} rateLimitInfo.timeout Timeout in ms
 * @param {number} rateLimitInfo.limit Number of requests that can be made to this endpoint
 * @param {string} rateLimitInfo.method HTTP method used for request that triggered this event
 * @param {string} rateLimitInfo.path Path used for request that triggered this event
 * @param {string} rateLimitInfo.route Route used for request that triggered this event
 */
function rateLimit(rateLimitInfo) {

}

/**
 * Emitted when the client becomes ready to start working.
 */
function ready() {

}

/**
 * Emitted whenever a role is created.
 * @param {Role} role The role that was created
 */
function roleCreate(role) {

}

/**
 * Emitted whenever a guild role is deleted.
 * @param {Role} role The role that was deleted
 */
function roleDelete(role) {

}

/**
 * Emitted whenever a guild role is updated.
 * @param {Role} oldRole The role before the update
 * @param {Role} newRole The role after the update
 */
function roleUpdate(oldRole, newRole) {

}

/**
 * Emitted when a shard's WebSocket disconnects and will no longer reconnect.
 * @param {CloseEvent} event The WebSocket close event
 * @param {number} id The shard ID that disconnected
 */
function shardDisconnect(event, id) {

}

/**
 * Emitted whenever a shard's WebSocket encounters a connection error.
 * @param {Error} error The encountered error
 * @param {number} shardID The shard that encountered this error
 */
function shardError(error, shardID) {

}

/**
 * Emitted when a shard turns ready.
 * @param {number} id The shard ID that turned ready
 * @param {?Set<string>} unavailableGuilds Set of unavailable guild IDs, if any
 */
function shardReady(id, unavailableGuilds) {

}

/**
 * Emitted when a shard is attempting to reconnect or re-identify.
 * @param {number} id The shard ID that is attempting to reconnect
 */
function shardReconnecting(id) {

}

/**
 * Emitted when a shard resumes successfully.
 * @param {number} id The shard ID that resumed
 * @param {number} replayedEvents The amount of replayed events
 */
function shardResume(id, replayedEvents) {

}

/**
 * Emitted whenever a user starts typing in a channel.
 * @param {Channel} channel The channel the user started typing in
 * @param {User} user The user that started typing
 */
function typingStart(channel, user) {

}

/**
 * Emitted whenever a user's details (e.g. username) are changed. Triggered by the Discord gateway events USER_UPDATE, GUILD_MEMBER_UPDATE, and PRESENCE_UPDATE.
 * @param {User} oldUser The user before the update
 * @param {User} newUser The user after the update
 */
function userUpdate(oldUser, newUser) {

}

/**
 * Emitted whenever a member changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
 * @param {VoiceState} oldState The voice state before the update
 * @param {VoiceState} newState The voice state after the update
 */
function voiceStateUpdate(oldState, newState) {

}

/**
 * Emitted for general warnings.
 * @param {string} info The warning
 */
function warn(info) {

}

/**
 * Emitted whenever a guild text channel has its webhooks changed.
 * @param {TextChannel} channel The channel that had a webhook update
 */
function webhookUpdate(channel) {

}