import Emitter from "@chocolatemilkdev/emitter";
import { createBot, Bot, BotEvents ,BotOptions} from "mineflayer";
import { Client as mcClient } from "minecraft-protocol";
import lookAt from "./utils/lookAt";
import getItems from "./utils/getItems";
import initChat from "./utils/initChat";
import initAutoEat from "./utils/initAutoEat";
import spawnCommands from "./utils/spawnCommands";
interface Options extends BotOptions {
  spawnCommands?: Array<{ spawn: number; callback: (bot: Bot) => void }>;
  initInternalExtensions?: boolean;
}
export class Client extends Emitter<BotEvents> {
  bot: Bot;
  user: mcClient;
  constructor(options: Options) {
    super();
    if (typeof options.initInternalExtensions !== "undefined") {
      if (!Array.isArray(options.spawnCommands)) options.spawnCommands = [];
      const cb = (bot: Bot) => {
        this.initChat();
        this.initAutoEat();
      };
      options.spawnCommands.push({ spawn: 0, callback: cb });
    }

    this.bot = createBot(options);
    this.user = this.bot._client;
    this.bot.loadPlugin(spawnCommands);
  }
  on<K extends keyof BotEvents>(eventName: K, callback: BotEvents[K]): this {
    this.bot.on(eventName, callback);

    return super.on(eventName, callback);
  }
  once<K extends keyof BotEvents>(eventName: K, callback: BotEvents[K]): this {
    this.bot.once(eventName, callback);

    return super.once(eventName, callback);
  }
  getItems() {
    return getItems(this.bot);
  }
  lookAt(username: string) {
    lookAt(this.bot, username);
  }
  chat(message: string) {
    this.bot.chat(message);
  }
  initChat(callback?: Function) {
    if (typeof callback !== "undefined") initChat(this.bot, callback);
    else initChat(this.bot, console.log);
  }
  initAutoEat(opt?: {
    startAt?: number;
    priority?: "saturation" | "foodPoints";
  }) {
    initAutoEat(this.bot, opt?.startAt, opt?.priority);
  }
}
