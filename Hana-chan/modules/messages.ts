import { getWaifu } from '../services/Waifus';

export const useMessages = (client:any) => {
  client.on('messageCreate', async (message:any) => {
  	if (!message.guild) return;
	  if (!client.application?.owner) await client.application?.fetch();
    const authorOwner:boolean = message.author.id === client.application?.owner?.id;

    if (message.content.toUpperCase() === 'HELLO') message.reply('Hi');
    
    if (message.content.toUpperCase() === 'SEND ME A NEW WAIFU') {
      const { url } = await getWaifu();
      message.reply(`Bro? 🧐📷\n${url}`);
    }

    if (message.content.toUpperCase() === 'WHO IS YOUR MASTER?') {
      if (authorOwner)
        message.reply(`You are my master, ${process.env['APIRO']}`);
      else
        message.reply(`My master is ${process.env['APIRO']} so you must respect him`);
    }
  })
} 