import { Bot } from "mineflayer";

export default (bot: Bot, username: string) => {
  const player = bot.players[username];
  if (player && player.entity) {
    bot.lookAt(player.entity.position);
  }
};
