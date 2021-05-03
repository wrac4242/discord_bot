import Discord = require('discord.js');

module.exports = {
	name: 'avatar',
	description: 'gives the avatar of the running user',
    usage: '',
    args: false,
	permissions: 0,
    aliases: ['pfp'],
	execute(message: Discord.Message, _: string[]) {
		return message.channel.send(message.author.displayAvatarURL({dynamic: true}));
	},
};
