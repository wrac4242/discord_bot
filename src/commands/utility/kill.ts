import Discord = require('discord.js');
const { admins } = require('../../../config.json');

module.exports = {
	name: 'kill',
	description: 'kills the bot, owner only',
    guildOnly: false,
    usage: '',
    args: false,
	permissions: 5, // bot owner 4 // bot admin 3 // server owner 2 // server admin 1 server mod 0 // server member
    aliases: [],
	execute(message: Discord.Message, _: string[]) {
		if (message.author.id != admins[0]) return;
        console.log("killing")
		message.channel.send(`Stopping the bot in a few seconds`);
        console.error(`Bot shutdown requested by ${message.author.tag}`);
        setTimeout(() => {process.exit(0);}, 3000);

	},
};
