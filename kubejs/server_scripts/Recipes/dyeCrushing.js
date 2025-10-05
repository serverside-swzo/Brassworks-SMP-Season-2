ServerEvents.recipes(event => {
  addCreateRecipeHandler(event);

  const flowerToDye = [
    ["natures_spirit:marigold", "minecraft:orange_dye", 4],
    ["natures_spirit:bluebell", "minecraft:blue_dye", 4],
    ["natures_spirit:tiger_lily", "minecraft:orange_dye", 4],
    ["natures_spirit:purple_wildflower", "minecraft:purple_dye", 4],
    ["natures_spirit:yellow_wildflower", "minecraft:yellow_dye", 4],
    ["natures_spirit:red_heather", "minecraft:red_dye", 4],
    ["natures_spirit:white_heather", "minecraft:white_dye", 4],
    ["natures_spirit:purple_heather", "minecraft:purple_dye", 4],
    ["natures_spirit:anemone", "minecraft:magenta_dye", 2],
    ["natures_spirit:dwarf_blossum", "minecraft:pink_dye", 2],
    ["natures_spirit:hibiscus", "minecraft:red_dye", 2],
    ["natures_spirit:blue_iris", "minecraft:light_blue_dye", 2],
    ["natures_spirit:black_iris", "minecraft:black_dye", 2],
    ["natures_spirit:ruby_blossoms", "minecraft:red_dye", 4],
    ["natures_spirit:cattail", "minecraft:brown_dye", 4],
    ["natures_spirit:lavender", "minecraft:purple_dye", 8],
    ["natures_spirit:purple_bleeding_heart", "minecraft:pink_dye", 8],
    ["natures_spirit:blue_bulbs", "minecraft:blue_dye", 8],
    ["natures_spirit:carnation", "minecraft:red_dye", 8],
    ["natures_spirit:gardenia", "minecraft:white_dye", 4],
    ["natures_spirit:snapdragon", "minecraft:pink_dye", 4],
    ["natures_spirit:foxglove", "minecraft:purple_dye", 4],
    ["natures_spirit:begonia", "minecraft:orange_dye", 4],
    ["natures_spirit:ornate_succulent", "minecraft:red_dye", 2],
    ["natures_spirit:drowsy_succulent", "minecraft:lime_dye", 2],
    ["natures_spirit:aureate_succulent", "minecraft:yellow_dye", 2],
    ["natures_spirit:sage_succulent", "minecraft:green_dye", 2],
    ["natures_spirit:foamy_succulent", "minecraft:light_blue_dye", 2],
    ["natures_spirit:imperial_succulent", "minecraft:purple_dye", 2],
    ["natures_spirit:regal_succulent", "minecraft:pink_dye", 2],
    ["natures_spirit:helvola_flower", "minecraft:white_dye", 2],
    ["natures_spirit:lotus_flower", "minecraft:pink_dye", 2],
  ];

  flowerToDye.forEach(([flower, dye, amount]) => {
    const bonus = Math.max(1, Math.ceil(amount * 0.25));

    event.recipes.create.crushing(
      [
        Item.of(dye, amount),
        withChance(Item.of(dye, bonus), 0.33),
      ],
      flower
    ).id(`brassworks:crushing/${flower.replace(':', '_')}`);
  });

  event.recipes.create.finalize();
});
