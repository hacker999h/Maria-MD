const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['923356621576']
global.ownername = "💙𓆩‎✘AHMAD✘𓆪_✰"//owner name
global.ytname = "YT: hastagrespect"
global.socialm = "GitHub: Ayushpandey023"
global.location = "Pakistani"

global.botname = 'Ahmad-𝐌𝐃' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘Ahmad✘𓆪_✰'
global.packname = 'Sticker By'
global.author = 'Ahmad Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ahmad botz inc."

//theme link
global.link = 'https://tiktok.com/@itxahmaad47'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = true //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 Ahmad Bot 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/AYUSH-PANDEY023/Maria-MD\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
