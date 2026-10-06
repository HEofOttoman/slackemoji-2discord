import { ChatInputCommandInteraction, MessageFlags, SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName('slack-emoji').setDescription('Get a slack emoji by name (+100 aura super tuff)')
        .addStringOption((option) => option.setName('emoji-name').setDescription('The name of the emoji to send (without colons)').setRequired(true))
        .addBooleanOption((option) => option.setName('send-to-channel').setDescription('Send this bot, letting people know it exists, to the channel?')),
    async execute(interaction: ChatInputCommandInteraction) {
        // await fetch("https://badger.hackclub.dev/emoji");
        const emojiName = interaction.options.getString('emoji-name');
        if (!emojiName) {await interaction.reply(`That emoji name is invalid.`); return;};

        const channelSend = interaction.options.getBoolean('send-to-channel');

        const reqURL = await getEmoji(emojiName);

        if (channelSend) {
            await interaction.deferReply(); // more time to stop crash if > 3 secs
            await interaction.editReply(`${reqURL}`); // sends real thing as bot
            // await interaction.reply(`${reqURL}`); // sends real thing as bot
            await interaction.followUp({content: ` \`\`\`${reqURL}\`\`\` `, flags: [MessageFlags.Ephemeral]}); // sends thing as copyable text block
        } else {
            await interaction.deferReply({ephemeral: true});
            await interaction.editReply({content: ` \`\`\`${reqURL}\`\`\` `});
            // await interaction.reply({content: ` \`\`\`${reqURL}\`\`\` `, flags: [MessageFlags.Ephemeral]});
        }
        console.log(`Sent emoji ${emojiName} to ${interaction.user.username} in ${interaction.guild?.name}`) // Logging?
        // await interaction.reply(`${reqURL}`); // sends real thing as bot
        // interaction.reply({content: ` \`\`\`${reqURL}\`\`\` `}); // sends thing as copyable text block
        // await interaction.followUp({content: ` \`\`\`${reqURL}\`\`\` `}); // sends thing as copyable text block
        

    }
}

interface emojiResponse {
    name: string; imageUrl: string; alias: string;
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
