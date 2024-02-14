module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  permission: 0,
  credits: "BADOL-KHAN",
  prefix: true,
  description: "guide",
  category: "system",
  usages: "",
  cooldowns: 5,
};
module.exports.handleEvent = async function ({ api, event, Threads, Users }) {
  const axios = require("axios")
var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};
      const moment = require("moment-timezone");
var tpk = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  const name = await Users.getNameUser(event.senderID)
  const res = await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`);
  if (res.status == 200) {
  const finduid = res.data.data.uid
  const finddate = res.data.data.date
  if (body.toLowerCase() == "prefix" || (body.toLowerCase() == "lấy giúp prefix") ||  (body.toLowerCase() == "cần prefix") || (body.toLowerCase() == "lấy giúp tui uid")) {
       api.sendMessage({body: `╭•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╮\n\n🌐==== [ 𝙈𝙔 𝙋𝙍𝙀𝙁𝙄𝙓 ] ====🌐
━━━━━━━━━━━━━━━━

[🍄] ➜ 𝙏𝙀𝙂 𝙉𝘼𝙈𝙀:👇\n\n ${name}\n
[📌] ➜ 𝘽𝙊𝙏 𝙋𝙍𝙀𝙁𝙄𝙓:👇\n\n★★★★★★★★★★🫦[ ${global.config.PREFIX} ]🫦\n\nꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝘽𝙊𝙏-𝙊𝙒𝙉𝙀𝙍-𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿-𝘽𝘼𝘿𝘼𝙇ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿\n\n\n╰•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╯`, attachment: await streamURL(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
      },event.messageID);
  }
 }
      }
module.exports.run = async ({ api, event, args, Threads }) => {
                          }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users, client}) => {
const { threadID, messageID, userID } = event;
//const { threadID, messageID, senderID, mentions, type, messageReply } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "🤣") return;
 api.unsendMessage(handleReaction.messageID);
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios'];
api.sendMessage(`${userID}`,event.threadID,event.messageID);
		  }
