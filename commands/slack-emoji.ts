import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName('slack-emoji').setDescription('Get a slack emoji by name (+100 aura super tuff)')
        .addStringOption((option) => option.setName('emoji-name').setDescription('The name of the emoji to send (without colons)').setRequired(true)),
    async execute(interaction: ChatInputCommandInteraction) {
        // await fetch("https://badger.hackclub.dev/emoji");
        const emojiName = interaction.options.getString('emoji-name');
        if (!emojiName) {return};

        const reqURL = await getEmoji(emojiName);
        // interaction.reply(`${reqURL}`); // sends real thing as bot
        interaction.reply({content: ` \`\`\`${reqURL}\`\`\` `}); // sends thing as copyable text block

    }
}

interface emojiResponse {
    emojiUniqueName: string; emojiUrl: string; alias: string;
}

async function getEmoji(emojiName: string) {
    try {
        // const EVERYemoji = (await fetch('https://badger.hackclub.dev/emojis'));
        const emojiRes = await fetch(`https://cachet.hackclub.com/emojis/${emojiName}`);
        const emoji = await emojiRes.json();
        return emoji.imageUrl;

    // EVERYemoji.find
    } catch (error) {console.error(error);}
}

/*const data = new SlashCommmandBuilder()
    .setName('slack-emoji')
    .setDescription('Get a slack emoji by name');
*/