import "dotenv/config";
import { MidjourneyBot } from "../src/index";

async function main() {
  const clients = [
    {
      DavinciToken: <string>process.env.DAVINCI_TOKEN_1,
      ChannelId: <string>process.env.CHANNEL_ID_1,
      BotCommand: <string>process.env.BOT_COMMAND_1,
    },
    {
      DavinciToken: <string>process.env.DAVINCI_TOKEN_2,
      ChannelId: <string>process.env.CHANNEL_ID_2,
      BotCommand: <string>process.env.BOT_COMMAND_2,
    }
  ];

  for (const config of clients) {
    const client = new MidjourneyBot({
      DavinciToken: config.DavinciToken,
      ServerId: <string>process.env.SERVER_ID,
      ChannelId: config.ChannelId,
      SalaiToken: <string>process.env.SALAI_TOKEN,
      Debug: true,
      BotCommand: config.BotCommand
    });

    await client.start();
  }

}

main().catch(console.error);
