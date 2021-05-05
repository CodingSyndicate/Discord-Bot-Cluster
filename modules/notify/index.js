const { Member, Presence, Message, VoiceState } = require("discord.js");
const { join, basename } = require("path");

module.exports = function (bot) {


    let events = {};
    let actions = {};


    /**
     * 
     * @param {Message} message Message Object comming from the command handler
     */
    function notify(message) {
        console.log("User " + message.author.username + " notified me!");
        message.author.send('Hello there!');
    }

    /**
     * 
     * @param {*} params 
     */
    function register(params) {



    }

    /**
     * 
     * @param {Discord.Message} message 
     * @param {string[]} params 
     */
    function refresh(message, params) {
        // TODO: Permission handling

        if (params.length > 1) {
            message.react('❌');
            message.channel.send("refresh does not expect arguments!");

            console.log(">>>[WARNING] User " + message.author.displayName + " tried to access refresh");
            return;
        }


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

    function load(path, target) {
        let content = fs.readdirSync(path);

        for (let file of content) {
            let fullpath = join(path, file);

            if (isJS(fullpath)) {
                let cmd = require(fullpath);
                target[parent + cmd.name] = cmd;
                console.log("Added: " + cmd.name);
            }
            else if (!fs.statSync(fullpath).isFile()) {
                let base_cmd = parent + basename(fullpath) + " ";
                console.log("Enter subfolder " + basename(fullpath));
                load(fullpath, base_cmd);
            }
        }
    }

    function loadEvents(path = "./Events") {
        let fullpath = join(__dirname, path);
        load(fullpath, events);
        console.log("Events loaded: ");
        console.log(events);
    }

    function loadActions(path = "./Actions") {
        let fullpath = join(__dirname, path);
        load(fullpath, actions);
        console.log("Actions loaded: ");
        console.log(actions);
    }

    function isJS(path) {
        let stat = fs.statSync(path);
        return (stat.isFile() && path.endsWith(".js"));
    }

    return {
        name: "Notify",
        commands: {
            notify,
            register,
            refresh
        },
        events: {
            presenceUpdate,
            voiceStateUpdate,
        }
    }
}