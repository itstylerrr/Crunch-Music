const disc = require('discord.js')
const { Discord } = require("discord-player");

module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No songs currently playing !`);


        const embed = new disc.MessageEmbed()
        .setTitle(`**Server queue - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(looped)' : ''}**`)
        .setDescription(`\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`))
        .setAuthor(`Music By Crunch Music -- ${message.author.username}`, 'https://cdn.discordapp.com/avatars/809071058761154570/70fefe91f31e5be11564b2b3d9a0e115.webp?size=512')
        .setTimestamp()
        .setFooter(`Embeds "*seggisfied* by @!ts tyler#7922"`)
        .setColor('RANDOM')

        message.channel.send(embed);


    },
};