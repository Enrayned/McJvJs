import { Bot } from "mineflayer";

export default (bot: Bot) => {
  const items = bot.inventory.items();
  if (bot.registry.isNewerOrEqualTo("1.9") && bot.inventory.slots[45])
    items.push(bot.inventory.slots[45]);
  const output = items.map((item) => ({
    name: item.name,
    count: item.count,
    details: item,
    string: `${item.name} x ${item.count}`,
  }));

  return { raw: output, string: output.map((i) => i.string) };
};
