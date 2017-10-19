const Bot = require('./lib/Bot')
const SOFA = require('sofa-js')
const Fiat = require('./lib/Fiat')

let bot = new Bot()

// ROUTING

bot.onEvent = function(session, message) {
  session.reply(SOFA.Message({
    body: "Would you like to demo Toshi's Web3 injected WebView?",
    controls: [
      {type: "button", label: "Let's do It!", action: "Webview::https://www.myetherwallet.com/#view-wallet-info"},
      {type: "button", label: "Not Really", value: "exit"},
    ]
  }))
}
