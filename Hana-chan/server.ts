import { Client } from 'discord.js'
import * as dotenv from "dotenv";

import useMessages from './modules/messages.js'
import useCommands from './modules/commands/useCommands.js'

dotenv.config()
const client:Client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", 'GUILD_VOICE_STATES'] });

client.on('ready', () => console.log('Bot is ready'));

useMessages(client);
useCommands(client);

client.login(process.env.BOT_TOKEN)
client.on('error', console.warn);