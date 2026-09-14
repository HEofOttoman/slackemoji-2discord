import "@std/dotenv/load"; 
// This is what makes .env work like this
import process from "node:process";
import { Client, SlashCommandBuilder, Events, GatewayIntentBits } from "discord.js";

import "./commands/slack-emoji.ts";

const DiscordToken = process.env.DISCORD_TOKEN;

if (!DiscordToken) { // Missing env safeguard
  throw new Error("Missing env variables.");
}

const client = new Client({
    intents: [GatewayIntentBits.Guilds   ]
});

// (client as any).commands = new Map();
// (client as any).commands = [];

client.on(Events.ClientReady, () => {
    /*(client as any).commands.set('slack-emoji', {'slack-emoji', {
        data: new SlashCommandBuilder().setName('slack-emoji')
        .setDescription('get slack emoji +100 aura')
    })*/
    const emojiCommmand = new SlashCommandBuilder()
        .setName('slack-emoji').setDescription('get +100 aura')
        .addUserOption((option) => option.setName('emoji-name').setDescription('The name of the emoji to send (without colons)').setRequired(true));
    const commandsToRegister = [emojiCommmand.toJSON()];
    try {client.application?.commands.set(commandsToRegister);} catch (error) {console.error(error);};
    /*client?.application?.commands.set([
        {
            name: 'slack-emoji',
            description: 'get slack emoji +100 aura',
        }
    ])*/
//    client.application?.commands.create({name: 'slack-emoji',            description: 'get slack emoji +100 aura',});
})

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    // if (!(client as any).commands.get(interaction.commandName)) { console.error("Command name null bozo"); return;}
    // if (!client.application?.commands.fetch(interaction.commandName)) { console.error("Command name null bozo"); return;}
    // Null check (doesn't work)

    try {
        if (interaction.commandName === 'slack-emoji') {
            const requestedEmoji = interaction.options.getString('emoji-name');
            if (!requestedEmoji) {return};
            await getEmoji(requestedEmoji);
            await interaction.reply(`Hi ${interaction.user.username}, I don't have the image yet`);
        }

    } catch (error) {
        console.error(error);
    }
});

async function getEmoji(emojiName: string) {
    try {
        const EVERYemoji = (await fetch('https://badger.hackclub.dev/emojis'));


    // EVERYemoji.find
    } catch (error) {console.error(error)}
}

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(DiscordToken);