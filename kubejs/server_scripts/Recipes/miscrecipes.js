// KubeJS 1.21.1 migration: Ensure Fluid.of and Item.of are available
// Remove redeclaration to avoid TypeError

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', 'drill_drain:drill_drain')
  event.add('minecraft:mineable/pickaxe', 'drill_drain:drill_drain')
})

ServerEvents.recipes(event => {
  // Recipe Removals
  addCreateRecipeHandler(event);

  event.remove({ mod: 'createaddition' });
  event.remove({ type: 'clayworks:baking' })

  var outputsToRemove = [
  'numismatics:bank_terminal',
  'supplementaries:cannon',
  'buzzier_bees:honey_apple',
  'createqol:inventory_linker',
  'createqol:player_paper',
  'supplementaries:cog_block',
  'create_connected:item_silo',
  'farmersdelight:wheat_dough'
];

var recipesToRemove = [
  'minecraft:lead',
  'createfood:create/mixing/salt_from_mixing_water',
  'minecraft:shulker_box',
  'create_mechanical_chicken:compacting/compacting_seed_oil',
  'create:industrial_iron_block_from_iron_ingots_stonecutting',
  'minecraft:farmersdelight.dough'
];

outputsToRemove.forEach(function(output) {
  event.remove({ output: output });
});

recipesToRemove.forEach(function(id) {
  event.remove({ id: id });
});

   event.recipes.create.filling(
    Item.of('create:ochrum', 1),
    [
      'create:limestone',
      Fluid.of('create:honey', 5)
    ]
  )

  // New shapeless Bank Terminal recipe
  event.shapeless(
    'numismatics:bank_terminal',
    [
      'numismatics:spur',
      'create:industrial_iron_block',
      'create:electron_tube'
    ]
  )

event.recipes.create.mixing(
    Item.of('minecraft:gunpowder', 2),
    [
      'minecraft:bone_meal',
      'create:cinder_flour',
      'create:cinder_flour',
      '#minecraft:coals'
    ]
  )

  event.recipes.create.compacting(
    Item.of('minecraft:ink_sac', 2),
    [
      Fluid.of('minecraft:water', 500),
      'minecraft:dried_kelp',
      '#minecraft:coals'
    ]
  )

event.recipes.create.compacting(
    Item.of('create_compressed:dough_block', 1),
    [
      Fluid.of('minecraft:water', 1000),
      'create_compressed:wheat_flour_pile'
    ]
  )

  event.recipes.create.cutting('minecraft:barrel', '#minecraft:logs')


   event.recipes.create.mixing(
    Item.of('minecraft:gilded_blackstone'),
    [
      'minecraft:blackstone',
      Item.of('24x minecraft:gold_nugget')
    ]
  ).heated()

  event.shapeless(
    'minecraft:chest',
    '#c:chests/wooden'
  )

  // 2 Short Grass → Tall Grass
  event.shapeless(
    'minecraft:tall_grass',
    [
      Item.of('minecraft:short_grass', 2)
    ]
  )

    event.shaped('minecraft:chest', [
        'PPP',
        'P P',
        'PPP'
      ], {
        P: '#kubejs:all_custom_planks'
  });

  // Large Fern Recipe (2 ferns)
  event.shapeless(
    'minecraft:large_fern',
    [
      Item.of('minecraft:fern', 2)
    ]
  )

  // Small Dripleaf Recipe (Create compacting)
  event.recipes.create.compacting(
    'minecraft:small_dripleaf',
    [
      'minecraft:clay_ball',
      '#minecraft:leaves',
      Fluid.of('minecraft:water', 100)
    ]
  )

  // Big Dripleaf Recipe (Create compacting)
  event.recipes.create.compacting(
    'minecraft:big_dripleaf',
    [
      'minecraft:small_dripleaf',
      '#minecraft:leaves',
      'minecraft:bone_meal',
      Fluid.of('minecraft:water', 250)
    ]
  )

  event.recipes.create.mixing(
    Item.of('4x supplementaries:ash'),
    [
      '#minecraft:logs_that_burn'
    ]
  ).heated();

  event.recipes.create.mixing(
    'create:asurine',
    [
      'minecraft:andesite',
        'minecraft:lapis_lazuli',
        'minecraft:quartz'
    ]
  ).heated();

  // Porkchop + Ash → Soap (Create compacting)
  event.recipes.create.compacting(
    Item.of('supplementaries:soap', 6),
    [
      'minecraft:porkchop',
      Item.of('supplementaries:ash', 4),
      Fluid.of('minecraft:water', 1000)
    ]
  )
  .id('kubejs:porkchop_ash_to_soap')


  // Minecraft: Pointed Dripstone (Create crushing)
  event.recipes.create.crushing([
    Item.of('minecraft:pointed_dripstone', 2),
    withChance('minecraft:pointed_dripstone',0.5)
  ], 'minecraft:dripstone_block')

  // Alternative Pointed Dripstone (Create mixing)
  event.recipes.create.mixing(
    'minecraft:pointed_dripstone',
    [
      'minecraft:clay_ball',
      'create:limestone',
      Fluid.of('minecraft:water', 50)
    ]
  )

  // Lily Pad Recipe (Create mixing)
  event.recipes.create.mixing(
    Item.of('minecraft:lily_pad', 2),
    [
      '#minecraft:leaves',
      'minecraft:moss_block',
      Fluid.of('minecraft:water', 250)
    ]
  )

  // Vines Recipe (Create mixing)
  event.recipes.create.mixing(
    Item.of('minecraft:vine', 2),
    [
      'minecraft:moss_block',
      '#minecraft:leaves',
      Fluid.of('minecraft:water', 100)
    ]
  )

  // Seagrass Recipe (Create mixing)
  event.recipes.create.mixing(
    Item.of('minecraft:seagrass', 2),
    [
      'minecraft:grass',
      'minecraft:kelp',
      Fluid.of('minecraft:water', 300)
    ]
  )


  // Rooted Dirt Recipe (Create compacting)
  event.recipes.create.compacting(
    'minecraft:rooted_dirt',
    [
      'minecraft:dirt',
      'minecraft:grass_block',
      'minecraft:bone_meal'
    ]
  )

  // Glow Lichen Recipe (Create mixing)
  event.recipes.create.mixing(
    Item.of('minecraft:glow_lichen', 2),
    [
      'minecraft:vine',
      'minecraft:glow_ink_sac',
      Fluid.of('minecraft:water', 100)
    ]
  )

// heave ho music disc
  event.shaped('supplementaries:music_disc_heave_ho', [
    'PPP',
    'PMP',
    'PPP'
  ], {
    P: '#minecraft:planks',
    M: '#minecraft:music_discs'
  })


  // Sniffer Wool Recipe
  event.shaped('brassworks:sniffer_wool', [
    'RR',
    'RR'
  ], {
    R: 'brassworks:sniffer_fur'
  })


  // 1. Crushing sniffer_wool → 3 fur + 25% chance for extra fur
  event.recipes.create.crushing([
    Item.of('brassworks:sniffer_fur', 3),
    withChance('brassworks:sniffer_fur', 0.25)
  ], 'brassworks:sniffer_wool')


  // 3. Spouting honey on cooked porkchop → glazed_porkchop
  event.recipes.create.filling('buzzier_bees:glazed_porkchop', [
    'minecraft:cooked_porkchop',
    Fluid.of('create:honey', 250)
  ])


  // 4. Spouting honey on wheat → 4 honey cookies
  event.recipes.create.filling(Item.of('farmersdelight:honey_cookie', 4), [
    'minecraft:wheat',
    Fluid.of('create:honey', 250)
  ])

  // 5. Mixing → honey_glazed_ham_block
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
  ])


  // 7. Mixing end rod + gold nugget + honey → honey lamp
  event.recipes.create.mixing('buzzier_bees:honey_lamp', [
    'minecraft:end_rod',
    'minecraft:gold_nugget',
    Fluid.of('create:honey', 250)
  ])

  event.recipes.create.mixing('8x supplementaries:candy', [
    'minecraft:sugar',
    'minecraft:paper',
    Fluid.of('create:honey', 250)
  ])


  // Sniffer Carpet Recipe
  event.shaped('3x brassworks:sniffer_carpet', [
    'RR'
  ], {
    R: 'brassworks:sniffer_wool'
  })

  // Smelt Bank Terminal into a Spur
  event.smelting(
    'numismatics:spur',
    'numismatics:bank_terminal'
  )
  .xp(0.1)
  .id('kubejs:smelting/bank_terminal_to_spur')

  // Whitened Pulp Recipe (Create mixing)
