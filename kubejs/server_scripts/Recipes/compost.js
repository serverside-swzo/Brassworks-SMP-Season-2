ServerEvents.compostableRecipes(function(event) {
  var compostables = [
    ['minecraft:bamboo', 0.65],
  ];

  compostables.forEach(function(entry) {
    event.add(entry[0], entry[1]);
  });
});