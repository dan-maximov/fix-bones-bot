const Telegraf = require('telegraf');
const SocksProxyAgent = require('socks-proxy-agent');

const bot = new Telegraf(process.env.BOT_TOKEN, {
  telegram: {
    agent: new SocksProxyAgent('socks://localhost:9050'),
  },
});

bot.start(ctx => ctx.reply('Welcome!'));
bot.command('q', ({ update, reply }) => {
  if (update.message.chat.type !== 'private') {
    return;
  }

  reply('good morning');

  setTimeout(() => {
    reply('Antistax');
  }, 7200000); //2hrs after awakeing

  setTimeout(() => {
    reply('Structum');
  }, 25200000); // 7hrs after awakeing
});
bot.launch();
