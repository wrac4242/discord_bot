import Discord = require('discord.js');
import fs from 'fs';

module.exports = {
    name: 'reload',
    description: 'Reloads a command',
    args: true,
    guildOnly: false,
    permissions: 3,
    execute(message: Discord.Message, args: string[], commands: any) {
        const commandName = args[0].toLowerCase();
        const command = commands.get(commandName)
            || commands.find((cmd: any) => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);

        const commandFolders = fs.readdirSync('./commands');
        const folderName = commandFolders.find((folder: any) => fs.readdirSync(`./commands/${folder}`).includes(`${command.name}.js`));

        delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];

        try {
            const newCommand = require(`../${folderName}/${command.name}.js`);
            commands.set(newCommand.name, newCommand);
            message.channel.send(`Command \`${newCommand.name}\` was reloaded!`);
        } catch (error) {
            console.error(error);
            message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
        }

        return;
    },
};
