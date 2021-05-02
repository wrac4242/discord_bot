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
