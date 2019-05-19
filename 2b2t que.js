var mineflayer = require('mineflayer');

var acc = ["email1","email2","email3","email4","email5","email6"];
var pass = ["pass1","pass2","pass3","pass4","pass5","pass6"];
var m;
  
var length = acc.length;
var x = Math.floor(Math.random() * length);
console.log("user number: "+x);

var bot = mineflayer.createBot({
  host: "2b2t.org", 
  port: 25565,       
  username: acc[x], 
  password: pass[x],
  version:"1.12.2",
});
  bot.on('connect', function (username) {
    console.log('connected the bot pls wait');
    console.log('connected as: ' + bot.username);
  })
  bot.on('disconnect', function (packet) {
    console.log('disconnected try again')
    console.log('disconnected: ' + packet.reason)
  })
  bot.on('end', function (message) {
    if (m == message){
      console.log('Connection lost try again')
        }
  })
       
bot.on('chat', function(username, message) {
  if (username === bot.username) return;
      console.log("que is: "+message);
      m = message;
      bot.end()
});
