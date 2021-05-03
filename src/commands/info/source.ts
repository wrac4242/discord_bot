import Discord = require('discord.js');
const { sourceRepo } = require('../../../config.json');

module.exports = {
	name: 'source',
	description: 'gives a link to the source code',
    usage: '',
    args: false,
	permissions: 0,//5 // bot owner 4 // bot admin 3 // server owner 2 // server admin 1 server mod 0 // server member
    aliases: ['sauce'],
	execute(message: Discord.Message, _: string[]) {
		return message.channel.send(`Source: <${sourceRepo}>`);
	},
};