event.recipes.create.mixing(
  Item.of('brassworks:whitened_pulp', 3), // Output: 3 whitened pulp
  [
    { item: 'create:pulp', count: 1 },     // 1 pulp
    { item: 'minecraft:bone_meal', count: 3 } // 2 bone meal
  ]
).id('kubejs:whitened_pulp');


  // Convert Whitened Pulp to Paper (Create pressing)
  event.recipes.create.pressing(
    'minecraft:paper',
    'brassworks:whitened_pulp'
  )
  .id('kubejs:whitened_pulp_to_paper')

  //direct chute recipe
  event.recipes.create.filling(
    'minecraft:blaze_rod',
    [
      'create_aquatic_ambitions:prismarine_alloy_rod',
      Fluid.of('minecraft:lava', 1000)
    ]
  )

 event.recipes.create.filling(
    'direct_chute:direct_chute',
    [
      'create:chute',
      Fluid.of('minecraft:lava', 250)
    ]
  )

  // Bundle recipe: top two corners are string, all other edges are leather
  event.shaped('minecraft:bundle', [
    'SLS',
    'L L',
    'LLL'
  ], {
    S: 'minecraft:string',
    L: 'minecraft:leather'
  }).id('kubejs:bundle_leather_string')

  event.recipes.create.mixing('buzzier_bees:honey_bread', [
    'minecraft:bread',
    Fluid.of('create:honey', 250)
  ])

  event.recipes.create.filling('brassworks:honey_roll', [
    'minecraft:bread',
    Fluid.of('create:honey', 250)
  ])

  event.recipes.create.filling('brassworks:choco_roll', [
    'minecraft:bread',
    Fluid.of('create:chocolate', 250)
  ])

    event.recipes.create.filling('brassworks:xp_roll', [
    'minecraft:bread',
    Fluid.of('create_enchantment_industry:experience', 4)
  ])

      event.recipes.create.filling('brassworks:hyper_xp_roll', [
    'minecraft:bread',
    Fluid.of('create_enchantment_industry:hyper_experience', 4)
  ])

    event.recipes.create.mixing(
      Fluid.of('supplementaries:lumisene', 500),
      '4x minecraft:glow_berries'
  ).id('kubejs:lumisene_mixing')

  event.recipes.create.emptying([
    '1x minecraft:bucket',
    Fluid.of('supplementaries:lumisene', 1000)
  ], 'supplementaries:lumisene_bucket')
  .id('kubejs:lumisene_bucket_emptying')

    event.recipes.create.emptying([
    '1x minecraft:glass_bottle',
    Fluid.of('supplementaries:lumisene', 250)
  ], 'supplementaries:lumisene_bottle')
  .id('kubejs:lumisene_bottle_emptying')

    event.recipes.create.filling(
    '1x supplementaries:lumisene_bottle',
    [
      Fluid.of('supplementaries:lumisene', 250),
      '1x minecraft:glass_bottle'
    ]
  )
  .id('kubejs:lumisene_bottle_filling')

  event.recipes.create.filling(
    '1x brassworks:lumisene_roll',
    [
      'minecraft:bread',
      Fluid.of('supplementaries:lumisene', 250)
    ]
  ).id('kubejs:lumisene_roll_filling');

      event.recipes.create.finalize();
})

