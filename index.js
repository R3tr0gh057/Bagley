const Discord = require('discord.js');
//const ytdl = require('ytdl-core');
//const yts = require('yt-search');
//const { startsWith } = require('ffmpeg-static');
//const YOUTUBE_API = 'AIzaSyAPMLZQm9Ki3sfSUeD2AZPpy2x-Nt0SNaI';
//const search = require('youtube-search');
//const opts = {
//    maxRequests: 25,
//    key: YOUTUBE_API,
//    type: 'video'
//};
const prefix = '>';
const version = '2.4';

const client = new Discord.Client();
//const queue = new Map();
const bot = new Discord.Client();


client.on("ready", () => {
    console.log("Bagley up and running.");
    client.user.setActivity('~help', {type: 'PLAYING'});
});
client.on("reconnecting", () => {
    console.log("Bot reconnecting.");
});
client.on("disconnect", () => {
    console.log("Bot disconnected.");
});


client.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome")
    if(!channel) return;
    channel.send(`Welcome to our server ${member} :D`)
})

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'goodbye')
    if(!channel) return;
    channel.send(`Sayonara ${member} :D`)
})

bot.on('guildMemberAdd', member =>{

    console.log.apply('User '+member.user.username+' has joined the server!')
    var role = member.guild.roles.find('name', 'human');
    member.addRole(role)
})

