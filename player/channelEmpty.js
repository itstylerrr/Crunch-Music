const {MessageEmbed} = require('discord.js');

module.exports = (client, message, queue) => {
    const embed = new MessageEmbed()
    .setTitle(`🎶 Music Stoped ❌`)
    .setDescription(`Music has been stopped as there are no more members in the channel!`)
    .addField(`Is this a mistake?`, `If this is a mistake please join the support server! [Tylers Development](https://discord.com/invite/tThMnC8WFj)`)
    .setFooter(`Crunch Music -- No Members Left`)
    .setTimestamp()
    .setColor(`RED`)
    message.channel.send(embed);
};