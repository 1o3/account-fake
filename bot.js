const Discord = require('discord.js');
const client = new Discord.Client();
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



client.on ("message",async message => {
if (message.author.id !== "287898437058560000") return;
var prefix = ".",
arg = message.content.split(" ");
if (message.content.startsWith (prefix + "setname")) {
if (!arg [1]) return message.reply("**specify a name**");
if (client.user.username == arg [1]) return message.reply("**My username is already "+arg[1]+"**");
client.user.setUsername(arg [1]);
message.reply("**Done**");
} else if (message.content.startsWith (prefix+ "stream")) {
if (!arg.slice(1).join(" ")) return message.reply("**Specify a game description**");
client.user.setActivity(arg.slice(1).join(" "), {type: "STREAMING", url: "twitch.tv/steve"});
message.reply("**Done**");
} else if (message.content.startsWith (prefix+ "play")) {
if (!arg.slice(1).join(" ")) return message.reply("**Specify a game description**");
client.user.setGame(arg.slice(1).join(" "));
message.reply("**Done**");
} else if (message.content.startsWith (prefix+ "watching")) {
if (!arg.slice(1).join(" ")) return message.reply("**Specify a game description**");
client.user.setActivity(arg.slice(1).join(" "), {type: "WATCHING"});
message.reply("**Done**");
} else if (message.content.startsWith (prefix+ "listening")) {
if (!arg.slice(1).join(" ")) return message.reply("**Specify a game description**");
client.user.setActivity(arg.slice(1).join(" "), {type: "LISTENING"});
message.reply("**Done**");
} else if (message.content.startsWith (prefix+ "setavatar")) {
if (!arg [1]) return message.reply("**Specify a avatar url**");
client.user.setAvatar(arg [1]);
message.reply("**Done**");
} 
});


 
client.login(process.env.BOT_TOKEN);