client.on("message", async message => {
    var args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLocaleLowerCase();
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const serverQueue = queue.get(message.guild.id);

    /*if(message.content.startsWith(`${prefix}play`)){
        execute(message, serverQueue);
        return;
    }

    else if(message.content.startsWith(`${prefix}skip`)){
        skip(message, serverQueue);
        return;
    }*/

    if(message.content.startsWith(`${prefix}clear`)){

        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLocaleLowerCase();
        message.channel.bulkDelete(`${args}`);
    }

    else if(message.content.startsWith(`${prefix}hijacks`)){

        message.channel.send('!stop')
        message.channel.bulkDelete(2);
    }

    else if(message.content.startsWith(`${prefix}hijackp`)){

        message.channel.send('!play')
        message.channel.bulkDelete(2);
    }

    else if(message.content.startsWith(`${prefix}disconnect`)){

        message.channel.send('!dc')
        message.channel.bulkDelete(2);
    }

    else if(message.content.startsWith(`${prefix}hey`)){
        message.channel.send(`Hi ${message.author.username} :D`)
    }

    else if(message.content.includes === "fuck"){
        message.channel.bulkDelete(1);
        message.channel.send(`F word not allowed ${message.author.username}`);
    }

    else if(message.content.includes === "Hello"){
        message.channel.send('Meet the real me');
    }

    else if(message.content.startsWith(`${prefix}tf`)){
        var ops = ["yes", "no", "definitely yes", "definitely no", "bruh really?", "this dude..."]
        var op = Math.floor(Math.random() * ops.length);
        message.channel.send((String([ops[op]])))
    }

    else if(message.content.startsWith(`${prefix}xd`)){
        for(var i = 0; i < 20; i++){
            message.channel.send(`${args}`);
        }
    }

    else if(message.content.startsWith(`${prefix}initiate`)){
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Initiating data extraction :')
        message.channel.send(embed)
        for (var i = 0; i < 5; i++){
            const words = ['Extracting users...', 'Extracting messages...', 'Extracting channels...', 'Extracting userinfo...','Saving fetched data to dataset folder...']
            message.channel.send(words[i])
            message.channel.send('Done')
        }
        message.channel.send('Data for character analysis has been stored in your dataset folder.')
    }

    /*else if(message.content.startsWith(`${prefix}search`)){
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription("Enter a search query.")
        .setTitle("Youtube Search");
    let embedMsg = await message.channel.send(embed);
    let filter = m => m.author.id === message.author.id;
    let query = await message.channel.awaitMessages(filter, { max: 1});
    let results = await search(query.first().content, opts).catch(err => console.log(err));
    if(results){
        let youtubeResults = results.results;
        let i = 0;
        let titles = youtubeResults.map(result => {
            i++;
            return i + ") " + result.title;
        })
        console.log(titles);
        message.channel.send({
            embed: {
                title: 'Select which song you want by typing the number',
                description: titles.join("\n")
            }
        }).catch(err => console.log(err));
        filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= youtubeResults.length;
        let collected = await message.channel.awaitMessages(filter, { max: 1 });
        let selected = youtubeResults[collected.first().content - 1];

        embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${selected.title}`)
        .setURL(`${selected.link}`)
        .setDescription(`${selected.description}`)
        .setThumbnail(`${selected.thumbnails.default.url}`);

        message.channel.send(embed);
    }
    }*/
    
    else if(message.content.startsWith(`${prefix}kill`)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLocaleLowerCase();
        var images = ["https://tenor.com/bbmJI.gif","https://tenor.com/PV5d.gif","https://tenor.com/5Sou.gif","https://tenor.com/bmdd5.gif","https://tenor.com/912r.gif"]
        var image = Math.floor(Math.random() * images.length);
        message.channel.send((String([images[image]])))
        message.channel.send( `${message.author.username} killed ${args}`)
    }

    else if(message.content.startsWith(`${prefix}kick`)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLocaleLowerCase();
        var member = message.mentions.members.first();
        var images = ["https://tenor.com/bmSdf.gif", "https://tenor.com/bfIqy.gif", "https://tenor.com/blQRC.gif", "https://tenor.com/biOev.gif", "https://tenor.com/uOLJ.gif"];
        var image = Math.floor(Math.random() * images.length);
        message.channel.send( `${message.author.username} KICKED ${args}, GET DUNKED MATE`)
        message.channel.send((String([images[image]])))
        member.kick(member)
    }

    else if(message.content.startsWith(`${prefix}hug`)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLocaleLowerCase();
        var images = ["https://tenor.com/7NZC.gif", "https://tenor.com/PM3W.gif", "https://tenor.com/vfFB.gif", "https://tenor.com/0K7K.gif", "https://tenor.com/vQcO.gif"];
        var image = Math.floor(Math.random() * images.length);
        message.channel.send((String([images[image]])))
        if(args != `@${message.author.username}`){
            message.channel.send( `${message.author.username} hugged ${args}`)
        }
        else{
            message.channel.send('Fuck dude you are lonely, take a hug anyways :D');
        }
    }

    else if(message.content.startsWith(`${prefix}love`)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLocaleLowerCase();
        var images = ["https://tenor.com/o4YO.gif", "https://tenor.com/bgG9e.gif", "https://tenor.com/t0GS.gif", "https://tenor.com/6fDp.gif", "https://tenor.com/6fC4.gif"];
        var image = Math.floor(Math.random() * images.length);
        message.channel.send((String([images[image]])))
        if(args != message.author.username){
            message.channel.send( `${message.author.username} has a crush on ${args}`)
        }
        else if(args === `@${message.author.username}`){
            message.channel.send('Fuck dude you are lonely, you are gonna die single anyways :D');
        }
    }

    else if(message.content.startsWith(`${prefix}destroy`)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLocaleLowerCase();
        var images = ["https://tenor.com/brrz7.gif", "https://tenor.com/Rt72.gif", "https://tenor.com/7mIs.gif", "https://tenor.com/oFoo.gif", "https://tenor.com/oIBR.gif"];
        var image = Math.floor(Math.random() * images.length);
        message.channel.send((String([images[image]])))
        if(args != message.author.username){
            message.channel.send( `${message.author.username} destroyed ${args}`)
        }
        else if(args === `@${message.author.username}`){
            message.channel.send('Jeez dude why would you wanna destroy yourself? Get some help or a gf, both works :D');
        }
    }

    else if(message.content.startsWith(`${prefix}fuck`)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLocaleLowerCase();
        var images = ["https://tenor.com/bqy8Z.gif", "https://tenor.com/Szgg.gif", "https://tenor.com/bc2vk.gif", "https://tenor.com/yudm.gif", "https://tenor.com/vNB1.gif"];
        var image = Math.floor(Math.random() * images.length);
        message.channel.send((String([images[image]])))
        if(args != `@${message.author.username}`){
            message.channel.send( `${message.author.username} fucked ${args}`)
        }
        else if(args === `@${message.author.username}`){
            message.channel.send('You fucking lunatic, why do I care XD');
        }
    }

    else if(message.content.startsWith(`${prefix}lol`)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLocaleLowerCase();
        var images = ["https://tenor.com/o2UM.gif", "https://tenor.com/IUVl.gif", "https://tenor.com/09rQ.gif", "https://tenor.com/2i8k.gif", "https://tenor.com/3eyu.gif"];
        var image = Math.floor(Math.random() * images.length);
        message.channel.send((String([images[image]])))
        message.channel.send( `LOL XD`)
    }

    else if(message.content.startsWith(`${prefix}cry`)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLocaleLowerCase();
        var images = ["https://tenor.com/bppPn.gif", "https://tenor.com/90X2.gif", "https://tenor.com/x5iw.gif", "https://tenor.com/zRMO.gif", "https://tenor.com/beNKt.gif"];
        var image = Math.floor(Math.random() * images.length);
        message.channel.send((String([images[image]])))
        message.channel.send( `${message.author.username} is sed and crying`)
    }

    else if(message.content.startsWith(`${prefix}pat`)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLocaleLowerCase();
        var images = ["https://tenor.com/Nj5e.gif", "https://tenor.com/bhdlw.gif", "https://tenor.com/Smy2.gif", "https://tenor.com/xjJh.gif", "https://tenor.com/W2Am.gif"];
        var image = Math.floor(Math.random() * images.length);
        message.channel.send((String([images[image]])))
        if(args != `@${message.author.username}`){
            message.channel.send( `${message.author.username} patted ${args}`)
        }
        else if(args === `@${message.author.username}`){
            message.channel.send('Fuck dude you are lonely, take a pat anyways :D');
        }
    }

    else if(message.content.startsWith(`${prefix}punch`)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLocaleLowerCase();
        var images = ["https://tenor.com/boeFl.gif","https://tenor.com/bnIHD.gif","https://tenor.com/bjuRi.gif","https://tenor.com/bcW8G.gif","https://tenor.com/bl24R.gif", "https://tenor.com/ugnq.gif", "https://tenor.com/8B1O.gif", "https://tenor.com/bmR25.gif", "https://tenor.com/bdxfs.gif"];
        var image = Math.floor(Math.random() * images.length);
        message.channel.send((String([images[image]])))
        if(args != `@${message.author.username}`){
            message.channel.send( `${message.author.username} punched ${args}`)
        }
        else if(args === `@${message.author.username}`){
            message.channel.send('Tryna self punch yourself I see...');
        }
    }

    else if(message.content.startsWith(`${prefix}kiss`)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLocaleLowerCase();
        var images = ["https://tenor.com/bbjcL.gif", "https://tenor.com/2a4m.gif", "https://tenor.com/6fqy.gif", "https://tenor.com/bdq8l.gif", "https://tenor.com/vxPx.gif"];
        var image = Math.floor(Math.random() * images.length);
        message.channel.send((String([images[image]])))
        if(args != `@${message.author.username}`){
            message.channel.send( `${message.author.username} kissed ${args}`)
        }
        else if(args === `@${message.author.username}`){
            message.channel.send('Fuck dude you are lonely, get a gf already');
        }
    }

    else if(message.content.startsWith(`${prefix}bite`)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLocaleLowerCase();
        var images = ["https://tenor.com/L8Tt.gif", "https://tenor.com/2GMO.gif", "https://tenor.com/tT3R.gif", "https://tenor.com/YJkM.gif", "https://tenor.com/L4Av.gif"];
        var image = Math.floor(Math.random() * images.length);
        message.channel.send((String([images[image]])))
        if(args != `@${message.author.username}`){
            message.channel.send( `${message.author.username} bit ${args}`)
        }
        else if(args === `@${message.author.username}`){
            message.channel.send('OOF');
        }
    }

    else if(message.content.startsWith(`${prefix}listen`)){

        message.channel.bulkDelete(1);
        message.channel.send('@everyone listen to this man.');
    }


    else if(message.content.startsWith(`${prefix}avatar`)){
        message.reply(message.author.displayAvatarURL());
    }

    else if(message.content.startsWith(`${prefix}stop`)){
        stop(message, serverQueue);
        return;
    }

    else if(message.content.startsWith(`${prefix}status`)){
        message.channel.send("Up and running.");
    }

    else if(message.content.startsWith(`${prefix}userinfo`)){
        const embed = new Discord.MessageEmbed()
            .setTitle('User Info : ')
            .addField('User Name', message.author.username, true)
            .addField('Version ', version, true)
            .addField('Current Server', message.guild.name, true)
            .setColor(0x03fce3)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter('get stick bugged lol')
            message.channel.send(embed);
    }

    else if(message.content.startsWith(`${prefix}info`)){
        let guild = message.guild;
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Server infomation on ${guild.name}`)
        .setDescription(`Command executed by ${message.author.tag}`)
        .addFields(
            { name: 'Members', value: `${guild.memberCount}` },
            { name: 'Region', value: `${guild.region}` },
            { name: 'Owner', value: `${guild.owner.tag}`, inline: true },
            { name: 'Created', value: `${guild.createdAt}`, inline: true },
    )
    message.channel.send(embed);
    }

    else if(message.content.startsWith(`${prefix}help`)){
        const basic = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Commands of celeste bot : `)
        .setDescription(`Command executed by ${message.author.tag}`)
        .setTitle(`Basic commands : `)
        .addFields(
            { name: 'Check if the bot is active : ', value: `~status`},
            { name: 'Server info : ', value: `~info`},
            { name: 'User info : ', value: `~userinfo`},
            { name: 'Check bot version', value: `~info version`},
            { name: 'Display the avatar', value: `~avatar`},
            { name: 'Mention everyone', value: `~listen`}
        )
        message.channel.send(basic);

        const action = new Discord.MessageEmbed()
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
        message.channel.send(action);

        const song = new Discord.MessageEmbed()
        /*.setColor('RANDOM')
        .setTitle(`Music commands : `)
        .addFields(
            {name: 'Play music', value: `~play (song name)`},
            {name: 'Skip music', value: `~skip (song name)`},
            {name: 'Stop music', value: `~stop (song name)`},
            {name: 'Music queue', value: `~queue`}
        )
        message.channel.send(song);

        const search = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Search commands : `)
        .addFields(
            {name: 'Search google', value: `~google (search string)`},
            {name: 'search youtube', value: `~search (search string)`}
        )*/
        message.channel.send(search);
    }

    else if(message.content.startsWith(`${prefix}info version`)){
        message.channel.send('Version ' + version);
    }

    else{
        message.channel.send("Invalid command.");
    }

});

