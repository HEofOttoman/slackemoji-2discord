import { SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName('slack-emoji')
        .setDescription('Get a slack emoji by name'),
    async execute(emojiname: string) {
        await fetch("https://badger.hackclub.dev/emoji");
        const reqURL = getEmoji(emojiname)
        
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