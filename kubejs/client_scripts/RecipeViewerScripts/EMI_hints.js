RecipeViewerEvents.addInformation('item', event => {
  const itemHints = {
    // Natural Resources
    'create:limestone': [
      'Can be generated like a cobblestone generator,',
      'but replace water with honey.',
      'When flowing honey meets lava, limestone forms.'
    ],
    'create:scoria': [
      'Can be generated like a cobblestone generator,', 
      'but replace water with chocolate.',
      'When flowing chocolate meets lava, scoria forms.'
    ],
    'create:extendo_grip': [
      'Provides extended reach distance,',
      'allowing interaction with blocks from further away.'
    ],
    'create:wand_of_symmetry': [
      'Automatically mirrors your building actions,',
      'enabling perfectly symmetrical constructions.'
    ],
    'create_sa:grapplin_whisk': [
      'Provides rapid travel capabilities,',
      'useful for navigating large builds quickly.'
    ],
    
    // Storage Solutions
    'create:item_vault': [
      'High-capacity storage for bulk items,',
      'can be accessed via item hatches for automation.'
    ],
    'create_connected:item_silo': [
      'Vertical storage solution for bulk items,',
      'ideal for storing large quantities of a single item type.'
    ],
    'create_connected:fluid_vessel': [
      'Horizontal tank for fluid storage,',
      'provides aesthetically pleasing liquid storage solutions.'
    ],
    
    // Automation Components
    'create:mechanical_plough': [
      'Capable of tilling soil without trampling crops,',
      'excellent for automated farming systems.'
    ],
    'create:mechanical_saw': [
      'Can automate Chipped recipes when properly configured,',
      'offering expanded automation options.'
    ],
    'create:factory_gauge': [
      'Provides enhanced automation capabilities,',
      'simplifies complex automation setups.'
    ],
    'direct_chute:direct_chute': [
      'Transfers items instantly from input to output,',
      'with no internal storage, ideal for fast transport.'
    ],
    'create_connected:inventory_access_port': [
      'Expands inventory capabilities,',
      'enabling more compact automation builds.'
    ],
    'trading_floor:trading_depot': [
      'Automates villager trading when integrated with',
      'Create contraptions for efficient resource acquisition.'
    ],
    'create_sa:portable_drill': [
      'Excavates large areas quickly,',
      'significantly reduces mining time.'
    ],
    'create_connected:parallel_gearbox': [
      'Enables compact machinery setups,',
      'by redirecting rotational power efficiently.'
    ],
    'create_connected:linked_transmitter': [
      'Combines lever functionality with redstone links,',
      'providing wireless control in a single block.'
    ],
    'create_connected:inventory_bridge': [
      'Connects two inventories without requiring pipes,',
      'creating direct transfer connections.'
    ],
    'create_connected:shear_pin': [
      'Safety component that breaks when mechanical network overstresses,',
      'preventing widespread damage to contraptions.'
    ],
    'create:package_filter': [
      'Controls package flow based on addressing,',
      'enabling sophisticated sorting systems.'
    ],
    'create:controller_rail': [
      'Functions like powered rails but provides directional control,',
      'ideal for complex minecart systems.'
    ],
    'create:desk_bell': [
      'When placed on elevators, produces a notification sound',
      'upon reaching a floor, enhancing user experience.'
    ],
    '#create:postboxes': [
      'Enables package transport via train systems,',
      'facilitating long-distance logistics.'
    ],
    'create:package_frogport': [
      'Used to deploy packages on chain conveyors and retrieve them,',
      'supports wildcard addressing with * for flexible routing.'
    ],
    
    // Misc Items
    'supplementaries:confetti_popper': [
      'Creates celebratory effects when used,',
      'ideal for marking special occasions.'
    ],
    'exposure:camera': [
      'Allows users to take screenshots with special framing,',
      'creating in-game photography.'
    ],
    'vanillabackport:dried_ghast': [
      'Placing dried ghasts in water creates happy ghasts,',
      'providing unique decorative opportunities.'
    ],
    '#create_sa:jetpack': [
      'Enables aerial mobility,',
      'can be enhanced with fueling and filling tanks.'
    ],
    'supplementaries:pancake': [
      'Functions as both food and a music disc,',
      'can be played in jukeboxes for a unique melody.'
    ],
    'create:potato_cannon': [
      'Launches potatoes at high velocity,',
      'provides both utility and entertainment value.'
    ],
    'minecraft:goat_horn': [
      'Produces loud sound effects when used,',
      'audible over long distances.'
    ],
    'exposure:lightroom': [
      'Enables printing of photographs,',
      'preserving in-game memories physically.'
    ],
    'create:tree_fertilizer': [
      'Forces tree growth even in space-restricted areas,',
      'circumventing normal growth requirements.'
    ],
    'supplementaries:dispenser_minecart': [
      'Portable Dispensor,',
      'Make a moving firework show.'
    ],
    
    'create_sa:flamethrower': [
      'Highly destructive tool,',
      'should be used with extreme caution.'
    ],
    'torchmaster:megatorch': [
      'Prevents hostile mob spawning in a large radius,',
      'excellent for securing extensive areas.'
    ],
    'torchmaster:feral_flare_lantern': [
      'Provides illumination over large areas,',
      'ideal for lighting expansive builds.'
    ],
    'create:pulse_timer': [
      'Creates compact one-block redstone clock circuits,',
      'useful for timing mechanisms.'
    ],
    'dummmmmmy:target_dummy': [
      'Allows testing of weapons and combat equipment,',
      'displays damage values for analysis.'
    ],
    'supplementaries:bamboo_spikes_tipped': [
      'Effective for XP farm designs,',
      'optimizes mob harvesting processes.',
      'but with added potion effect being applied.'
    ],
    'create:nozzle': [
      'Enhances mob farm efficiency,',
      'improves resource collection systems.'
    ],
    'chipped:spruce_barrel': [
      'Is the only block that can be interacted with inside a claimed chunk',
      'useful in shops to allow players collect their bought items',
      'make sure not to use it for personal storage in your claimed chunk.'
    ],
    '#create:table_cloths': [
      'Can be used to sell items in shops',
      'right click on stock keeper to set the item to sell',
      'then place it down to display item and configure the price',
    ],

    'supplementaries:netherite_door': [
      'Advanced security door that can be locked with a key,',
      'provides blast resistance superior to standard doors,',
      'remains functional even in extreme environments like the Nether.'
    ],
    'supplementaries:netherite_trapdoor': [
      'Secure access point that can be locked with a key,',
      'offers enhanced blast protection compared to standard trapdoors,',
      'ideal for secure vertical passages in valuable storage areas.'
    ],
    'minecraft:chain': [
      'Can be connected to walls and fences similar to leads,',
      'provides decorative vertical and horizontal connections,',
      'useful for creating realistic suspension systems and barriers.'
    ],
    'minecraft:sniffer_egg': [
      'OMG IT\'S SNIFFY\'S SON! SO ADORABLE!',
      'The cutest egg you\'ll ever see, just look at those patterns!',
      'Plant it in warm soil and watch the magic happen!'
    ],
    'supplementaries:hat_stand': [
      'Specialized display stand designed exclusively for helmets and hats,',
      'offers more focused presentation than standard armor stands,',
      'ideal for showcasing rare or decorative headgear collections.'
    ],
    'minecraft:armor_stand': [
      'Versatile equipment display platform for complete armor sets,',
      'supports pose customization through use of empty hand and sneaking,',
      'enables creation of statues and decorative armored figures.'
    ],
    'brassworkscore:sniffer_plushie': [
      'Adorable plushie of Sniffy, our mascot,',
      'provides a cute decorative option for your base.',
      'can also be worn as a hat for added fun!'
    ],

    // Additional Supplementaries Items
    'supplementaries:globe': [
      'Displays a randomly generated world unique to your seed,',
      'shows current coordinates when interacted with,',
      'gives comparator output based on displayed face, useful for mechanisms.'
    ],
    'supplementaries:pedestal': [
      'Can display items with special visual properties for tools and weapons,',
      'emits observer-detectable update when items are added/removed,',
      'provides enchanting power when holding end crystals (3 bookshelves worth).'
    ],
    '#supplementaries:flags': [
      'Functions as a horizontal banner with different pattern textures,',
      'can be raised or lowered when placed on stick poles,',
      'swings realistically in wind with fancy animation option.'
    ],
    '#supplementaries:presents': [
      'Container that holds a single item stack with custom description,',
      'can be addressed to specific players limiting who can open it,',
      'comes in 16 different colors for decorative gift-giving.'
    ],
    'supplementaries:notice_board': [
      'Displays written books, maps or banner patterns,',
      'cycles through book pages when given redstone pulse,',
      'can be waxed to prevent interaction.'
    ],
    'supplementaries:turn_table': [
      'Rotates blocks in the direction it faces when powered,',
      'rotation speed depends on redstone signal strength,',
      'can also rotate entities standing on it (when facing upwards).'
    ],
    'supplementaries:crank': [
      'Provides variable redstone signal based on rotation,',
      'functions as an analog lever with multiple power levels,',
      'can be turned clockwise or counterclockwise (shift-right click).'
    ],
    'supplementaries:jar': [
      'Stores up to 12 cookie-like items or small mobs,',
      'can hold up to 3000mb of various fluids,',
      'stored food can be eaten directly from the jar.'
    ],
    'supplementaries:rope': [
      'Can be climbed like a ladder when placed vertically,',
      'extends downward when placed against existing rope,',
      'can be pulled up by shift-clicking the top rope.'
    ],
    'supplementaries:clock_block': [
      'Visually displays the current in-game time with hour and minute hands,',
      'provides comparator output based on time of day (0-15),',
      'emits block update each time an in-game hour passes.'
    ],
    'supplementaries:wind_vane': [
      'Visually indicates current weather conditions,',
      'outputs redstone signal based on weather intensity,',
      'provides strong power to block below for rooftop applications.'
    ],
    'supplementaries:bellows': [
      'Pushes air and entities when powered by redstone,',
      'speeds up furnaces and keeps fires alive indefinitely,',
      'air push strength proportional to redstone signal strength.'
    ],
    'supplementaries:spring_launcher': [
      'Propels entities vertically when activated with redstone,',
      'enables rapid upward transportation in structures,',
      'allows higher jumping when standing on extended launcher.'
    ],
    'supplementaries:faucet': [
      'Extracts items from inventories when activated,',
      'can transfer fluids between containers in 250mb increments,',
      'activated by right-clicking or redstone signal.'
    ],
    'supplementaries:speaker_block': [
      'Broadcasts messages to all players within configurable radius,',
      'can use narrator mode to send message via game narrator instead,',
      'rename in anvil to change displayed name in broadcast.'
    ],
    'supplementaries:sack': [
      'Early-game portable storage with 9 slots,',
      'applies slowness when carrying more than two sacks,',
      'deals damage to entities when falling on them based on contents.'
    ],
    'supplementaries:flute': [
      'Summons nearby owned pets when played,',
      'can be bound to specific animals by clicking on them,',
      'plays random tunes from customizable song list.'
    ],
    'supplementaries:slingshot': [
      'Launches blocks that place themselves where they land,',
      'can be enchanted with Quick Charge, Multi Shot and Stasis,',
      'Stasis enchantment enables straight-line shooting and block preview.'
    ],
    'supplementaries:key': [
      'Used to lock safes, netherite doors/trapdoors and lock blocks,',
      'rename key before locking to set unique password,',
      'works from inventory without being held in hand.'
    ],
    'supplementaries:quiver': [
      'Stores multiple arrow types for quick switching,',
      'shift-right click to cycle between arrows without GUI,',
      'automatically collects picked-up arrows of stored types.'
    ],
    'supplementaries:flower_box': [
      'Holds up to three plants including double-tall plants,',
      'can be placed in middle of block or against walls,',
      'provides decorative way to display flowers and crops.'
    ],
    'supplementaries:cage': [
      'Captures and displays small mobs and animals,',
      'shift-right click to place empty cage as block,',
      'right-click with filled cage to release captured mob.'
    ],
    '#supplementaries:sign_posts': [
      'Can be placed on fences or sticks, up to two per post,',
      'orientation depends on player facing when placed,',
      'points to structures when clicked with compass.'
    ],
    'supplementaries:wrench': [
      'Rotates blocks including those not normally adjustable,',
      'works on signs, double chests, beds and many others,',
      'doubles as fast melee weapon that can be enchanted with knockback.'
    ],
    'supplementaries:rope_arrow': [
      'Deploys stored rope where it lands, creating instant climbing access,',
      'can carry up to 24 ropes (configurable),',
      'saves unused ropes when retrieved after firing.'
    ],
    'supplementaries:flint_block': [
      'Creates sparks when pushed against iron blocks by pistons,',
      'can ignite nearby flammable blocks through this interaction,',
      'provides decorative storage for excess flint.'
    ],
    'supplementaries:bubble_blower': [
      'Creates decorative soap bubbles when used,',
      'rechargeable by crafting with soap,',
      'places physical bubble blocks when enchanted with Stasis.'
    ],
    'supplementaries:blackboard': [
      'Can be drawn on to create patterns in black and white,',
      'supports direct editing by holding dye items,',
      'can be cleared with soap or wet sponge and waxed to prevent changes.'
    ],
    'supplementaries:pulley_block': [
      'Extends/retracts ropes and chains when rotated by turn table,',
      'connects with adjacent pulleys facing same direction,',
      'pulls up blocks attached to ropes/chains when retracting.'
    ],
    'supplementaries:bamboo_spikes': [
      'Damages and slows entities walking on them,',
      'deals extra damage when pushed by pistons (with Quark/Create),',
      'can be infused with lingering potions for status effects.'
    ],
    'supplementaries:safe': [
      'Secure storage container that can be locked with a key,',
      'provides protection against unauthorized access to valuable items,',
      'offers peace of mind for storing important resources and treasures.'
    ],
    'supplementaries:statue': [
      'Decorative figure that can hold and display a single item,',
      'right-click to place or retrieve the displayed item,',
      'ideal for showcasing treasures or creating themed displays.'
    ],
    'supplementaries:urn': [
      'Ancient containers found naturally in caves and underground structures,',
      'can be broken to obtain various treasures and loot,',
      'craftable versions serve as decorative storage with thematic appeal.'
    ],
    'supplementaries:slice_map': [
      'Creates a map of the horizontal slice at the y-level you are standing on,',
      'useful for underground navigation and cave exploration,',
      'provides a top-down view of structures on a single elevation level.'
    ],
    'supplementaries:soap_block': [
      'Creates an extremely slippery surface for entities,',
      'causes players and mobs to slide uncontrollably,',
      'useful for movement-based contraptions and traps.'
    ],

    // Extra Gauges
    /*
    'extra_gauges:logic_gauge': [
      'Performs logical operations (OR, AND, NOR, NAND, XOR, XNOR) on redstone inputs,',
      'right-click to open connection GUI, hold right-click to change logic mode,',
      'essential for advanced redstone automation and control systems.'
    ],
    'extra_gauges:integer_gauge': [
      'Performs mathematical operations (ADD, SUBTRACT, MULTIPLY) on numerical inputs,',
      'can read from factory gauges and sum multiple redstone signal strengths,',
      'useful for complex calculations in automation systems.'
    ],
    'extra_gauges:comparator_gauge': [
      'Compares summed inputs against a set value using various conditions,',
      'supports equals, greater than, less than, and other comparison modes,',
      'outputs redstone signal when comparison condition is met.'
    ],
    'extra_gauges:counter_gauge': [
      'Counts redstone pulses and outputs signal when threshold is reached,',
      'configurable threshold value, resets to 0 after triggering,',
      'perfect for counting operations and batch processing controls.'
    ],
    */

    // Create Copycats
    '#kubejs:copycats': [
      'Takes on appearance and properties of other blocks,',
      'Place then right-click with target block to apply appearance,',
      'Or hold target block in off-hand while placing for one-step application.'
    ],
    'create:repackager': [
      'Combines multiple packages from the same order into a single package,',
      'Example: An order for 2 diamonds, 3 carrots, and 2 stone creates 3 packages,',
      'The repackager merges these into 1 package, saving space in transport systems.'
    ],
  };

  // Add all the items with their hints
  for (const [itemId, hint] of Object.entries(itemHints)) {
    event.add(itemId, hint);
  }
})