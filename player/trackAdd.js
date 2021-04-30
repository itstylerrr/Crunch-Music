const {MessageEmbed} = require('discord.js');

module.exports = (client, message, queue, track) => {
    const embed = new MessageEmbed()
    .setTitle(`${client.emotes.music} - ${track.title} has been added to the queue !`)
    .setColor('GREEN')
    message.channel.send(embed);
};