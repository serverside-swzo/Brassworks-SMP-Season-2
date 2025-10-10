PlayerEvents.loggedIn(event => {
    const { player, server } = event;
    server.runCommandSilent(`recipe give ${player.name.string} *`);
    server.runCommandSilent(`curios set belt ${player.name.string} 4`);
    console.info(`Gave all recipes to ${player.name.string}`);
});