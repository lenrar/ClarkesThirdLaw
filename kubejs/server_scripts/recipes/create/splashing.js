events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                outputs: ['buildinggadgets:construction_block_dense'],
                input: 'buildinggadgets:construction_block_powder'
            },
            {
                outputs: [Item.of('upgrade_aquatic:driftwood_log')],
                input: '#minecraft:logs'
            }
        ],
        rusty_items: [
            'quark:rusty_iron_plate_slab',
            'quark:rusty_iron_plate_stairs',
            'quark:rusty_iron_plate_vertical_slab'
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.splashing(recipe.outputs, recipe.input);
    });
    data.rusty_items.forEach((item) => {
        event.recipes.create.splashing([item], item.replace('rusty_', ''));
    });
});
