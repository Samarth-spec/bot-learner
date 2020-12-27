var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();
bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "!sub" //The text before commands, you can put anything that you prefer
if(message.author.id != "792620973551255622" && message.channel.id === "792616458823532625"){
 if(msg.startsWith('!sub', 0)){
            if(msg === prefix  && message.channel.id === "792616458823532625"){
                message.channel.send(**HEY BRO YOU YT CHANNEL WILL NOW GRO VERY FASTLY IT WILL TAK 10 MIN TO GET SUBS SO PLZ BE PATIENT **) // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand !sub right now. More will be added when my creator is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '>' dot.");
        }
    }
});
bot.login(process.env.BOT_TOKEN)
