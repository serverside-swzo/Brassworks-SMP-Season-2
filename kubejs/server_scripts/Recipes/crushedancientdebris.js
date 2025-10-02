ServerEvents.recipes(event => {
  addCreateRecipeHandler(event);

  // Crushing recipe
  event.recipes.create.crushing(
    [
      Item.of('brassworks:crushed_ancient_debris'),
      withChance('brassworks:crushed_ancient_debris', 0.1),
      Item.of('create_enchantment_industry:super_experience_nugget', 2),
      withChance('create_enchantment_industry:super_experience_nugget', 0.5)
    ],
    'minecraft:ancient_debris'
  ).id('brassworks:crushing/ancient_debris');

  // Smelting recipe
  event.smelting(
    'minecraft:netherite_scrap',
    'brassworks:crushed_ancient_debris'
  ).id('brassworks:smelting/crushed_ancient_debris');

  // Finalize all pending Create recipes
  event.recipes.create.finalize();
});