/*async function execute(message, serverQueue){
    const args = message.content.split(" ");
    const voiceChannel = message.member.voice.channel;
    
    if (!voiceChannel)
    return message.channel.send("Get in a voice channel please :D");

    const permissions = voiceChannel.permissionsFor(message.client.user);
    if(!permissions.has("CONNECT") || !permissions.has("SPEAK")){
        return message.channel.send("Voice and speak permission denied.");
    }

    const {videos} = await yts(args.slice(1).join(" "));
    if (!videos.length) return message.channel.send("No songs were found :(");
    const song = {
        title: videos[0].title,
        url: videos[0].url
    };

    if(!serverQueue){
        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };

    queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);

    try{
        var connection = await voiceChannel.join();
        queueConstruct.connection = connection;
        play(message.guild, queueConstruct.songs[0]);
    }
    catch (err){
        console.log(err);
        queue.delete(message.guild.id);
        return message.channel.send(err);
    }
    }
    else {
        serverQueue.songs.push(song);
        return message.channel.send(`${song.title} has been added to queue :D`);
    }
}

function skip(message, serverQueue){
    if(!message.member.voice.channel)
    return message.channel.send( "Get in a voice channel please :D");

    if (!serverQueue)
    return message.channel.send("There's no song that I could skip :(");
serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue){
    if(!message.member.voice.channel)
    return message.channel.send("Get in a voice channel please :D");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}


function play(guild, song){
    const serverQueue = queue.get(guild.id);
    if(!song){
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Start playing : **${song.title}**`);
}*/

client.login('NzY4NTIxNTcyOTEwMzY2NzMw.X5BrfQ.Y1SYPG9KgRhtqeB-KFPDDSk8YL0');