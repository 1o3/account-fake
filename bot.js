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


client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => { //لا تغير شي لكي ما تخرب
if (message.content === '.') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`pixel${x}احب`)
          .then(m => {
            count++;
          })
          
        }
      }
});
 
client.login(process.env.BOT_TOKEN);
