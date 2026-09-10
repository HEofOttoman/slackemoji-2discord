
import process from "node:process";
import { Client, SlashCommandBuilder, Events, GatewayIntentBits } from "discord.js";

const DiscordToken = process.env.DISCORD_TOKEN;

const client = new Client({
    
    intents: [
        GatewayIntentBits.Guilds
    ]
});

client.once('ready', async () => {
    const data = [
        new SlashCommandBuilder()
            .setName('sslack-emoji')
            .setDescription('Get a slack emoji by name')
    ];
    
    await client.application?.commands.set(data);
});

const commands = [];

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isCommand()) return;

    // const commandNombre = interaction.get(interaction.commandName);
    const commandNombre = 'slack-emoji';
    if (!commandNombre) { console.error("Command name null bozo"); return;}

    try {
        // await commandNombre.execute(interaction)
        console.log(`Command received: ${commandNombre}`);
    } catch (error) {
        console.error(error);
    }
});

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(DiscordToken);