// Hide specific CreateAddition items from creative/JEI
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
        'immersive_aircraft:bamboo_hopper',
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
        'createqol:shadow_steel_boots',
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
		'fluid:copper_tap',
		'createtea:experienced_tea'
    ])

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
    ])

    // Create the alexcavesradon tag and add all the framed radon lamp items
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
    ])
    
    event.add('brassworks:cinnabon_rolls', [
      'create:sweet_roll',
      'brassworks:honey_roll',
      'brassworks:choco_roll',
      'brassworks:xp_roll',
      'brassworks:hyper_xp_roll',
      'brassworks:lumisene_roll'
    ])

      
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
    ])

    event.add('kubejs:dirt', [
      'minecraft:dirt',
      'minecraft:coarse_dirt',
      'minecraft:rooted_dirt'
    ])

    event.add('brassworks:hyper_experience_tools', [
      'brassworkscore:hyper_experience_sword',
      'brassworkscore:hyper_experience_pickaxe',
      'brassworkscore:hyper_experience_axe',
      'brassworkscore:hyper_experience_shovel'
    ])

    
    //tag for all copycats
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
      'create:copycat_panel',
    ])
    
    event.add('kubejs:decorative_glass_blocks', [
      '#createframed:stained_framed_glass',
      '#createframed:stained_tiled_glass',
      '#createframed:vertical_stained_framed_glass',
      '#createframed:horizontal_stained_framed_glass',
      'create:tiled_glass',
      'create:framed_glass',
      'create:horizontal_framed_glass',
      'create:vertical_framed_glass'
    ])
    event.remove('forge:dough', 'farmersdelight:wheat_dough')
    event.add('brassworks:experience_heap_hyper', [
      'brassworks:hyper_experience_heap'
    ])
    // Add all items from alexcavesradon and copycats from CC tags to forge:hidden tag
    event.add('forge:hidden', '#kubejs:alexcavesradon')
    event.add('forge:hidden', '#kubejs:createconnctedcopycats')
    event.add('forge:hidden', '#kubejs:shadow_radiance')
    event.add('forge:hidden', '#kubejs:disabledjetpacks')
    event.add('forge:hidden', '#kubejs:grieferarmor')
    event.add('curios:head', '#trinkets:head/hat')
    event.add('curios:belt', 'create_mobile_packages:portable_stock_ticker')

    event.add('kubejs:packagers', [
      'create:packager',
      'create:repackager',
      'create_factory_logistics:jar_packager',
      'delivery_director:package_rewriter'
    ])
})

ServerEvents.tags('block', event => {
  event.add('brassworks:tall_flowers', [
    'snifferplus:tall_fiddlefern'
  ])
	
  event.add('brassworks:small_flowers', [
    'snifferplus:fiddlefern'
  ])
	
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
  ])
})


ServerEvents.recipes(event => {
  event.remove({ input: '#forge:hidden' })
  event.remove({ output: '#forge:hidden' })
})
