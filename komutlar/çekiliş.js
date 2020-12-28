const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const çekiliş = new Discord.MessageEmbed()
                .setColor('GOLD')
        .setFooter(`${msg.author.username} Başarıyla Yardım Komutunu Kullandı!`, msg.author.avatarURL)
        .setAuthor('Serpent Bot Çekiliş Menüsü')
        .setThumbnail('https://cdn.discordapp.com/attachments/788456826983153714/788707527600767006/8-13.jpg')
        .addField('**__Çekliş Başlat__**','`s!çekiliş #kanal süre kazanan_sayısı Ödül` \nBelirtilen Kanalda Çekiliş Başlatırsınız',false )
        .addField('**__Çekiliş Yenile__**','`s!yenile mesaj_id` \n Belirtilen İd deki Çekilişi Yeniler',true)
        .addField('**__Çekiliş Liste__**','`s!liste` \nSunucudaki Aktif Çekilişleri Listeler',true)
        .addField('**__Çekiliş Bitir__**', '`s!bitir mesaj_id` \nBelirtilen İd deki Çekilişi Sonlandırır.',false)
  
msg.channel.send(çekiliş)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['yardım'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'yardım'
};