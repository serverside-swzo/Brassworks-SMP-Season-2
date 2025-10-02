// This script has been updated for 1.21.1 NeoForge.
// The error log confirms that the block builder does not have a `.shape()` or `.voxelShape()` method.
// This function has been removed to allow the script to load without errors.
// As a result, the Sniffer Carpet will temporarily render as a full block.

StartupEvents.registry('block', event => {
  // Sniffer Carpet (like vanilla carpet)
  event.create('brassworks:sniffer_carpet')
    .soundType('wool')  
    .hardness(0.1)
    .resistance(0.1)
    .renderType('translucent')
    .requiresTool(false)
    .tagBlock('minecraft:mineable/shears')
    .mapColor('color_green')
    .displayName('Sniffer Carpet');
    // REMOVED: The .voxelShape() or .shape() method was causing a "function not found" error.
    // The API for setting a custom block shape may have changed or been removed in this version.

  // Sniffer Wool (like vanilla wool block)
  event.create('brassworks:sniffer_wool')
    .soundType('wool')  
    .hardness(0.8)
    .resistance(0.8)
    .renderType('translucent')
    .requiresTool(false)
    .tagBlock('minecraft:mineable/shears')
    .mapColor('color_green')
    .displayName('Sniffer Wool');

});

StartupEvents.registry('item', event => {
  // Sniffer Fur Tuft (No changes needed here)
  event.create('brassworks:sniffer_fur')
    .displayName('Sniffer Fur')
    .texture('brassworks:item/sniffer_fur');
});

