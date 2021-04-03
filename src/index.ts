import BotClient from './struct/BotClient'

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ', listener.address());
});

const client = new BotClient();

client.start(process.env.TOKEN);