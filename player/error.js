const {MessageEmbed} = require('discord.js');

module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            let embed1 = new MessageEmbed()
            .setTitle(`${client.emotes.error} - There is no music being played on this server !`)
            .setColor('RED')
            message.channel.send(embed1);
            break;
        case 'NotConnected':
            let embed2 = new MessageEmbed()
            .setTitle(`${client.emotes.error} - You are not connected in any voice channel !`)
            .setColor('RED')
            message.channel.send(embed2);
            break;
        case 'UnableToJoin':
            let embed3 = new MessageEmbed()
            .setTitle(`${client.emotes.error} - I am not able to join your voice channel, please check my permissions !`)
            .setColor('RED')
            message.channel.send(embed3);
            break;
        default:
            let embed4 = new MessageEmbed()
            .setTitle(`${client.emotes.error} - Something went wrong ... Error : ${error}`)
            .setColor('RED')
            message.channel.send(embed4);
    };
};
