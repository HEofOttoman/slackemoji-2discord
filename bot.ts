import "@std/dotenv/load"; 
// This is what makes .env work like this
import process from "node:process";
import { Client, SlashCommandBuilder as _SlashCommandBuilder, Events, GatewayIntentBits, CommandInteraction as _CommandInteraction } from "discord.js";

const DiscordToken = process.env.DISCORD_TOKEN;

if (!DiscordToken) { // Missing env safeguard
  throw new Error("Missing env variables.");
}

const client = new Client({
    intents: [GatewayIntentBits.Guilds   ]
});

import slackEmojiCommand from "./commands/slack-emoji.ts";
// Register commands
client.on(Events.ClientReady, async () => {
    try {await client.application?.commands.set([slackEmojiCommand.data.toJSON()]);} catch (error) {console.error(error);};
    
})

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    try {
        if (interaction.commandName === 'slack-emoji') {
            try {
                await slackEmojiCommand.execute(interaction);
            } catch (error) {
                await interaction.reply(`Hi ${interaction.user.username}, an error occurred & I don't have the image yet: ${error}`); 
            }
        }
    } catch (error) {
        console.error(error);
    }
});

client.once(Events.ClientReady, (readyClient) => {
    console.log(`I'M IN! Logged in as ${readyClient.user.tag}`);
});

client.login(DiscordToken);