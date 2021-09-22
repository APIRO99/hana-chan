import { Client } from 'discord.js'
import dotnev from 'dotenv'

import { useMessages } from './modules/messages'
import { useCommands } from './modules/commands/useCommands'

dotnev.config()
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", 'GUILD_VOICE_STATES'] });

client.on('ready', () => console.log('Bot is ready'));

useMessages(client);
useCommands(client);
client.login(process.env.BOT_TOKEN)
client.on('error', console.warn);