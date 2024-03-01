import { Bot } from "mineflayer";

import { plugin } from "mineflayer-auto-eat";

export default (
  bot: Bot,
  startAt: number = 17,
  priority: "saturation" | "foodPoints" = "foodPoints"
) => {
  bot.loadPlugin(plugin);
  bot.autoEat.options.priority = priority;
  bot.autoEat.options.startAt = startAt;
};
