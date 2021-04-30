const Discord = require('discord.js')

module.exports = {
    name: 'debug',
    aliases: ['db'],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Debuging...')
        .setDescription(`${client.emotes.success} - ${client.user.username} connected in **${client.voice.connections.size}** channels !`)
        .setColor('GREEN')
        .setTimestamp()
        message.channel.send(embed);
    },
};