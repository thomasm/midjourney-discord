import "dotenv/config";
import { MidjourneyBot } from "../src/index";

async function main() {
  const totalClients = 14;

  const clients = Array.from({ length: totalClients }, (_, i) => {
    const index = i + 1;
    
    return {
      DavinciToken: String(process.env[`DAVINCI_TOKEN_${index}`]),
      ChannelId: String(process.env[`CHANNEL_ID_${index}`]),
      BotCommand: String(process.env[`BOT_COMMAND_${index}`]),
    }
  });


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
