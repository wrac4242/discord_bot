import Discord = require('discord.js');

module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
    usage: '<arg1> <arg2>',
	args: true,
    aliases: ['args'],
	permissions: 0,
	execute(message: Discord.Message, args: string[]) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		return message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};
