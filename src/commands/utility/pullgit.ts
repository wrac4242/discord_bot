import Discord = require('discord.js');
const { exec } = require("child_process");

module.exports = {
    name: 'pullgit',
    description: 'pulls pending updates from git',
    guildOnly: false,
    usage: '',
    args: false,
    permissions: 5, // bot owner 4 // bot admin 3 // server owner 2 // server admin 1 server mod 0 // server member
    aliases: ['gitpull'],
    execute(message: Discord.Message, _: string[]) {
        message.channel.send(`pulling git repo now`);
        exec("npm run reinstall", (error: any, stdout: any, stderr: any) => {
            if (error) {
            }
            if (stderr) {
            }
            console.log(stdout);
        });
    },
};
