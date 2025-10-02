StartupEvents.registry('block', event => {
    function createshop(id, boxesArray) {
        let blockBuilder = event.create(id, 'cardinal')
            .displayName('Plot Board')
            .soundType('wood')
            .renderType('translucent')
            .hardness(0.5)
            .noItem()
            .tagBlock('minecraft:mineable/axe')
            .resistance(0.5);
        boxesArray.forEach(boxArgs => {
            blockBuilder = blockBuilder.box.apply(blockBuilder, boxArgs);
        });

        blockBuilder.item(item => {
            item.displayName('Plot Board');
            item.maxStackSize(1);
        });
    }
    createshop(
        'brassworks:shop_1',
        [
            [0, 9.662, 0, 1.974, 16, 0.5],
            [8.208, 0, 0, 16, 16, 0.5],
            [1.974, 0, 0, 8.208, 15.481, 0.5],
            [0.519, 0, 0, 1.974, 9.662, 0.5],
            [0, 1.455, 0, 0.519, 4.364, 0.5]
        ]
    );
    createshop(
        'brassworks:shop_2',
        [
            [0, 0, 0, 0.935, 16, 0.5],
            [1.974, 0, 0, 8.727, 16, 0.5],
            [13.61, 10.701, 0, 16, 16, 0.5],
            [0.935, 0, 0, 1.974, 15.481, 0.5],
            [8.727, 0, 0, 13.61, 15.481, 0.5],
            [13.61, 0, 0, 15.481, 10.701, 0.5],
            [15.481, 5.299, 0, 16, 10.182, 0.5],
            [15.481, 0, 0, 16, 4.364, 0.5]
        ]
    );
    createshop(
        'brassworks:shop_3',
        [
            [0, 0.519, 0, 15.481, 16, 0.5],
            [15.481, 6.338, 0, 16, 16, 0.5],
            [15.481, 0.519, 0, 16, 4.364, 0.5],
            [0, 0, 0, 11.636, 0.519, 0.5],
            [12.571, 0, 0, 15.065, 0.519, 0.5]
        ]
    );
    createshop(
        'brassworks:shop_4',
        [
            [0.519, 0.935, 0, 16, 16, 0.5],
            [0, 11.117, 0, 0.519, 13.61, 0.5],
            [0, 0.935, 0, 0.519, 10.701, 0.5],
            [0.519, 0.519, 0, 3.844, 0.935, 0.5],
            [4.364, 0.519, 0, 16, 0.935, 0.5],
            [5.299, 0, 0, 9.247, 0.519, 0.5],
            [13.61, 0, 0, 16, 0.519, 0.5]
        ]
    );
})
