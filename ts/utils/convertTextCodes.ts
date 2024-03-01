import chalk from "chalk";

export default (color: string, text: string, bold: boolean) => {
  if (color == "black")
    return bold ? chalk.hex("#000000").bold(text) : chalk.hex("#000000")(text);
  else if (color == "dark_blue")
    return bold ? chalk.hex("#0000AA").bold(text) : chalk.hex("#0000AA")(text);
  else if (color == "dark_green")
    return bold ? chalk.hex("#00AA00").bold(text) : chalk.hex("#00AA00")(text);
  else if (color == "dark_aqua")
    return bold ? chalk.hex("#00AAAA").bold(text) : chalk.hex("#00AAAA")(text);
  else if (color == "dark_red")
    return bold ? chalk.hex("#AA0000").bold(text) : chalk.hex("#AA0000")(text);
  else if (color == "dark_purple")
    return bold ? chalk.hex("#AA00AA").bold(text) : chalk.hex("#AA00AA")(text);
  else if (color == "gold")
    return bold ? chalk.hex("#FFAA00").bold(text) : chalk.hex("#FFAA00")(text);
  else if (color == "gray")
    return bold ? chalk.hex("#AAAAAA").bold(text) : chalk.hex("#AAAAAA")(text);
  else if (color == "dark_gray")
    return bold ? chalk.hex("#555555").bold(text) : chalk.hex("#555555")(text);
  else if (color == "blue")
    return bold ? chalk.hex("#5555FF").bold(text) : chalk.hex("#5555FF")(text);
  else if (color == "green")
    return bold ? chalk.hex("#55FF55").bold(text) : chalk.hex("#55FF55")(text);
  else if (color == "aqua")
    return bold ? chalk.hex("#55FFFF").bold(text) : chalk.hex("#55FFFF")(text);
  else if (color == "red")
    return bold ? chalk.hex("#FF5555").bold(text) : chalk.hex("#FF5555")(text);
  else if (color == "light_purple")
    return bold ? chalk.hex("#FF55FF").bold(text) : chalk.hex("#FF55FF")(text);
  else if (color == "yellow")
    return bold ? chalk.hex("#FFFF55").bold(text) : chalk.hex("#FFFF55")(text);
  else if (color == "white")
    return bold ? chalk.hex("#FFFFFF").bold(text) : chalk.hex("#FFFFFF")(text);
  else {
    const txt = text
      .replaceAll("§0", "\x1b[0;30m")
      .replaceAll("§1", "\x1b[0;34m")
      .replaceAll("§2", "\x1b[0;32m")
      .replaceAll("§3", "\x1b[0;36m")
      .replaceAll("§4", "\x1b[0;31m")
      .replaceAll("§5", "\x1b[0;35m")
      .replaceAll("§6", "\x1b[0;33m")
      .replaceAll("§7", "\x1b[0;37m")
      .replaceAll("§8", "\x1b[0;90m")
      .replaceAll("§9", "\x1b[0;94m")
      .replaceAll("§a", "\x1b[0;92m")
      .replaceAll("§b", "\x1b[0;96m")
      .replaceAll("§c", "\x1b[0;91m")
      .replaceAll("§d", "\x1b[0;95m")
      .replaceAll("§e", "\x1b[0;93m")
      .replaceAll("§f", "\x1b[0;97m")
      .replaceAll("§k", "\x1b[8m")
      .replaceAll("§l", "\x1b[1m")
      .replaceAll("§m", "\x1b[9m")
      .replaceAll("§n", "\x1b[4m")
      .replaceAll("§o", "\x1b[3m")
      .replaceAll("§r", "\x1b[0m");
    return bold ? chalk.bold(txt) : txt;
  }
};
