<header align="center">
    <img src="https://emoji.slack-edge.com/T09V59WQY1E/loll/d8699d45d71dbd44.gif" />
    <h1>Slack Emoji Discord Fetch</h2>
    <h4>For your Slack addiction</h4>
</header>

## slackemoji-2discord

A Discord bot to fetch Slack emojis from a *certain* Slack workspace and send the image (easier).

you know how you're so addicted to slack you try using emojis elsewhere??
yea. me too. or just me. anyway.

This bot, which is installed as a Discord selfbot (using the Slack analogy), allows you to send a link to the emoji as an image/gif, in *most* places on Discord!

This is simple enough, surprised it doesn't exist yet. Probably does and I don't know about it yet.

In the future I might allow those Discord users to search through all the emojis somehow..

## Tech Stack
Deno & Discord.JS, maybe [discordeno](https://discordeno.js.org) if I run into the most niche issues known to man. Uses the [cachet](https://cachet.hackclub.com) endpoint to fetch emoji.

### Deployment
1. Clone the repository with `git clone https://github.com/HEofOttoman/slackemoji-2discord.git`
2. Make a `.env` file and put your Discord token in a variable named `DISCORD_TOKEN`. 
3. Run `deno install`
4. Then, run:
```deno run --allow-read --allow-env --allow-net bot.ts```

Or run the Dockerfile which should work

### Usage
Due to Discord TOS prohibiting the use of a user token to send messages *as* a user, this bot is not a true selfbot akin to Slack, but uses a simple quick workaround.

1. Run command the `/slack-emoji` with the name on it. You also have the option of sending it to channel (which can be deleted).
2. Copy the link that shows up for the requested emoji and send it on your own!

>Made by me with DiscordJS docs (ft. Google) with more difficulty than it should ![why](https://emoji.slack-edge.com/T09V59WQY1E/pf/d2b4e41a039d2ec2.png)