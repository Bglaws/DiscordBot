
const Discord = require("discord.js");
const client = new Discord.Client();
const token = require("./token.js");

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});
	
client.on('message', msg => {
	console.log(msg.content);
	if (msg.content.startsWith("!")) {
		msg.reply("I dont know what the homework is, sorry")
	}
});	

client.login(token);
