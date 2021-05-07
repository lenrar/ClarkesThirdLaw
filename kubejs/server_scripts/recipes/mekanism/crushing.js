events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: '#forge:stone',
                output: 'minecraft:cobblestone'
            },
            {
                input: 'buildinggadgets:construction_block_dense',
                output: Item.of('buildinggadgets:construction_paste', 3)
            },
            {
                input: '#forge:end_stones',
                output: Item.of('occultism:crushed_end_stone', 4)
            },
            {
                input: '#forge:grain',
                output: Item.of('create:wheat_flour', 1)
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.mekanism.crushing(recipe.output, recipe.input);
    });
});
