const example = require(`/app/example.js`);
exports.run = async (bot, message, args) => {
  //if (!message.member.hasPermission("ADMINISTRATOR")) return;
  args = args.join('').toUpperCase();
  message.guild.channels.filter(channel => channel.type == 'category' && channel.name.toUpperCase() == args).forEach( cat => {
    cat.children.forEach(ch => ch.delete())
    cat.delete();
  }
    );
  message.delete();
};

exports.help = {
  name: ["k"],
  desc: "(DEV ONLY) Test command",
  admin: true,
  include: false
};
