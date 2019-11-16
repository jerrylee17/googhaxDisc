module.exports = {
  createnewchannel: function(guild, json) {
    return new Promise(async (res, rej) => {
      console.log("Create new channel called");
      //Grabbing variables from json. Declaring these variables so you can easily manage them if the json setup is different, which it wil be
      //required fields: name, description, category, date
      var ch_name = json["Event Name"];
      var ch_desc = json["Event Description"];
      var ch_cat = json.Category;
      var ch_link = json["Links"];
      var ch_date = json.Date;
      if (ch_cat == undefined) ch_cat = "Other";
      ch_cat = ch_cat.toLowerCase();

      var msg = `${
        ch_name ? `Event: ${ch_name}` : "Event name not available"
      }\n${ch_date ? `Date: ${ch_date}` : "Date: TBD"}\n${
        ch_link ? `Link: ${ch_link}` : "Link not available"
      }`;

      //msg = "Date is " + json.Date + ".\nThe link is "+ ch_link;
      //var category = guild.channels.filter(channel => channel.type == 'category' && channel.name == ch_cat).first();
      //if(!category) category = await guild.createChannel(ch_cat, { name: ch_cat , type: "category" });
      // if (ch_cat.toLowerCase() == "event" || ch_cat.toLowerCase() == "workshop"){
      //   var announce = guild.channels
      //     .filter(channel => 
      //       channel.type == "text" && 
      //       channel.name && 
      //       channel.name.toLowerCase() == "announcements"
      //     );
      // }
        
      var filter = guild.channels
        .filter(
          channel =>
            channel.type == "category" &&
            channel.name &&
            channel.name.toUpperCase() == ch_cat.toUpperCase()
        );
      // while(!filter){console.log('xd')};
      var category = filter.first();
      // if (category) console.log(category.name);
      if(!category) category = await guild.createChannel(ch_cat, { type: "category" });
      guild
        .createChannel(ch_name, {
          type: "text",
          parent: category,
          topic: ch_desc
        })
        .then(async txtChannel => {
          console.log(`text channel created`);
          var sentmsg = await txtChannel.send(msg);
          var pin = await sentmsg.pin(); // happens after above due to the await keyword
          //console.log(pin.content);
          res(txtChannel);
        });
    });
  }
};
