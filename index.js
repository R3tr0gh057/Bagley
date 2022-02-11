import DiscordJS, { Intents, Message } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()
const prefix = '>';
const version = '3.0';
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS
    ]
})


client.on("ready", () => {
    console.log("Bagley up and running.");
    client.user.setActivity('>help', {type: 'PLAYING'});
});
client.on("reconnecting", () => {
    console.log("Bot reconnecting.");
});
client.on("disconnect", () => {
    console.log("Bot disconnected.");
});

client.on('messageCreate', (ctx) => {
    if (ctx.content === 'checkifready'){
        ctx.reply({
            content: 'Up and running sire.',
        })
    }
    if(ctx.content.startsWith(`${prefix}clear`)){

        const args = ctx.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLocaleLowerCase();
        ctx.channel.bulkDelete(`${args}`);
    }
})

client.login(process.env.TOKEN)