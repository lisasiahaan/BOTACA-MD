let handler = async m => m.reply(`
╭─「 Donasi • Gopay & Dana 」
│ •  [083167581315]
│ •  [083167581315]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler