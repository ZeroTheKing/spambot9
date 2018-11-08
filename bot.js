const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "9";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "509750934054633502"; // ايدي السررفر
var channel = "509750934054633504";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Ayman , Ayman , Ayman , Ayman , Ayman , Ayman , Ayman , Ayman , Ayman , Ayman , Ayman , Ayman , Ayman , Ayman , Ayman , Ayman , Ayman , Ayman , **')
    },305);
})


    client.on('message', message => {
        var prefix = "9";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) {
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });
client.login(process.env.BOT_TOKEN);
