// File: kubejs/server_scripts/tank_belt_slots.js

// Tag the Create S&A tanks to be compatible with belt slots
ServerEvents.tags('item', event => {
    // Filling tanks
    event.add('curios:hands', 'create_sa:small_filling_tank');
    event.add('curios:charm', 'create_sa:small_filling_tank');
    event.add('curios:hands', 'create_sa:medium_filling_tank');
    event.add('curios:charm', 'create_sa:medium_filling_tank');
    event.add('curios:hands', 'create_sa:large_filling_tank');
    event.add('curios:charm', 'create_sa:large_filling_tank');

    // Fueling tanks
    event.add('curios:hands', 'create_sa:small_fueling_tank');
    event.add('curios:charm', 'create_sa:small_fueling_tank');
    event.add('curios:hands', 'create_sa:medium_fueling_tank');
    event.add('curios:charm', 'create_sa:medium_fueling_tank');
    event.add('curios:hands', 'create_sa:large_fueling_tank');
    event.add('curios:charm', 'create_sa:large_fueling_tank');
});

