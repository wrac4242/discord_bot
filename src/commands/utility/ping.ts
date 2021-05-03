import Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Ping!',
    usage: 'no args needed 🙃',
    args: false,
    aliases: ['pong'],
	permissions: 0,
	execute(message: Discord.Message, _: string[]) {
		message.channel.send('Pong.');
	},
};
