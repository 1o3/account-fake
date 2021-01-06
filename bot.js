const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "%"
console.log("Welcome Again !");
 

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});




 client.on ('message', async (message) => {
          if (!message.guild || message.author.bot) return;
         if(message.channel.id !== "669948874647011350") return;//الشات الي ياخذ منه, yuneAvt boy
          if (message.attachments.size > 0) {
                  message.attachments.forEach (image => {
                  let log = client.channels.find (Channel => Channel.name == 'viniendo');//الشات الي يرسل فيه
                      if (log) log.send (image.url).catch(err => undefined);
 
                        fs.writeFile("./log.json", JSON.stringify(log), err => {
                         if (err) console.error(err);
                       });

                    })

            }
        })



         client.on ('message', async (message) => {
          if (!message.guild || message.author.bot) return;
         if(message.channel.id !== "734151356352561202") return;//الشات الي ياخذ منه, yuneAvt boy
          if (message.attachments.size > 0) {
                  message.attachments.forEach (image => {
                  let log = client.channels.find (Channel => Channel.name == 'viniendo');//الشات الي يرسل فيه
                      if (log) log.send (image.url).catch(err => undefined);
 
                        fs.writeFile("./log.json", JSON.stringify(log), err => {
                         if (err) console.error(err);
                       });

                    })

            }
        })



   client.on ('message', async (message) => {
          if (!message.guild || message.author.bot) return;
         if(message.channel.id !== "669948830384652329") return;//الشات الي ياخذ منه, yuneAvt boy
          if (message.attachments.size > 0) {
                  message.attachments.forEach (image => {
                  let log = client.channels.find (Channel => Channel.name == 'ruletats');//الشات الي يرسل فيه
                      if (log) log.send (image.url).catch(err => undefined);
 
                        fs.writeFile("./log.json", JSON.stringify(log), err => {
                         if (err) console.error(err);
                       });

                    })

            }
        })


          client.on ('message', async (message) => {
          if (!message.guild || message.author.bot) return;
         if(message.channel.id !== "734151392935149578") return;//الشات الي ياخذ منه, yuneAvt boy
          if (message.attachments.size > 0) {
                  message.attachments.forEach (image => {
                  let log = client.channels.find (Channel => Channel.name == 'ruletats');//الشات الي يرسل فيه
                      if (log) log.send (image.url).catch(err => undefined);
 
                        fs.writeFile("./log.json", JSON.stringify(log), err => {
                         if (err) console.error(err);
                       });

                    })

            }
        })



              client.on ('message', async (message) => {
          if (!message.guild || message.author.bot) return;
         if(message.channel.id !== "770256409936920586") return;//الشات الي ياخذ منه, yuneAvt boy
          if (message.attachments.size > 0) {
                  message.attachments.forEach (image => {
                  let log = client.channels.find (Channel => Channel.name == 'cotizado');//الشات الي يرسل فيه
                      if (log) log.send (image.url).catch(err => undefined);
 
                        fs.writeFile("./log.json", JSON.stringify(log), err => {
                         if (err) console.error(err);
                       });

                    })

            }
        })





 client.on ('message', async (message) => {
          if (!message.guild || message.author.bot) return;
         if(message.channel.id !== "779970564734320661") return;//الشات الي ياخذ منه, yuneAvt boy
          if (message.attachments.size > 0) {
                  message.attachments.forEach (image => {
                  let log = client.channels.find (Channel => Channel.name == 'adapted');//الشات الي يرسل فيه
                      if (log) log.send (image.url).catch(err => undefined);
 
                        fs.writeFile("./log.json", JSON.stringify(log), err => {
                         if (err) console.error(err);
                       });

                    })

            }
        })


client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!owner.includes(message.author.id)) return;
  if (message.content.startsWith(prefix + "setgame")) {
    client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark: Done. **`);
  } else if (message.content.startsWith(prefix + "setname")) {
    client.user.setUsername(argresult);
    message.channel.sendMessage(
      `**:white_check_mark: Done Changed Name To ${argresult}**`
    );
  } else if (message.content.startsWith(prefix + "setavatar")) {
    client.user.setAvatar(argresult);
    message.channel.sendMessage(`**:white_check_mark: Done Changed Avatar. **`);
  } else if (message.content.startsWith(prefix + "setstream")) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark: Done.**`);
  }
});


 
client.login(process.env.BOT_TOKEN);
