import Discord from 'discord.js';
require('dotenv').config();
import fs from 'fs';

const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});

const assistance = require('./utilities/assistance.js')

const commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');

const { prefix } = require('../../../config.json');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        commands.set(command.name, command);
    }
}

client.on('ready', () => {
    console.log('Bot is ready');
});



client.on('message', async (message): Promise<any> => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/) || "";
    let temp: string = args.shift() || "";
    const commandName = temp.toLowerCase();

    const command: any = commands.get(commandName)
        || commands.find((cmd: any) => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) {
        message.channel.send("Error, not a command");
        return;
    }

    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    if (assistance.getPermissionLevel(message.member) < command.permissions) {
        return message.reply('You do not have the valid permissions!');
    }

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }


    try {
        command.execute(message, args, commands);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }

});

client
    .on("error", err => console.log("Client error.", err))
    .on("rateLimit", rateLimitInfo => console.log("Rate limited.", JSON.stringify(rateLimitInfo)))
    .on("warn", info => console.log("Warning.", info))
    .login(process.env.BOT_TOKEN);
