const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
  message.delete();
  message.channel.send("**__MrbBnBot v1.0__ davet linkine buradan ulaşabilirsiniz -> https://discordapp.com/oauth2/authorize?client_id=574200241658527744&permissions=8&scope=bot**");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet', 'dvt', 'inv', 'invite', 'link'],
  permLevel: 3
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini verir',
  usage: 'davet'
};