import { Bot, BotOptions } from "mineflayer";
import { Options } from "../interfaces";

export default function (bot?: Bot, botOptions?: BotOptions) {
  if (typeof botOptions === "undefined" || typeof bot === "undefined") return;
  const options: Options = botOptions;
  if (typeof options.spawnCommands !== "undefined")
    if (options.spawnCommands.length === 0) return;
  let spawnCounter = 0;
  let maxSpawn = Math.max(
    ...(options.spawnCommands?.map((e) => e.spawn) ?? [0])
  );
  bot.on("spawn", async () => {
    await options.spawnCommands
      ?.filter((e) => e.spawn == spawnCounter)
      .forEach(async (e) => await e.callback(bot));
    if (spawnCounter === maxSpawn) spawnCounter = -1;
    else spawnCounter++;
  });

  return true;
}
