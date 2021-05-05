const fileLib = require("./lib/file");
const BotManager = require("./BotManager");
const logger = require("./lib/logger");
logger.init();

// Read config
let botsConfig = fileLib.loadConfig("bots");
logger.log("index", "Bots Config Loaded");
// for later we could establish connection to the backend here

// BotsManager
const botManager = new BotManager(botsConfig);
botManager.allLogin();