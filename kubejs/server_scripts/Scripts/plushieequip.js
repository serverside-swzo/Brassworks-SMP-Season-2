ItemEvents.rightClicked(event => {
  const { item, player, hand, server } = event;

  // Define a list of items that can trigger this script
  const equippablePlushies = [
    'brassworkscore:sniffer_plushie',
    'brassworkscore:blue_axolotl_plushie',
    'brassworkscore:pink_axolotl_plushie',
    'brassworkscore:glow_squid_plushie',
    'brassworkscore:steven_uk_plushie',
    'brassworkscore:slabfish_plushie',
      'brassworkscore:fox_plushie',
      'brassworkscore:christmas_hat',
      'brassworkscore:slime_plushie',
      'brassworkscore:sniffer_plushie_christmas'
  ];

  // Early exit if the conditions are not met
  if (hand !== 'main_hand' || !item || !equippablePlushies.includes(item.id)) {
    return;
  }

  // Execute coshat command using execute as with server permissions
  server.scheduleInTicks(1, () => {
    try {
      // Use execute as to run the command as the player but with server permissions
      server.runCommandSilent(`execute as ${player.name.string} run coshat`);
      server.runCommandSilent(`execute at ${player.name.string} run playsound minecraft:item.armor.equip_leather player @a ~ ~ ~ 1 1`)
    } catch (e) {
      player.tell(Text.of("Couldn't equip the plushie!").color('red'));
      console.error("Error equipping plushie: " + e);
    }
  });

  // Cancel the event to prevent normal item use
  event.cancel();
});
