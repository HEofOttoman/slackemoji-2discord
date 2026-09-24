import "@std/dotenv/load"; 
// This is what makes .env work like this
import process from "node:process";
import { Client, SlashCommandBuilder as _SlashCommandBuilder, Events, GatewayIntentBits, CommandInteraction as _CommandInteraction } from "discord.js";

import "./commands/slack-emoji.ts";
import slackEmojiCommand from "./commands/slack-emoji.ts";

const DiscordToken = process.env.DISCORD_TOKEN;

if (!DiscordToken) { // Missing env safeguard
  throw new Error("Missing env variables.");
}

const client = new Client({
    intents: [GatewayIntentBits.Guilds   ]
});

// (client as any).commands = new Map();
// (client as any).commands = [];

// Register commands
client.on(Events.ClientReady, async () => {
    // try {client.application?.commands.set(commandsToRegister);} catch (error) {console.error(error);};
    try {await client.application?.commands.set([slackEmojiCommand.data.toJSON()]);} catch (error) {console.error(error);};
    
})

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    // if (!(client as any).commands.get(interaction.commandName)) { console.error("Command name null bozo"); return;}
    // if (!client.application?.commands.fetch(interaction.commandName)) { console.error("Command name null bozo"); return;}
    // Null check (doesn't work)

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

/*async function getEmoji(emojiName: string) {
    try {
        // const EVERYemoji = (await fetch('https://badger.hackclub.dev/emojis'));
        const emojiRes = await fetch(`https://cachet.hackclub.com/emojis/${emojiName}`);
        const emoji = await emojiRes.json();
        return emoji.imageURL;

    // EVERYemoji.find
    } catch (error) {console.error(error)}
}*/

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(DiscordToken);