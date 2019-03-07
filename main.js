const newModule = require("./new-module.js");
const greetings = require("./greeting.js");


greetings.greetingJapanese();

newModule.findBestGreeting("Japanese");
newModule.askFriend("Japanese");
newModule.findBestGreeting("Icelandic");
newModule.askFriend("Icelandic");
