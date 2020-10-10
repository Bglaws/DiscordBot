
const Discord = require("discord.js");
const client = new Discord.Client();
const token = require("./token.js");

client.on('ready', () => {
	console.log('Logged in as ${client.user.tag}!');
});
try {
	client.login(token);
} catch {
	console.log("dernit");
}  
