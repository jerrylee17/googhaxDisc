exports.run = async (bot, message, args) => {
  //if (!message.member.hasPermission("ADMINISTRATOR")) return;
  var messages = message.channel.messages.first(args);
  messages.forEach(msg => msg.delete());
  message.delete();
};

exports.help = {
  name: ["purge"],
  desc: "(DEV ONLY) Test command",
  admin: true,
  include: false
};
