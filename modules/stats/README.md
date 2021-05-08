# Stats
A module for statistics of user interaction combined with gameification using levels.

index
    user: map to stats object 


## Events that could be interesting
- channelCreate
- channelDelete
- channelPinsUpdate
- emojiCreate
- emojiDelete
- emojiUpdate
- guildBanAdd
- guildBanRemove
- guildCreate
- guildDelete
- guildIntegrationsUpdate
- guildMemberAdd
- guildMemberAvailable
- guildMemberRemove
- guildMembersChunk
- guildMemberSpeaking
- guildMemberUpdate
- inviteCreate
- inviteDelete
- message
- messageDelete
- messageDeleteBulk
- messageReactionAdd
- messageReactionRemoveAll
- messageReactionRemoveEmoji
- messageUpdate
- presenceUpdate
- roleCreate
- roleDelete
- roleUpdate
- typingStart
- userUpdate
- voiceStateUpdate


## Stats Collected
- Server joined
- Last Login
- Messages
- Recations send
- Reactions received
- Mentions
- active Voice Time (in nicht afk channels && unmuted)
- muted voice time (in nicht afk channels && muted)
- connected Voice Time


## Score
Total Score würde ich berechnen über eine Formel und nicht abspeichern. 

## Titel
- Der viel Schwätzer (der der am meisten voice time hatte)
- Zensurminister (der der am meisten Nachrichten gelöscht hat)