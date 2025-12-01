// File: kubejs/server_scripts/immersive_aircraft_recipes.js

// Add custom Create-based recipes for Immersive Aircraft
ServerEvents.recipes(event => {
  const immersiveAircraftItems = [
    'immersive_aircraft:airship',
    'immersive_aircraft:biplane',
    'immersive_aircraft:gyrodyne',
    'immersive_aircraft:quadrocopter',

    'immersive_aircraft:boiler',
    'immersive_aircraft:engine',
    'immersive_aircraft:gyroscope',
    'immersive_aircraft:hull',
    'immersive_aircraft:hull_reinforcement',
    'immersive_aircraft:improved_landing_gear',
    'immersive_aircraft:industrial_gears',
    'immersive_aircraft:propeller',
    'immersive_aircraft:sail'
  ];

  immersiveAircraftItems.forEach(item => {
    event.remove({ output: item });
  });

  // Mechanical Crafting Recipes

  // Airship
  event.recipes.create.mechanical_crafting('immersive_aircraft:airship', [
    'SSSSS',
    ' ~ ~ ',
    ' H_EP',
    ' HHH '
  ], {
    H: 'immersive_aircraft:hull',
    E: 'immersive_aircraft:engine',
    P: 'create:propeller',
    S: 'immersive_aircraft:sail',
    '~': 'minecraft:string',
    '_': '#create:seats'
  });

  // Biplane
  event.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [
    '   S ',
    'S  S ',
    'HH_EP',
    'S  S ',
    '   S '
  ], {
    H: 'immersive_aircraft:hull',
    E: 'immersive_aircraft:engine',
    P: 'immersive_aircraft:propeller',
    S: 'immersive_aircraft:sail',
    '_': '#create:seats'
  });

  // Boiler
  event.shaped('immersive_aircraft:boiler', [
    'S',
    'N',
    'I'
  ], {
    I: 'create:blaze_burner',
    S: 'create:steam_engine',
    N: 'create:fluid_tank'
  });

  // Engine
  event.shaped('immersive_aircraft:engine', [
    'BPB',
    'SES'
  ], {
    P: 'create:precision_mechanism',
    E: 'immersive_aircraft:boiler',
    B: 'create:brass_sheet',
    S: 'create:sturdy_sheet'
  });

  // Gyrodyne
  event.shaped('immersive_aircraft:gyrodyne', [
    ' P ',
    'SES',
    'H_H'
  ], {
    S: 'immersive_aircraft:sail',
    H: 'immersive_aircraft:hull',
    P: 'immersive_aircraft:propeller',
    E: 'create:precision_mechanism',
    '_': '#create:seats'
  });

  // Gyroscope
  event.shaped('immersive_aircraft:gyroscope', [
    'E',
    'C'
  ], {
    C: 'minecraft:compass',
    E: 'create:electron_tube'
  });

  // Hull
  event.shaped('immersive_aircraft:hull', [
    'LIL',
    'LIL'
  ], {
    L: 'create:andesite_casing',
    I: 'minecraft:iron_ingot'
  });

  // Hull Reinforcement
  event.shaped('immersive_aircraft:hull_reinforcement', [
    'IHI'
  ], {
    H: 'immersive_aircraft:hull',
    I: 'create:iron_sheet'
  });

  // Improved Landing Gear
  event.shaped('immersive_aircraft:improved_landing_gear', [
    'SI',
    'B '
  ], {
    B: 'create:belt_connector',
    I: 'minecraft:iron_ingot',
    S: 'create:iron_sheet'
  });

  // Industrial Gears
  event.shaped('immersive_aircraft:industrial_gears', [
    'ICI'
  ], {
    C: 'create:cogwheel',
    I: 'create:iron_sheet'
  });

  // Propeller
  event.shaped('immersive_aircraft:propeller', [
    ' I ',
    'IPI',
    ' I '
  ], {
    I: 'create:iron_sheet',
    P: 'create:propeller'
  });

  // Quadrocopter
  event.shaped('immersive_aircraft:quadrocopter', [
    'PAP',
    ' S ',
    'PEP'
  ], {
    E: 'immersive_aircraft:boiler',
    A: 'create:andesite_casing',
    S: 'minecraft:string',
    P: 'create:propeller'
  });

  // Sail
  event.shaped('immersive_aircraft:sail', [
    'SSS',
    'SSS'
  ], {
    S: 'create:white_sail'
  });
});