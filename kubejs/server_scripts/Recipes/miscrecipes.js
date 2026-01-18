ServerEvents.recipes(event => {
  event.remove({ mod: 'createaddition' });
  event.remove({ type: 'clayworks:baking' });

  // Remove by outputs
  let outputsToRemove = [
    'numismatics:bank_terminal',
    'supplementaries:cannon',
    'buzzier_bees:honey_apple',
    'createqol:inventory_linker',
    'createqol:player_paper',
    'create_connected:item_silo',
    'farmersdelight:wheat_dough',
    'create_bic_bit:raw_fries',
    'pipeorgans:brass_reed',
    'minecraft:sunflower'
  ];

  outputsToRemove.forEach(o => event.remove({ output: o }));

  let logsTags = Ingredient.all.getItemIds().toArray().filter(id => Item.of(id).hasTag("minecraft:logs"))
  let leavesTags = Ingredient.all.getItemIds().toArray().filter(id => Item.of(id).hasTag("minecraft:leaves"))
  let coalsTags = Ingredient.all.getItemIds().toArray().filter(id => Item.of(id).hasTag("minecraft:coals"))
  let pickaxesTags = Ingredient.all.getItemIds().toArray().filter(id => Item.of(id).hasTag("minecraft:pickaxes") || id === "brassworkscore:super_experience_pickaxe")

  // Barrel cutting
  event.recipes.create.cutting('minecraft:barrel', [logsTags]);

  // Ochrum Filling (fluid + item as per 1.21.1 docs)
  event.recipes.create.filling(
    Item.of('create:ochrum', 1),
    [
      Fluid.of('create:honey', 5),
      'create:limestone'
    ]
  );

  // Sunflowers
  event.shapeless(
    'minecraft:sunflower',
    'adorablehamsterpets:sunflower_block'
  );
  event.shapeless(
    'adorablehamsterpets:sunflower_block',
    'minecraft:sunflower'
  );
  event.recipes.create.mixing(
    ['adorablehamsterpets:sunflower_seeds', CreateItem.of('adorablehamsterpets:sunflower_seeds', 0.1)],
    'adorablehamsterpets:sunflower_block'
  );

  event.recipes.create.cutting(Item.of('pipeorgans:brass_reed', 9), 'create:brass_sheet')

  // Bank Terminal (new recipe)
  event.shapeless(
    'numismatics:bank_terminal',
    [
      'numismatics:spur',
      'create:industrial_iron_block',
      'create:electron_tube'
    ]
  );

  // Gunpowder Mixing
  event.recipes.create.mixing(
    Item.of('minecraft:gunpowder', 2),
    [
      'minecraft:bone_meal',
      'create:cinder_flour',
      'create:cinder_flour',
      [coalsTags]
    ]
  );

  event.shaped('2x enderscape:stasis_armor_trim_smithing_template', [
    'DRD',
    'DLD',
    'DSD'
  ], {
      S: 'natures_spirit:purple_chalk',
      L: 'natures_spirit:red_chalk',
      R: 'enderscape:stasis_armor_trim_smithing_template',
      D: 'minecraft:diamond'
  });

  // Raw Fries
  event.recipes.create.mixing(
    'create_bic_bit:raw_fries',
    'minecraft:potato'
  )

  // Ink Sac Compacting
  event.recipes.create.compacting(
    Item.of('minecraft:ink_sac', 2),
    [
      Fluid.of('minecraft:water', 500),
      'minecraft:dried_kelp',
      [coalsTags]
    ]
  );

  // Dough block
  event.recipes.create.compacting(
    Item.of('create_compressed:dough_block', 1),
    [
      Fluid.of('minecraft:water', 1000),
      'create_compressed:wheat_flour_pile'
    ]
  );

  // Chalk Powder
  event.recipes.create.compacting(
    Item.of('natures_spirit:chalk_powder', 1),
    [
      Fluid.of('minecraft:water', 100),
      'create_aquatic_ambitions:calcium_rich_powder'
    ]
  ).heated();

  // Chert
  event.recipes.create.compacting(
    Item.of('natures_spirit:chert', 1),
    [
      Item.of('minecraft:flint', 16),
      'minecraft:quartz'
    ]
  )

  // Gilded Blackstone (heated)
  event.recipes.create.mixing(
    Item.of('minecraft:gilded_blackstone'),
    [
      'minecraft:blackstone',
      Item.of('minecraft:gold_nugget', 16   )
    ]
  ).heated();

  // Honey to Sugar Recipe
  event.recipes.create.mixing(
    Item.of('minecraft:sugar', 3),
    [
      Fluid.of('create:honey', 250),
    ]
  ).heated();

  // Chest (shapeless)
  event.shapeless(
    'minecraft:chest',
    '#c:chests/wooden'
  );

  // Tall Grass
  event.shapeless(
    'minecraft:tall_grass',
    [
      'minecraft:short_grass',
      'minecraft:short_grass'
    ]
  );

  // Chest from custom planks
  event.shaped('minecraft:chest', [
    'PPP',
    'P P',
    'PPP'
  ], {
    P: '#kubejs:all_custom_planks'
  });

  // Large Fern
  event.shapeless(
    'minecraft:large_fern',
    [
      'minecraft:fern',
      'minecraft:fern'
    ]
  );

  // Small Dripleaf (compacting)
  event.recipes.create.compacting(
    'minecraft:small_dripleaf',
    [
      'minecraft:clay_ball',
      [leavesTags],
      Fluid.of('minecraft:water', 100)
    ]
  );

  // Big Dripleaf
  event.recipes.create.compacting(
    'minecraft:big_dripleaf',
    [
      'minecraft:small_dripleaf',
      [leavesTags],
      'minecraft:bone_meal',
      Fluid.of('minecraft:water', 250)
    ]
  );

  // Ash (heated)
  event.recipes.create.mixing(
    Item.of('supplementaries:ash', 4),
    ['#minecraft:logs_that_burn']
  ).heated();

  // Asurine
  event.recipes.create.mixing(
    'create:asurine',
    [
      'minecraft:andesite',
      'minecraft:lapis_lazuli',
      'minecraft:quartz'
    ]
  ).heated();

  // Soap
  event.recipes.create.compacting(
    Item.of('supplementaries:soap', 6),
    [
      'minecraft:porkchop',
      Item.of('supplementaries:ash', 4),
      Fluid.of('minecraft:water', 1000)
    ]
  ).id('kubejs:porkchop_ash_to_soap');

  // Dripstone Crushing (CreateItem chance output, 1.21.1 style)
  event.recipes.create.crushing([
    Item.of('minecraft:pointed_dripstone', 2),
    CreateItem.of('minecraft:pointed_dripstone', 0.5)
  ], 'minecraft:dripstone_block');

  // Dripstone Mixing
  event.recipes.create.mixing(
    'minecraft:pointed_dripstone',
    [
      'minecraft:clay_ball',
      'create:limestone',
      Fluid.of('minecraft:water', 50)
    ]
  );

  // Lily Pad
  event.recipes.create.mixing(
    Item.of('minecraft:lily_pad', 2),
    [
      [leavesTags],
      'minecraft:moss_block',
      Fluid.of('minecraft:water', 250)
    ]
  );

  // Vines
  event.recipes.create.mixing(
    Item.of('minecraft:vine', 2),
    [
      'minecraft:moss_block',
      [leavesTags],
      Fluid.of('minecraft:water', 100)
    ]
  );

  // Seagrass
  event.recipes.create.mixing(
    Item.of('minecraft:seagrass', 2),
    [
      'minecraft:grass_block',
      'minecraft:kelp',
      Fluid.of('minecraft:water', 300)
    ]
  );

  // Rooted Dirt
  event.recipes.create.compacting(
    'minecraft:rooted_dirt',
    [
      'minecraft:dirt',
      'minecraft:grass_block',
      'minecraft:bone_meal'
    ]
  );

  // Glow Lichen
  event.recipes.create.mixing(
    Item.of('minecraft:glow_lichen', 2),
    [
      'minecraft:vine',
      'minecraft:glow_ink_sac',
      Fluid.of('minecraft:water', 100)
    ]
  );

  // Sniffer Wool
  event.shaped('brassworks:sniffer_wool', [
    'RR',
    'RR'
  ], { R: 'brassworks:sniffer_fur' });

  // Sniffer Wool → Fur (CreateItem chance output)
  event.recipes.create.crushing([
    Item.of('brassworks:sniffer_fur', 3),
    CreateItem.of('brassworks:sniffer_fur', 0.25)
  ], 'brassworks:sniffer_wool');

  // Glazed Porkchop (fluid + item)
  event.recipes.create.filling('buzzier_bees:glazed_porkchop', [
    Fluid.of('create:honey', 250),
    'minecraft:cooked_porkchop'
  ]);

  // Honey Cookie
  event.recipes.create.filling(
    Item.of('farmersdelight:honey_cookie', 4),
    [
      Fluid.of('create:honey', 250),
      'minecraft:wheat'
    ]
  );

  // Honey Glazed Ham Block
  event.recipes.create.mixing('farmersdelight:honey_glazed_ham_block', [
    'minecraft:bowl',
    'farmersdelight:cooked_rice',
    'farmersdelight:cooked_rice',
    'minecraft:sweet_berries',
    'minecraft:sweet_berries',
    'minecraft:sweet_berries',
    'minecraft:sweet_berries',
    'farmersdelight:smoked_ham',
    Fluid.of('create:honey', 250)
  ]);

  // Honey Lamp
  event.recipes.create.mixing('buzzier_bees:honey_lamp', [
    'minecraft:end_rod',
    'minecraft:gold_nugget',
    Fluid.of('create:honey', 250)
  ]);

  // Candy
  event.recipes.create.mixing('8x supplementaries:candy', [
    'minecraft:sugar',
    'minecraft:paper',
    Fluid.of('create:honey', 250)
  ]);

  // Sniffer Carpet
  event.shaped('3x brassworks:sniffer_carpet', [
    'RR'
  ], { R: 'brassworks:sniffer_wool' });

  // Smelt Bank Terminal → Spur
  event.smelting(
    'numismatics:spur',
    'numismatics:bank_terminal'
  )
  .xp(0.1)
  .id('kubejs:smelting/bank_terminal_to_spur');

  // Whitened Pulp
  event.recipes.create.mixing(
    Item.of('brassworks:whitened_pulp', 3),
    [
      Item.of('create:pulp', 1),
      Item.of('minecraft:bone_meal', 3)
    ]
  ).id('kubejs:whitened_pulp');

  // Whitened Pulp → Paper
  event.recipes.create.pressing(
    'minecraft:paper',
    'brassworks:whitened_pulp'
  ).id('kubejs:whitened_pulp_to_paper');

  // Brown cardboard → Leather
  event.recipes.create.pressing(
    'minecraft:leather',
    'createframed:brown_cardboard_block'
  ).id('kubejs:brown_cardboard_block_to_leather');

  // Blaze Rod from Prismarine Alloy Rod
  event.recipes.create.filling(
    'minecraft:blaze_rod',
    [
      Fluid.of('minecraft:lava', 1000),
      'create_aquatic_ambitions:prismarine_alloy_rod'
    ]
  );

  // Direct Chute
  event.recipes.create.filling(
    'direct_chute:direct_chute',
    [
      Fluid.of('minecraft:lava', 250),
      'create:chute'
    ]
  );

  // Bundle Recipe
  event.shaped('minecraft:bundle', [
    'SLS',
    'L L',
    'LLL'
  ], { S: 'minecraft:string', L: 'minecraft:leather' })
  .id('kubejs:bundle_leather_string');

  // Honey Bread
  event.recipes.create.mixing(
    'buzzier_bees:honey_bread',
    [
      'minecraft:bread',
      Fluid.of('create:honey', 250)
    ]
  );

  // Honey Roll
  event.recipes.create.filling(
    'brassworks:honey_roll',
    [
      Fluid.of('create:honey', 250),
      'minecraft:bread'
    ]
  );

  // Infested Cobblestone
  event.recipes.create.deploying(
	  'minecraft:infested_cobblestone',
	  [
		  'minecraft:infested_stone',
		  pickaxesTags
	  ]
  ).keepHeldItem()

  // Chocolate Roll
  event.recipes.create.filling(
    'brassworks:choco_roll',
    [
      Fluid.of('create:chocolate', 250),
      'minecraft:bread'
    ]
  );

  // Pink Sand Washing
  event.recipes.create.splashing(
    [CreateItem.of('minecraft:clay_ball', 0.15), CreateItem.of('minecraft:pink_dye', 0.03)],
    'natures_spirit:pink_sand'
  );

  // XP Roll  
  event.recipes.create.filling(
    'brassworks:xp_roll',
    [
      Fluid.of('create_enchantment_industry:experience', 4),
      'minecraft:bread'
    ]
  );

  // Hyper XP Roll
  event.recipes.create.mixing(
    'brassworks:hyper_xp_roll',
    [
      Item.of('create_enchantment_industry:super_experience_nugget', 3),
      'brassworks:xp_roll'
    ]
  );

  // Lumisene mixing (fluid output as array)
  event.recipes.create.mixing(
    [Fluid.of('supplementaries:lumisene', 500)],
    ['4x minecraft:glow_berries']
  ).id('kubejs:lumisene_mixing');

  // Empty Lumisene Bucket (fluid first)
  event.recipes.create.emptying(
    [
      Fluid.of('supplementaries:lumisene', 1000),
      Item.of('minecraft:bucket')
    ],
    'supplementaries:lumisene_bucket'
  ).id('kubejs:lumisene_bucket_emptying');

  // Empty Lumisene Bottle (fluid first)
  event.recipes.create.emptying(
    [
      Fluid.of('supplementaries:lumisene', 250),
      Item.of('minecraft:glass_bottle')
    ],
    'supplementaries:lumisene_bottle'
  ).id('kubejs:lumisene_bottle_emptying');

  // Fill Lumisene Bottle
  event.recipes.create.filling(
    'supplementaries:lumisene_bottle',
    [
      Fluid.of('supplementaries:lumisene', 250),
      'minecraft:glass_bottle'
    ]
  ).id('kubejs:lumisene_bottle_filling');

  // Lumisene Roll
  event.recipes.create.filling(
    'brassworks:lumisene_roll',
    [
      Fluid.of('supplementaries:lumisene', 250),
      'minecraft:bread'
    ]
  ).id('kubejs:lumisene_roll_filling');

  // Remove hidden-tagged recipes
  // event.remove({ input: '#forge:hidden' });
  event.remove({ output: '#forge:hidden' });
});


