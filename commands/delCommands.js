exports.run = async (bot, message, args) => {
  //if (!message.member.hasPermission("ADMINISTRATOR")) return;
  var messages = message.channel.messages.filter(msg => msg.content.startsWith('!')).first(100);
  messages.forEach(msg => msg.delete());
  message.delete();
};

exports.help = {
  name: ["d"],
  desc: "Delete messages (commands only)",
  admin: true,
  include: false
};
