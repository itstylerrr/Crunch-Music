const {MessageEmbed} = require('discord.js');

module.exports = (client, message, query, tracks) => {
    const embed = new MessageEmbed()
    .setTitle(`${client.emotes.error} - You did not provide a valid response ... Please send the command again !`)
    .setColor('RED')
    message.channel.send(embed);
};