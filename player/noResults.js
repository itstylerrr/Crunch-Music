const {MessageEmbed} = require('discord.js');

module.exports = (client, message, query) => {
    const embed = new MessageEmbed()
    .setTitle(`${client.emotes.error} - No results found on YouTube for ${query} !`)
    .setColor('RED')
    message.channel.send(embed);
};