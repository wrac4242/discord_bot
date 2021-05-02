import Discord = require('discord.js');
const { bot_invite_perms } = require('../../../config.json');

module.exports = {
	name: 'botinvite',
	description: 'invite the bot',
    guildOnly: false,
    usage: '<error> <404>',
    args: false,
	permissions: 0, // bot owner 4 // bot admin 3 // server owner 2 // server admin 1 server mod 0 // server member
    aliases: [],
	execute(message: Discord.Message, _: string[]) {
		let user: any = message.client.user;
		let bot_invite = `https://discord.com/api/oauth2/authorize?client_id=${user.id}&permissions=${bot_invite_perms}&scope=bot`;
        return message.channel.send(`Bot invite link: <${bot_invite}>`);
	}
};
//https://discord.com/api/oauth2/authorize?client_id=713488406554083379&permissions=4294306935&scope=bot
