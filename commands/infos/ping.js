const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        const embed = new Discord.MessageEmbed()
        .setTitle(`${client.emotes.success} - Ping : **${client.ws.ping}ms** !`)
        message.channel.send(embed);
    },
};