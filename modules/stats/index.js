const { MessageReaction, User, Message } = require("discord.js");
const fileLib = require("../../lib/file");
const logger = require("../../lib/logger");

module.exports = function (bot) {

    const USER_DATA_FILE_NAME = "userstats";
    const MAX_EVENT_COUNT = 2;
    let userData = fileLib.loadData(USER_DATA_FILE_NAME);
    let eventCounter = 0;
    let userDataTemplate = {
        lastLogin: new Date(),
        totalMessages: 0,
        totalReactionsSend: 0,
        totalReactionsRecieved: 0,
        totalMentions: 0,
        totalVoiceTime: 0,
        totalScore: 0
    };

    /**
     * message Event Handler
     * @param {Message} message The received message
     */
    function message(message) {
        createUser(message.author.id);
        
        // TotalMessages
        userData[message.author.id].totalMessages += 1; 
        logger.log("Stats", "Message received! userData:", userData);
        // TotalMentions
        console.log(message.mentions.users);
        for (const id of Object.keys(message.mentions.users)) {
            console.log(id);
            createUser(id);
            userData[id].totalMentions += 1;
        }

        saveUserData();
    }

    /**
     * messageReactionAdd Handler
     * @param {Message} message The received message
     * @param {User} user The user who send it
     */
    function messageReactionAdd(messageReaction, user) {
        createUser(user.id);
        userData[user.id].totalReactionsSend = userData[user.id].totalReactionsSend + 1;
        createUser(messageReaction.message.author.id);
        userData[messageReaction.message.author.id].totalReactionsRecieved += 1
    }

    /**
     * voiceStateUpdate Event Handler
     * @param {VoiceState} oldVoiceState
     * @param {VoiceState} newVoiceState
     */
     function voiceStateUpdate(oldVoiceState, newVoiceState) {
        createUser(oldVoiceState.member.id);
        if (newVoiceState.channel) {
            userData[oldVoiceState.member.id].lastLogin = new Date();
        } else {
            userData[oldVoiceState.member.id].totalVoiceTime += (new Date()).getTime() - userData[oldVoiceState.member.id].lastLogin.getTime(); 
        }
        saveUserData();
    }

    /**
     * create user if not exists
     * @param {number} id id of user
     */
    function createUser(id) {
        if(userData[id] == null || userData[id] === undefined){
            userData[id] = {...userDataTemplate};
        }
    }

    /**
     * Saves userData to the data file everytime when the max event count was reached
     */
    function saveUserData() {
        if(eventCounter === MAX_EVENT_COUNT - 1) {
            fileLib.storeData(USER_DATA_FILE_NAME, userData);
            logger.log("Stats", "Saved UserData!");
        }
        eventCounter = (eventCounter + 1) % MAX_EVENT_COUNT;
    }

    /**
     * Merges the read userData with the template once on startup to add potential new properties
     */
    function migrate() {
        for (const userId of Object.keys(userData)) {
            userData[userId] = {...userDataTemplate, ...userData[userId]};
        }
    }
    migrate();

    return {
        name: "Stats",
        commands: {
        },
        events: {
            message,
            voiceStateUpdate,
            messageReactionAdd
        }
    }
}