import {
  DefaultMidjourneyConfig,
  MidjourneyConfig,
  MidjourneyConfigParam,
} from "midjourney";

export interface BotConfig extends MidjourneyConfig {
  DavinciToken: string;
  BotCommand: string;
}
export interface BotConfigParam extends MidjourneyConfigParam {
  DavinciToken: string;
  BotCommand: string;
}

export const DefaultBotConfig: BotConfig = {
  ...DefaultMidjourneyConfig,
  DavinciToken: "",
  BotCommand: "",
};
