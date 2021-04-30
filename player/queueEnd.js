const {MessageEmbed} = require('discord.js');

module.exports = (client, message, queue) => {
    const embed = new MessageEmbed()
    .setTitle(`${client.emotes.error} - Music stopped as there is no more music in the queue !`)
    .setColor(`RED`)
    message.channel.send(embed);
};