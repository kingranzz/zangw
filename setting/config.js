/*
SCRIPT ZANGETSU V1.5 - Ichigo ZGZ
BUY NO ENC PM : wa.me/6285808282968
*/

const fs = require('fs')

global.ownername = "𝐈𝐜𝐡𝐢𝐠𝐨𝙕𝙂𝙕" //𝙟𝙖𝙣𝙜𝙖𝙣 𝙜𝙖𝙣𝙩𝙞 𝙙𝙚𝙠
global.owner = "62895326205615" // 𝙜𝙖𝙣𝙩𝙞 𝙣𝙤𝙢𝙤𝙧 𝙢𝙪
global.botname = "𝐙𝐀𝐍𝐆𝐄𝐓𝐒𝐔" // 𝙟𝙖𝙣𝙜𝙖𝙣 𝙜𝙖𝙣𝙩𝙞 𝙙𝙚𝙠
global.status = false
//𝙗𝙪𝙖𝙩 𝙚𝙢𝙤𝙩𝙚 𝙨𝙩𝙖𝙩𝙪𝙨, 𝙠𝙖𝙡𝙤 𝙜𝙖 𝙢𝙖𝙪 𝙥𝙖𝙠𝙚𝙠 𝙩𝙞𝙣𝙜𝙜𝙖𝙡 𝙪𝙗𝙖𝙝 𝙠𝙚 𝙛𝙖𝙡𝙨𝙚
global.welcome = false
 //𝙗𝙪𝙖𝙩 𝙬𝙚𝙡𝙘𝙤𝙢𝙚 𝙜𝙧𝙪𝙥, 𝙠𝙖𝙡𝙤 𝙜𝙖 𝙢𝙖𝙪 𝙥𝙖𝙠𝙚𝙠 𝙩𝙞𝙣𝙜𝙜𝙖𝙡 𝙪𝙗𝙖𝙝 𝙠𝙚 𝙛𝙖𝙡𝙨𝙚
global.prefa = ['','!','.',',','🐤','🗿']
global.packname = '® 𝚉𝚊𝚗𝚐𝚎𝚝𝚜𝚞𝐕𝟏.5' // 𝙟𝙖𝙣𝙜𝙖𝙣 𝙮𝙖 𝙙𝙚𝙠
global.author = '𝐈𝐜𝐡𝐢𝐠𝐨𝙕𝙂𝙕👑' // 𝙟𝙖𝙣𝙜𝙖𝙣 𝙟𝙪𝙜𝙖 𝙙𝙚𝙠
global.version = "VERSI 1.5" // 𝙟𝙖𝙣𝙜𝙖𝙣 𝙟𝙪𝙜𝙖 𝙙𝙚𝙠


global.mess = {
ingroup: "Fitur Ini Hanya Untuk Grup💢",
admin: "hanya admin grup yang bisa menggunakan fitur ini💢",
owner: "Wow! Kamu Bukan Owner🗣️",
premium: "Kamu Bukan User Premium",
seller: "Anda belum memiliki akses sebagai Seller",
wait: "Tunggu Sebentar"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
