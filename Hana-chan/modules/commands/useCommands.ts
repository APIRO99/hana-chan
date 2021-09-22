import { useDeployCommand } from './deployCommand';
import { useMusicCommand }  from './musicCommand'

export const useCommands:any = (client:any) => {
  client.on('interactionCreate', async (interaction:any) => {
    if (!interaction.isCommand()) return;
    if (!client.application?.owner) await client.application?.fetch();
    const authorOwner:boolean = interaction.member.id === client.application?.owner?.id;
    useMusicCommand(client);
    useDeployCommand(client, authorOwner);
  });
}