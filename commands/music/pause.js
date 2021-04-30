const { Discord } = require('discord-player');
const disc = require('discord.js')

module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - The music is already paused !`);

        client.player.pause(message);

        const embed = new disc.MessageEmbed()
        .setTitle('🎶 Pause')
        .setDescription(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} paused !`)
        .setColor('RANDOM')
        .setTimestamp()
        message.channel.send(embed);
    },
};