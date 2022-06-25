let fs = require('fs')
let handler = async (m) => {
let huaaa = fs.readFileSync('./mp3/AUD-20220623-WA0111.opus')
conn.sendFile(m.chat, bot, '', '', m, true)
}

handler.customPrefix = /^(bot|halo bot|p|bot kontol|bot gj|hai bot)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler
