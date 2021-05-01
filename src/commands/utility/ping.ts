import Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Ping!',
    guildOnly: false,
    usage: 'no args needed 🙃',
    args: false,
    aliases: ['pong'],
	execute(message: Discord.Message, _: string[]) {
		message.channel.send('Pong.');
	},
};
