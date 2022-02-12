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
    else if(ctx.content.startsWith(`${prefix}help`)){
        const basic = new client.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Commands of celeste bot : `)
        .setDescription(`Command executed by ${ctx.author.tag}`)
        .setTitle(`Basic commands : `)
        .addFields(
            { name: 'Check if the bot is active : ', value: `~status`},
            { name: 'Server info : ', value: `~info`},
            { name: 'User info : ', value: `~userinfo`},
            { name: 'Check bot version', value: `~info version`},
            { name: 'Display the avatar', value: `~avatar`},
            { name: 'Mention everyone', value: `~listen`}
        )
        ctx.channel.send(basic);

        const action = new client.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Action commands : `)
        .addFields(
            {name: 'Punch someone', value: `~punch (@user)`},
            {name: 'Kill someone', value: `~kill (@user)`},
            {name: 'Kiss someone', value: `~kiss (@user)`},
            {name: 'Bite someone', value: `~bite (@user)`},
            {name: 'Pat someone', value: `~pat (@user)`},
            {name: 'Love someone', value: `~love (@user)`},
            {name: 'Destroy someone', value: `~destroy (@user)`},
            {name: 'Laugh out loud', value: `~lol`},
            {name: 'Cry', value: `~cry`}
        )
        ctx.channel.send(action);
    }
})

client.login(process.env.TOKEN)