import Discord = require('discord.js');
import fs = require('fs');

module.exports = {
	name: 'reloadall',
	description: 'reload all commands',
    guildOnly: false,
    usage: '',
    args: false,
	permissions: 5, // bot owner 4 // bot admin 3 // server owner 2 // server admin 1 server mod 0 // server member
    aliases: ['rla'],
	execute(message: Discord.Message, __: string[], commands: any) {
        console.log("Reloading all commands");
        const commandFolders = fs.readdirSync('./commands');
        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../${folder}/${file}`);
                commands.set(command.name, command);
				console.log(`Reloading ${command.name}`);
            }
        }
        console.log("Reloaded all commands");
        message.channel.send("Reloaded all commands");

	},
};
