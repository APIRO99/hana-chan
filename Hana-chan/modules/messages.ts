import { Message, Client } from 'discord.js'
import { getWaifu } from '../services/Waifus.js';

export default function useMessages(client:Client) {
  client.on('messageCreate', async (message:Message) => {
  	if (!message.guild) return;
	  if (!client.application?.owner) await client.application?.fetch();
    const authorOwner:boolean = message.author.id === client.application?.owner?.id;

    if (message.content.toUpperCase() === 'HELLO') message.reply('Hi');
    
    if (message.content.toUpperCase() === 'SEND ME A NEW WAIFU') {
      console.log(``);
      
      const { url } = await getWaifu();
      message.reply(`Bro? 🧐📷\n${url}`);
    }

  })
} 