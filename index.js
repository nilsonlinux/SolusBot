const TelegramBot = require( `node-telegram-bot-api` )

const TOKEN = `703007776:AAGAjCw7YbemwMPpf3mlOKNblmHj1q2idmI`

const bot = new TelegramBot( TOKEN, { polling: true } )

bot.on('new_chat_members', (msg) => {
   bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}, bem vindo ao Solus Brasil!! Conte-nos um pouco sobre você, com o que trabalha e onde, se possivel é claro`)
})