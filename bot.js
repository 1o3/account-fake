const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Matrex `);
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

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});
 

client.on('message', message => { //لا تغير شي لكي ما تخرب
if (message.content === '.') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Matrex , Farm Credit By Matrex, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});
 
client.login("NDU5Nzc2NzIyNjQ5MzUwMTY0.DwFbBQ.gEsC2CYA8xTO-QHME2ZKanG7b9s");
