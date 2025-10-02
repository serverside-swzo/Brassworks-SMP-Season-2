// This script has been updated for the 1.21.1 NeoForge KubeJS API.
// The error log confirms `.hunger()` and `.saturationModifier()` are not valid functions.
// The methods have been changed to `.nutrition()` and `.saturation()` to match the correct API.

StartupEvents.registry('item', event => {
  const rolls = [
    ['honey_roll', 'Honey Roll'],
    ['xp_roll', 'Experience Roll'],
    ['hyper_xp_roll', 'Hyper Experience Roll'],
    ['choco_roll', 'Chocolate Roll'],
    ['lumisene_roll', 'Lumisene Roll', 'minecraft:glowing', 200, 0, 1]
  ];

  rolls.forEach(function(r) { // Using standard function for compatibility
    event.create('brassworks:' + r[0])
      .food(function(food) { // Using standard function
        food
          .nutrition(8) // This is the correct method name instead of .hunger()
          .saturation(0.35); // CHANGED: This is the correct method name instead of .saturationModifier()
        
        if (r.length > 2) {
          food.effect(r[2], r[3], r[4], r[5]);
        }
      })
      .texture('brassworks:item/rolls/' + r[0])
      .displayName(r[1]);
  });
});

