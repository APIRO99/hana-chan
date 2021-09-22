export const useDeployCommand:any = (client:any, authorOwner:boolean) => {
  client.on('interactionCreate', async (interaction:any) => {
    if (!interaction.isCommand()) return;
    
    if (!authorOwner) {
      interaction.reply(`Only ${process.env['APIRO']} can update the command list`)
      return;
    }
	  
    if (interaction.commandName === 'deploy' && authorOwner) {
	  	await interaction.guild.commands.set([
        {
          name: "deploy",
          description: "deploys a new list of commands"
	  		},
        {
          name: 'play',
          description: 'Plays a song',
          options: [
            {
              name: 'song',
              type: 'STRING' as const,
              description: 'The URL of the song to play',
              required: true,
            },
          ],
        },
	  		{
	  			name: 'skip',
	  			description: 'Skip to the next song in the queue',
	  		},
	  		{
	  			name: 'queue',
	  			description: 'See the music queue',
	  		},
	  		{
	  			name: 'pause',
	  			description: 'Pauses the song that is currently playing',
	  		},
	  		{
	  			name: 'resume',
	  			description: 'Resume playback of the current song',
	  		},
	  		{
	  			name: 'leave',
	  			description: 'Leave the voice channel',
	  		},
	  	]);

	  	await interaction.reply('Deployed!');
	  }
  });
}