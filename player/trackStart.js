const {MessageEmbed} = require('discord.js');

module.exports = (client, message, track) => {

  const trackStart = new MessageEmbed()
    .setTitle(':notes: Now Playing :notes:')
    .addField(`🟢 Name:`, `${track.title}`)
    .addField(`🎤 Channel:`, `${message.member.voice.channel.name}`)
    .addField(`🧑 Request:`, `Requested by @${message.author.tag}`)
    .setFooter(`Music By Crunch`)
    .setTimestamp()
    .setColor('GREEN')

  message.channel.send(trackStart);

};