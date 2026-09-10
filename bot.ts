
import process from "node:process";
import { Client, Events, GatewayIntentBits } from "npm:discord.js";

const DiscordToken = process.env.DISCORD_TOKEN;

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
})

client.login(DiscordToken);