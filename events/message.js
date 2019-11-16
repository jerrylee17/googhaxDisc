var prefix = "!";
const example = require(`/app/example.js`);
module.exports = async (client, message) => {
  if (message.author.bot && message.embeds.length == 1){
    //console.log(message.content);
   // console.log(message.embeds[0]);
    var obj = {};
    for(var i=0;i<message.embeds[0].fields.length;i++){
        var embedfield = message.embeds[0].fields[i];
       obj[embedfield.name] = embedfield.value;
    }
    example.createnewchannel(message.guild, obj);
    
    //message.delete();
    
    //console.log(message);
    
  }
  let args = message.content.split(" ");
	let cmd = args[0].toLowerCase();
	args = args.slice(1);
  //if there is one embed
  /*if (message.embeds.length == 1){
    example.createnewchannel(message.guild, message.embeds[0])
  }*/
	if (!cmd.startsWith(prefix)) return;
  let comm = client.commands.get(cmd.slice(prefix.length)); // We need to get command from our collection
  if(cmd.startsWith(prefix)&&!cmd.startsWith(prefix + prefix)){  // If command object starts with prefix
    if(comm) {
      comm.run(client, message, args); // If comm object isn't null, execute command code
    }
    else {
      /**
       * Direct the alias commands to the right js files first before handling default commands
       */
      
      switch (cmd) {
          case (prefix + "t"):
          //comm = client.commands.get("translate");
          //comm.run(client, message, args);
          break;
          
        default:
          console.log("Did not find command");
      }
    }
  }
}
