PlayerEvents.loggedIn(event => {
    const { player, server } = event;
    server.runCommandSilent(`recipe give ${player.name.string} *`);
    console.info(`Gave all recipes to ${player.name.string}`);
});