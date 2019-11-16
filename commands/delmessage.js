exports.run = async (bot, message, args) => {
  //if (!message.member.hasPermission("ADMINISTRATOR")) return;
  // var messages = message.channel.messages.first(Number(args)).forEach(msg => msg.delete());
  // var smessages = await message.channel.fetchMessages({limit: args[0]});
  // smessages.deleteAll();
  message.channel.bulkDelete(Number(args));
  //message.delete();
};

exports.help = {
  name: ["purge"],
  desc: "Delete messages",
  admin: true,
  include: false
};
