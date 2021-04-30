const fs = require('fs');
const discord = require('discord.js');
const Discord = require('discord.js')
const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

function status() {
    let status = [
        `${client.guilds.cache.size} servers | %help`,
        `you :)`,
        `the amazing music you like :)`,
        `%help`
    ];

    let statusR = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[statusR], { type: "LISTENING", status: "Online" });
}
setInterval(status, 4000);



client.on('ready', () => {
    status();
});

client.on('guildDelete', guild => {
    status();
});

client.on('guildCreate', guild => {
    status();
});

client.on("guildCreate", guild => {
    let servericon = guild.iconURL();
    const guildAdd = new Discord.MessageEmbed()
        .setAuthor(`@Crunch Music has joined ${guild.name} ✅`, servericon)
        .addField(`Total Members`, `**${client.guilds.cache.reduce((x, guild) => x + guild.memberCount, 0)}** members!`)
        .setColor("#65db7b")
        .setTimestamp();

    let mainguild = client.guilds.cache.get('821523533430652969');
    if (mainguild) {
        channel = mainguild.channels.cache.get('824264250867580959');
        if (channel) {
            channel.send(guildAdd)
        }
    }
});

client.on("guildDelete", guild => {
    const guildDel = new Discord.MessageEmbed()
    .setAuthor(`@Crunch Music has left ${guild.name} 🚫`, servericon)
    .setColor("#65db7b")
    .setTimestamp();
    let mainguild = client.guilds.cache.get('821523533430652969');
    if (mainguild) {
        channel = mainguild.channels.cache.get('824264250867580959');
        if (channel) {
            channel.send(guildDel)
        }
    }
});

client.login(client.config.discord.token);