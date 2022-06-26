import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './mp3/7113420964272147227.mp3'
conn.sendFile(m.chat, vn, '.7113420964272147227.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['7113420964272147227']
handler.tags = ['sound']
handler.command = /^(7113420964272147227)$/i
handler.fail = null
handler.exp = 100
export default handler