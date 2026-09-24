import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName('slack-emoji').setDescription('Get a slack emoji by name (+100 aura super tuff)')
        .addUserOption((option) => option.setName('emoji-name').setDescription('The name of the emoji to send (without colons)').setRequired(true)),
    async execute(interaction: ChatInputCommandInteraction) {
        // await fetch("https://badger.hackclub.dev/emoji");
        const emojiName = interaction.options.getString('emoji-name');
        if (!emojiName) {return};

        const reqURL = getEmoji(emojiName)
        interaction.reply(`${reqURL}`);
        // interaction.reply({content: ` \`\`\`${reqURL}\`\`\` `})

    }
}

interface emojiResponse {
    emojiUniqueName: string; emojiUrl: string;
}

async function getEmoji(emojiName: string) {
    const emojis = await fetch("https://badger.hackclub.dev/emoji");
    // const links = JSON.stringify(emojis);
    // const link = JSON.parse(links);
    const emoji = await emojis.json();

    const url = emoji.emojiName;
    // const url = emojis[emojiName];

    return url
}

/*const data = new SlashCommmandBuilder()
    .setName('slack-emoji')
    .setDescription('Get a slack emoji by name');
*/