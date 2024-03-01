import { Bot } from "mineflayer";
import convertTextCodes from "./convertTextCodes";
import chalk from "chalk";

export default (bot: Bot, callback: Function) => {
  bot.on("messagestr", (msg, pos, jsonMsg) => {
    let colorizedMsg = "";
    if (typeof jsonMsg.json.extra !== "undefined")
      for (const e of jsonMsg.json.extra as Array<{
        color?: string;
        bold?: boolean;
        text: string;
      }>) {
        if (typeof e.color !== "undefined") {
          colorizedMsg += convertTextCodes(
            e.color ?? "",
            e.text,
            e.bold ?? false
          );
        }
      }
    else {
      colorizedMsg = convertTextCodes(" ", jsonMsg.json.text, false);
    }
    if (pos == "game_info") {
      const terminalWidth = process.stdout.columns;
      const padding = chalk
        .white("_")
        .repeat(terminalWidth / 2 - colorizedMsg.length / 2);

      callback(padding + colorizedMsg + padding);
    } else callback(colorizedMsg);
  });
};
