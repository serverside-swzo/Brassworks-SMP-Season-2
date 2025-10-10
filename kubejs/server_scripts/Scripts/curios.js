
ServerEvents.tags('item', event => {
    // Filling tanks
    event.add('curios:belt', 'create_sa:small_filling_tank');
    event.add('curios:belt', 'create_sa:medium_filling_tank');
    event.add('curios:belt', 'create_sa:large_filling_tank');

    // Fueling tanks
    event.add('curios:belt', 'create_sa:small_fueling_tank');
    event.add('curios:belt', 'create_sa:medium_fueling_tank');
    event.add('curios:belt', 'create_sa:large_fueling_tank');
});

