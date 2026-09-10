import "@std/dotenv/load"; 
// This is what makes .env work like this
import process from "node:process";
import { Client, SlashCommandBuilder, Events, GatewayIntentBits } from "discord.js";

const DiscordToken = process.env.DISCORD_TOKEN;

if (!DiscordToken) { // Missing env safeguard
  throw new Error("Missing env variables.");
}

const client = new Client({
    
    intents: [
        GatewayIntentBits.Guilds
    ]
});

(client as any).commands = new Map();

client.on(Events.ClientReady, () => {
    /*(client as any).commands.set('slack-emoji', {'slack-emoji', {
        data: new SlashCommandBuilder().setName('slack-emoji')
        .setDescription('get slack emoji +100 aura')
    })*/
    client?.application?.commands.set([
        {
            name: 'slack-emoji',
            description: 'get slack emoji +100 aura',
        }
    ])
})

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (!(client as any).commands.get(interaction.commandName)) { console.error("Command name null bozo"); return;}

    try {
        if (interaction.commandName === 'slack-emoji') {
            await getEmoji();
        }

    } catch (error) {
        console.error(error);
    }
});

async function getEmoji() {
    const EVERYemoji = (await fetch('https://badger.hackclub.dev/emojis')).json;

    // EVERYemoji.find
}

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(DiscordToken);