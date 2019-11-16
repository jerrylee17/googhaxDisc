const example = require(`/app/example.js`);
exports.run = async (bot, message, args) => {
  //if (!message.member.hasPermission("ADMINISTRATOR")) return;
  var json = {
    ["Event Name"]: "Game Night",
    ["Event Description"]: "Have fun",
    Category : "Events",
    Date: "Nov 22 6pm-10pm",
    Link: "https://discord.js.org/#/docs/main/stable/class/Client"
  }
  example.createnewchannel(message.guild, json);
  message.delete();
};

exports.help = {
  name: ["t"],
  desc: "(DEV ONLY) Test command",
  admin: true,
  include: false
};
