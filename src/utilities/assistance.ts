const config = require("../../config.json");
import Discord = require('discord.js');

module.exports.getPermissionLevel = (member: Discord.GuildMember) => {
    if (config.admins[0] == member.user.id) return 5; // bot owner
    if (config.admins.includes(member.user.id)) return 4; // bot admin
    if (member.guild.ownerID == member.id) return 3; // server owner
    if (member.hasPermission("MANAGE_GUILD")) return 2; // server admin
    if (member.hasPermission("MANAGE_MESSAGES")) return 1; // server mod
    return 0; // server member
}

module.exports.convertMS = ( milliseconds: number ) => {
    var day, hour, minute, seconds;
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
