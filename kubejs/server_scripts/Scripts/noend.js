ItemEvents.rightClicked(event => {
    const { item, player } = event;
    if (item?.id === 'minecraft:ender_eye') {
        player.tell('\u00A7cEnder Eyes and End Portals are disabled until the Dragon Fight event begins.');
        event.cancel();
    }
});

BlockEvents.rightClicked(event => {
    const { block, item, player } = event;
    if (block.id === 'minecraft:end_portal_frame' && item?.id === 'minecraft:ender_eye') {
        player.tell('\u00A7cEnder Eyes and End Portals are disabled until the Dragon Fight event begins.');
        event.cancel();
    }
});
