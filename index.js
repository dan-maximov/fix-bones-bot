const Telegraf = require('telegraf');
const SocksProxyAgent = require('socks-proxy-agent');

const bot = new Telegraf(process.env.BOT_TOKEN, {
  telegram: {
    agent: new SocksProxyAgent('socks://localhost:9050'),
  },
});

let antiStaxTimeout;
let structumTimeout;

bot.start(ctx => ctx.reply('Welcome!'));
bot.command('q', ({ update, reply }) => {
  if (update.message.chat.type !== 'private') {
    return;
  }

  reply('good morning');

  antiStaxTimeout = setTimeout(() => {
    reply('Antistax');
  }, 7200000); //2hrs after awakeing

  structumTimeout = setTimeout(() => {
    reply('Structum');
  }, 25200000); // 7hrs after awakeing
});

bot.command('reset', ({ update, reply }) => {
  if (update.message.chat.type !== 'private') {
    return;
  }

  reply('ok, clear all timeouts');

  clearTimeout(antiStaxTimeout);
  clearTimeout(structumTimeout);
});

bot.launch();
