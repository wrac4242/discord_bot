import Discord = require('discord.js');


module.exports = {
	name: 'guildinfo',
	description: 'gives information about the current guild',
    usage: '',
    args: false,
	permissions: 0,
    aliases: ['server-info', 'serverinfo', 'guild-info'],
	execute(message: Discord.Message, _: string[]) {
        //, guild name, guild owner, user count, channel count, role count, server age
        if (message.guild == null) return;
        let guild = message.guild;

        let name = guild.name;
		let owner:string;
		if (guild.owner != null) {
         	owner = guild.owner.user.tag;
		} else {
			owner = "Wumpus#0000";
		}
        let userCount = guild.memberCount;
        let channelCount = guild.channels.cache.size;
        let roleCount = guild.roles.cache.size;
        let createdAt = guild.createdAt;
        let createdAgo = convertMS(message.createdTimestamp - guild.createdTimestamp) //has day, hour, minute, second

        let data = `Info about ${name}: \nOwner: ${owner}, user count: ${userCount},
        Channel count: ${channelCount}, Role count: ${roleCount}
        created at: ${createdAt} (${createdAgo.day}d ago)`
        message.channel.send(data, { split: true });
	},
};


/* to add
guild name .name
guild owner .owner
how many users .memberCount
how many channels .channels.cache.size
how many roles .roles.cache.size
guild created date  .createdAt and use that


*/

function convertMS( milliseconds: number ) {
    var day:number, hour:number, minute:number, seconds:number;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
        day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
    };
}
