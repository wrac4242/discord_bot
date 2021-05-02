import Discord = require('discord.js');
const { bot_invite } = require('../../../config.json');

module.exports = {
	name: 'botinvite',
	description: 'invite the bot',
    guildOnly: false,
    usage: '<error> <404>',
    args: false,
	permissions: 0, // bot owner 4 // bot admin 3 // server owner 2 // server admin 1 server mod 0 // server member
    aliases: [],
	execute(message: Discord.Message, _: string[]) {
        message.channel.send(`Bot invite link: <${bot_invite}>`);
	}
};
