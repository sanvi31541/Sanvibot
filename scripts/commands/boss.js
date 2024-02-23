const fs = require("fs");
module.exports.config = {
	    name: "boss",
    version: "1.1.0",
    permission: 0,
    credits: "BADOL-KHAN",
    description: "noprefix",
    prefix: true,
    category: "commands",
    usages: "boss",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("100004504180813")==0 || event.body.indexOf("@Raja Babu _____// ;* :/ 3:)")==0 || event.body.indexOf("100007070042228")==0) {
		var msg = {
				body: "📌 Boss Ekhon BG Ok",
				attachment: fs.createReadStream(__dirname + `/BADOL/22.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤦‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

					}
