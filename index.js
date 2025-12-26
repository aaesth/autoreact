const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const GUILD_ID = "guild id here";
const CHANNEL_ID = "channel id here";

// you can add multiple just seperate it with a comma
const EMOJIS = ["🫃"];
client.once("ready", () => {
  console.log(`logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  try {
    if (message.author.bot) return;

    if (
      message.guild?.id !== GUILD_ID ||
      message.channel.id !== CHANNEL_ID
    ) return;

    for (const emoji of EMOJIS) {
      await message.react(emoji);
    }
  } catch (err) {
    console.error("failed to react error: ", err);
  }
});
client.login("token here");
