ServerEvents.recipes(event => {
  event.recipes.create.crushing(
    [
      Item.of('brassworks:crushed_ancient_debris'),
      CreateItem.of('brassworks:crushed_ancient_debris', 0.1),
      Item.of('create_enchantment_industry:super_experience_nugget', 2),
      CreateItem.of('create_enchantment_industry:super_experience_nugget', 0.5)
    ],
    'minecraft:ancient_debris'
  ).id('brassworks:crushing/ancient_debris');

  // Smelting recipe
  event.smelting(
    'minecraft:netherite_scrap',
    'brassworks:crushed_ancient_debris'
  ).id('brassworks:smelting/crushed_ancient_debris');
});