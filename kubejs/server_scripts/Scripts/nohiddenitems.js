PlayerEvents.inventoryChanged(event => {
    const { item, player, server } = event;
    if (!item || item.isEmpty() || item.id === 'minecraft:air') return;

    const isOp = player.hasPermissions(4);
    const hasBypass = player.hasPermission && player.hasPermission("kubejs.hidden.bypass");

    if (isOp || hasBypass) return;

    if (item.hasTag("forge:hidden")) {
        server.runCommandSilent(`clear ${player.name.string} ${item.id}`);
        player.inventoryMenu.broadcastFullState();
        player.tell(Text.red(`That item (${item.id}) is not allowed and has been removed.`));
    }
});