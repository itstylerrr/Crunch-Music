const {MessageEmbed} = require('discord.js');

module.exports = (client, message, queue, playlist) => {
    const embed = new MessageEmbed()
    .setTitle(`${client.emotes.music} - ${playlist.title} has been added to the queue (**${playlist.tracks.length}** songs) !`)
    .setColor(`GREEN`)
    message.channel.send(embed);
};