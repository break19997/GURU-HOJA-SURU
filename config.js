import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['919432913109', 'GURU', true],
  ['7480941797', 'Ash', true], 
  [''] 
] //Numeros de owner 

global.mods = ['919432913109','9432913109'] 
global.prems = ['917480941797', '9432913109', '919432913109']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm-nhie.onrender.com',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = '69┃ᴮᴼᵀ' 
global.author = '@Asliguru' 
global.igfg = '▢ Follow on https://instagram.com/good_boy10134?igshid=ZDdkNTZiNTM=' 
global.dygp = 'https://api.whatsapp.com/send?phone=+919432913109'
global.fgsc = 'https://github.com/Guru3/GURU-BOT-V1' 
global.fgyt = 'https://youtube.cru'
global.fgpyp = 'https://youtube.cguru'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 

global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
