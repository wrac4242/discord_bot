"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
require('dotenv').config();
const client = new discord_js_1.default.Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});
let prefix = "$";
client.on('ready', () => {
    console.log('Bot is ready');
});
client.on('message', async (msg) => {
    if (msg.content[0] != prefix) {
        return;
    }
    let message = msg.content.substring(1);
    if (message === 'Hello') {
        msg.reply('Hi');
    }
    ;
});
client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial)
        await reaction.message.fetch();
    if (reaction.partial)
        await reaction.fetch();
    if (user.bot)
        return;
    if (!reaction.message.guild)
        return;
    if (reaction.message.channel.id == "838030680520261652") {
        console.log("reaction added");
        if (reaction.emoji.name === '🦊') {
            await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add('838030049508720640');
        }
        if (reaction.emoji.name === '🐯') {
            await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add('838030083474194453');
        }
        if (reaction.emoji.name === '🐍') {
            await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add('838030105229656104');
        }
    }
    else
        return;
});
client.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.message.partial)
        await reaction.message.fetch();
    if (reaction.partial)
        await reaction.fetch();
    if (user.bot)
        return;
    if (!reaction.message.guild)
        return;
    if (reaction.message.channel.id == "838030680520261652") {
        console.log("Correct channel");
        if (reaction.emoji.name === '🦊') {
            console.log("fox removed");
            await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove('838030049508720640');
        }
        if (reaction.emoji.name === '🐯') {
            console.log("lion removed");
            await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove('838030083474194453');
        }
        if (reaction.emoji.name === '🐍') {
            console.log("snake removed");
            await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove('838030105229656104');
        }
    }
    else
        return;
});
client
    .on("error", err => console.log("Client error.", err))
    .on("rateLimit", rateLimitInfo => console.log("Rate limited.", JSON.stringify(rateLimitInfo)))
    .on("warn", info => console.log("Warning.", info))
    .login(process.env.BOT_TOKEN);
