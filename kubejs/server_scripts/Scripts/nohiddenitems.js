PlayerEvents.inventoryChanged(event => {
    const { item, player, server } = event;
    if (!item || item.isEmpty() || item.id === 'minecraft:air') return;
    if (item.hasTag("forge:hidden") && item.id !== 'minecraft:air') {
        server.runCommandSilent(`clear ${player.name.string} ${item.id}`);
        player.inventoryMenu.broadcastFullState()
        player.tell(Text.red(`That item (${item.id}) is not allowed and has been removed.`));
    }
});
