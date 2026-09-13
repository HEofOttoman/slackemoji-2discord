import { SlashCommandBuilder } from "discord.js";
import { json } from "node:stream/consumers";

export default {
    data: new SlashCommandBuilder(),
    async execute(emojiname: string) {
        await fetch("https://badger.hackclub.dev/emoji");
    }
}

async function getEmoji(emojiName: string) {
    const emojis = await fetch("https://badger.hackclub.dev/emoji");
    const links = JSON.stringify(emojis);
    const link = JSON.parse(links);

    const url = emojis[emojiName];
}

/*module.exports = {
    data: new SlashCommandBuilder()
        .setName('slack-emoji')
        .setDescription('get a slack emoji'),
    async execute(interaction: any) {
        await interaction.reply('Pong!');
    },
}*/

/*const data = new SlashCommmandBuilder()
    .setName('slack-emoji')
    .setDescription('Get a slack emoji by name');
*/