// =========================================================
// ============= TAG DEFINITIONS ===========================
// =========================================================

ServerEvents.tags('item', event => {
  event.add('forge:hidden', [
    'create_sa:grapplin_whisk',
    'clayworks:kiln',
    'create_connected:item_silo',
    'createaddition:digital_adapter',
    'createaddition:cake_base',
    'supplementaries:cannon',
    'createaddition:cake_base_baked',
    'buzzier_bees:honey_apple',
    'createadvlogistics:redstone_radio',
    'createqol:player_paper',
    'createqol:inventory_linker',
    'immersive_aircraft:bomb_bay',
    'immersive_aircraft:heavy_crossbow',
    'immersive_aircraft:warship',
    'brassworks:shop_1',
    'brassworks:shop_2',
    'brassworks:shop_3',
    'brassworks:shop_4',
    'createqol:shadow_radiance_hoe',
    'createqol:shadow_radiance_shovel',
    'createqol:shadow_radiance_axe',
    'createqol:shadow_radiance_pickaxe',
    'createqol:shadow_radiance_sword',
    'createqol:refined_radiance_hoe',
    'createqol:shadow_steel_chestplate',
    'createqol:shadow_steel_leggings',
    'createqol:shadow_steel_boot',
    'createqol:shadow_steel_sword',
    'createqol:refined_radiance_sword',
    'createqol:shadow_steel_pickaxe',
    'createqol:refined_radiance_pickaxe',
    'createqol:shadow_steel_axe',
    'createqol:refined_radiance_axe',
    'createqol:refined_radiance_shovel',
    'createqol:shadow_steel_hoe',
    'createqol:shadow_steel_shovel',
    'createqol:shadow_steel_helmet',
    'createqol:refined_radiance_boots',
    'createqol:refined_radiance_leggings',
    'createqol:refined_radiance_chestplate',
    'createqol:refined_radiance_helmet',
    'createqol:shadow_radiance_chestplate',
    'createqol:shadow_radiance_block',
    'createqol:shadow_radiance_casing',
    'createqol:ender_packager',
    'createqol:empty_stock_manager',
    'createqol:stock_manager',
    'createqol:shadow_radiance',
    'createqol:shadow_radiance_helmet',
    'createqol:shadow_radiance_chestplate',
    'createqol:shadow_radiance_leggings',
    'createqol:shadow_radiance_boots',
    'createqol:refined_radiance_chestplate',
    'createqol:shadow_steel_chestplate',
    'sophisticatedbackpacks:stack_upgrade_omega_tier',
    'sophisticatedbackpacks:everlasting_upgrade',
    'sophisticatedbackpacks:infinity_upgrade',
    'sophisticatedbackpacks:survival_infinity_upgrade',
    'sophisticatedbackpacks:inception_upgrade',
    'destroy:badge/patreon_3',
    'destroy:badge/patreon_2',
    'destroy:badge/patreon_1',
    'petrolpark:badge/translator',
    'petrolpark:badge/suggestion',
    'petrolpark:badge/nitro',
    'petrolpark:badge/developer',
    'petrolpark:badge/content_creator',
    'petrolpark:badge/competition_winner',
    'petrolpark:badge/bestie',
    'petrolpark:badge/beta_tester',
    'petrolpark:badge/early_bird',
    'immersive_aircraft:rotary_cannon',
    'createtea:experienced_tea',
    'enderscape:mirror'
  ]);

  // Custom plank tag
  event.add('kubejs:all_custom_planks', [
    'natures_spirit:redwood_planks',
    'natures_spirit:sugi_planks',
    'natures_spirit:wisteria_planks',
    'natures_spirit:fir_planks',
    'natures_spirit:willow_planks',
    'natures_spirit:aspen_planks',
    'natures_spirit:maple_planks',
    'natures_spirit:cypress_planks',
    'natures_spirit:olive_planks',
    'natures_spirit:joshua_planks',
    'natures_spirit:ghaf_planks',
    'natures_spirit:palo_verde_planks',
    'natures_spirit:coconut_planks',
    'natures_spirit:cedar_planks',
    'natures_spirit:larch_planks',
    'natures_spirit:mahogany_planks',
    'natures_spirit:saxaul_planks',
    'enderscape:veiled_planks',
    'enderscape:celestial_planks',
    'enderscape:murublight_planks',
    'ribbits:mossy_oak_planks'
  ]);

  // Radon Lamps
  event.add('kubejs:alexcavesradon', [
    'createframed:framed_radon_lamp_red',
    'createframed:framed_radon_lamp_orange',
    'createframed:framed_radon_lamp_yellow',
    'createframed:framed_radon_lamp_green',
    'createframed:framed_radon_lamp_lime',
    'createframed:framed_radon_lamp_blue',
    'createframed:framed_radon_lamp_light_blue',
    'createframed:framed_radon_lamp_cyan',
    'createframed:framed_radon_lamp_purple',
    'createframed:framed_radon_lamp_magenta',
    'createframed:framed_radon_lamp_pink',
    'createframed:framed_radon_lamp_black',
    'createframed:framed_radon_lamp_gray',
    'createframed:framed_radon_lamp_light_gray',
    'createframed:framed_radon_lamp_white',
    'createframed:framed_radon_lamp_brown'
  ]);

  // Cinnabon rolls tag
  event.add('brassworks:cinnabon_rolls', [
    'create:sweet_roll',
    'brassworks:honey_roll',
    'brassworks:choco_roll',
    'brassworks:xp_roll',
    'brassworks:hyper_xp_roll',
    'brassworks:lumisene_roll'
  ]);

  // Copycats (Create Connected)
  event.add('kubejs:createconnctedcopycats', [
    'create_connected:copycat_block',
    'create_connected:copycat_slab',
    'create_connected:copycat_beam',
    'create_connected:copycat_vertical_step',
    'create_connected:copycat_stairs',
    'create_connected:copycat_fence',
    'create_connected:copycat_fence_gate',
    'create_connected:copycat_wall',
    'create_connected:copycat_board',
    'create_connected:copycat_box',
    'create_connected:copycat_catwalk'
  ]);

  // Dirt types
  event.add('kubejs:dirt', [
    'minecraft:dirt',
    'minecraft:coarse_dirt',
    'minecraft:rooted_dirt'
  ]);

  // Hyper XP Tools
  event.add('brassworks:hyper_experience_tools', [
    'brassworkscore:hyper_experience_sword',
    'brassworkscore:hyper_experience_pickaxe',
    'brassworkscore:hyper_experience_axe',
    'brassworkscore:hyper_experience_shovel'
  ]);

  // Copycats (Copycats mod)
  event.add('kubejs:copycats', [
    'copycats:copycat_block',
    'copycats:copycat_slab',
    'copycats:copycat_stairs',
    'copycats:copycat_vertical_stairs',
    'copycats:copycat_fence',
    'copycats:copycat_wall',
    'copycats:copycat_vertical_step',
    'copycats:copycat_beam',
    'copycats:copycat_slice',
    'copycats:copycat_vertical_slice',
    'copycats:copycat_corner_slice',
    'copycats:copycat_ghost_block',
    'copycats:copycat_layer',
    'copycats:copycat_half_panel',
    'copycats:copycat_pane',
    'copycats:copycat_flat_pane',
    'copycats:copycat_byte',
    'copycats:copycat_byte_panel',
    'copycats:copycat_board',
    'copycats:copycat_catwalk',
    'copycats:copycat_box',
    'copycats:copycat_half_layer',
    'copycats:copycat_vertical_half_layer',
    'copycats:copycat_stacked_half_layer',
    'copycats:copycat_stone_button',
    'copycats:copycat_wooden_button',
    'copycats:copycat_fence_gate',
    'copycats:copycat_iron_trapdoor',
    'copycats:copycat_trapdoor',
    'copycats:copycat_folding_door',
    'copycats:copycat_sliding_door',
    'copycats:copycat_iron_door',
    'copycats:copycat_door',
    'copycats:copycat_slope_layer',
    'copycats:copycat_vertical_slope',
    'copycats:copycat_slope',
    'copycats:copycat_wooden_pressure_plate',
    'copycats:copycat_stone_pressure_plate',
    'copycats:copycat_light_weighted_pressure_plate',
    'copycats:copycat_heavy_weighted_pressure_plate',
    'copycats:copycat_ladder',
    'copycats:copycat_fluid_pipe',
    'copycats:copycat_shaft',
    'copycats:copycat_cogwheel',
    'copycats:copycat_large_cogwheel',
    'create:copycat_step',
    'create:copycat_panel'
  ]);

  // Decorative glass blocks
  event.add('kubejs:decorative_glass_blocks', [
    '#createframed:stained_framed_glass',
    '#createframed:stained_tiled_glass',
    '#createframed:vertical_stained_framed_glass',
    '#createframed:horizontal_stained_framed_glass',
    'create:tiled_glass',
    'create:framed_glass',
    'create:horizontal_framed_glass',
    'create:vertical_framed_glass'
  ]);

  event.add('brassworks:experience_heap_hyper', [
    'brassworks:hyper_experience_heap'
  ]);

  // Hide copycats/radon lamps/etc
  event.add('forge:hidden', '#kubejs:createconnctedcopycats');
  event.add('forge:hidden', '#kubejs:shadow_radiance');
  event.add('forge:hidden', '#kubejs:disabledjetpacks');

  // Packagers
  event.add('kubejs:packagers', [
    'create:packager',
    'create:repackager',
    'delivery_director:package_rewriter'
  ]);
});


// Block wrench pickup support
ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', [
    'minecraft:shulker_box',
    'minecraft:white_shulker_box',
    'minecraft:orange_shulker_box',
    'minecraft:magenta_shulker_box',
    'minecraft:light_blue_shulker_box',
    'minecraft:yellow_shulker_box',
    'minecraft:lime_shulker_box',
    'minecraft:pink_shulker_box',
    'minecraft:gray_shulker_box',
    'minecraft:light_gray_shulker_box',
    'minecraft:cyan_shulker_box',
    'minecraft:purple_shulker_box',
    'minecraft:blue_shulker_box',
    'minecraft:brown_shulker_box',
    'minecraft:green_shulker_box',
    'minecraft:red_shulker_box',
    'minecraft:black_shulker_box'
  ]);
});

// Pink Sand
ServerEvents.tags('item', event => {
    event.add('minecraft:sand', 'natures_spirit:pink_sand')
    event.add('forge:sand', 'natures_spirit:pink_sand')
})
ServerEvents.tags('block', event => {
    event.add('minecraft:sand', 'natures_spirit:pink_sand')
    event.add('forge:sand', 'natures_spirit:pink_sand')
})