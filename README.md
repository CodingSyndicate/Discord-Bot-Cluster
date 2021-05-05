# Discord-Bot-Cluster
A framework to manage several discord bots at once with dynamic modules.

## Idee
A cluster for managing multiple discord bots and their modules.

## Modules
Since the underlaying discord bots are provided, modules can now implement certain functionalities to them.
A module is defined by a folder in the modules folder. The folder name will define the modules key, which get added to the modules map at startup pointing to the module.
Inside of a module the index.js file needs to export certain requirements:
- name: The name the module should be called
- commands: an object containing functions that get registered by the ModuleManager, so when ever the name of the function gets called like a command, that specific function will be executed
- events: an object containing function that get registered by the ModuleManager, so when ever the event (provided by the function name) gets triggered, that specific function will be executed. Note: The function has to be called like an event, which can be found here: https://discord.js.org/#/docs/main/stable/class/Client

## Module Class Structure
- Class: Module
    - static references to static common tools (eg Logger)
    - Default functionality: init, inspect, destroy
    - Basic communication sockets
    - commands
    - events
    - actions
- Bot Class: Bot extends Module
    - bot-specific behaviour
    - command handler
    - modules

Command: Execute function with the same name as the command, after parsing the message.
Event: Event 
Event: Subscription auf Client, dass wenn Event getriggert wird, eine Funktion ausgeführt wird
Action: Nicht durch den User ausgeführter Befehl

Events:
    - key: handler
    -  key: name des Events
    -  handler () => {}

function reactionAdd () {
    this.action.döner();
    this.action.yufka();
}


## Recommended VS Code Extensions
- ESLint - Dirk Baeumer
- Markdown All in One - Yu Zhang
- npm - egamma
- npm Intellisense - Christian Kohler
- REST Client - Huachao Mao
- shell-format - foxundermoon
- Visual Studio IntelliCode - Microsoft
- (vscode-icons - VSCode Icons Team)
- (Markdown Table Formatter - Fernando Crespo)
- (Import Cost - Wix)
