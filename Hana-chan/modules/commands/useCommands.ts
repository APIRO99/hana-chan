import { Client, Interaction } from 'discord.js'
import { useDeployCommand } from './deployCommand.js';
import { useMusicCommand }  from './musicCommand.js'

export default function useCommands(client:Client) {
  client.on('interactionCreate', async (interaction:Interaction) => {
    if (!interaction.isCommand()) return;
    if (!client.application?.owner) await client.application?.fetch();
    const authorOwner:boolean = interaction.member.user.id === client.application?.owner?.id;
    useMusicCommand(client);
    useDeployCommand(client, authorOwner);
  });
}