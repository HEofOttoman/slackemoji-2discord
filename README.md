<div align="center">
    <img src="https://emoji.slack-edge.com/T09V59WQY1E/loll/d8699d45d71dbd44.gif" />
    <h1>Slack Emoji Discord Fetch</h2>
    <h4>For your Slack addiction</h4>
</div>

## slackemoji-2discord

A Discord bot to fetch Slack emojis from a *certain* Slack workspace and send the image (easier).

you know how you're so addicted to slack you try using emojis elsewhere??
yea. me too. or just me. anyway.

This bot, which is installed as a Discord selfbot (using the Slack analogy), allows you to send a link to the emoji as an image/gif, in *most* places on Discord!

This is simple enough, surprised it doesn't exist yet. Probably does and I don't know about it yet.

## Tech Stack
Deno & Discord.JS, maybe [discordeno](https://discordeno.js.org) if I run into the most niche issues known to man. Uses the [cachet](https://cachet.hackclub.com) endpoint to fetch emoji.

### Deployment
1. Make a `.env` file and put your token in a variable named `DISCORD_TOKEN`. 
2. Then, run:
```deno run bot.ts```


### Usage

Okay I learnt I can't send messages *as* a user so you'll have to copy the link of the image fetched by the `/` command.

1. Run command, `/slack-emoji`, name on it
2. Copy the link that shows up for it

>Made by me with DiscordJS docs with more difficulty than it should ![why](https://emoji.slack-edge.com/T09V59WQY1E/noooovanish/1d5ee9fd30729823.png)