ServerEvents.compostableRecipes(function(event) {
  var compostables = [
    ['quark:moss_paste', 1.0],
    ['minecraft:bamboo', 0.65],
    ['createfood:boiled_egg', 0.6],
    ['createfood:boiled_egg_peeled', 0.4],
    ['createfood:eggshell', 0.2]
  ];

  compostables.forEach(function(entry) {
    event.add(entry[0], entry[1]);
  });
  
});
