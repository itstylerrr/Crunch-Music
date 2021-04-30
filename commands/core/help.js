const Discord = require('discord.js')
const pagination = require('discord.js-pagination');

module.exports = {
    name: 'help',
    aliases: ['@Crunch Music'],
    category: 'Infos',
    utilisation: '{prefix}help',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
            
            const botinfo = new Discord.MessageEmbed()
                .setTitle('Bot Information')
                .setDescription('Developers: !ts tyler#7922')
                .addField('Prefix', '`%`')
                .addField('Help Server', 'https://discord.gg/tThMnC8WFj')
                .addField('Vote', 'Vote for Crunch when we get verified on `top.gg` see page 6')
                .setColor('RANDOM')
                .setTimestamp();

            const info = new Discord.MessageEmbed()
                .setTitle('Info Commands')
                .addField(`Use %help <COMMAND> for more help on any commands.`, ` \n ${infos}`)
                .setColor('RANDOM')
                .setTimestamp()

            const musiccmds = new Discord.MessageEmbed()
                .setTitle('🎶 Music Commands 🎶')
                .addField(`Use %help <COMMAND> for more help on any commands.`, ` \n ${music}`)
                .setTimestamp()
                .setColor('RANDOM')

            const filters = new Discord.MessageEmbed()
                .setTitle('Filter Commands')
                .addField(`Use %help <COMMAND> for more help on any commands. \n `, client.filters.map((x) => '`' + x + '`').join(', '))
                .setTimestamp()
                .setColor('RANDOM')


            const invite = new Discord.MessageEmbed()
                .setTitle('Invite Me!')
                .setURL('https://discord.com/api/oauth2/authorize?client_id=809071058761154570&permissions=3395392&scope=bot')
                .setDescription('To invite me to your server click on the blue Invite Me text! It helps us out alot!')
                .setTimestamp()
                .setColor('RANDOM')

            const pages = [
                botinfo,
                info,
                musiccmds,
                filters,
                invite
            ]

            const emojiList = ["⏪", "⏩"];

            const timeout = '120000';

            pagination(message, pages, emojiList, timeout)
            
        } else {
           
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Help pannel' },
                    footer: { text: 'This bot made by @!ts tyler#7922 with some credits to Zerio' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};