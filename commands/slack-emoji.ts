import { SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('slack-emoji')
        .setDescription('get a slack emoji'),
    async execute(interaction: any) {
        await interaction.reply('Pong!');
    },
}

/*const data = new SlashCommmandBuilder()
    .setName('slack-emoji')
    .setDescription('Get a slack emoji by name');
*/