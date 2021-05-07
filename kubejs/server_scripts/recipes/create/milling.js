events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'thermal:blizz_rod',
                outputs: [Item.of('thermal:blizz_powder', 3), Item.of('minecraft:snowball', 1).withChance(0.25)],
                processingTime: 30
            },
            {
                input: 'thermal:blitz_rod',
                outputs: [Item.of('thermal:blitz_powder', 3)],
                processingTime: 30
            },
            {
                input: 'thermal:basalz_rod',
                outputs: [Item.of('thermal:basalz_powder', 3), Item.of('thermal:slag', 1).withChance(0.25)],
                processingTime: 30
            },
            {
                input: '#forge:end_stones',
                outputs: [Item.of('occultism:crushed_end_stone', 4)],
                processingTime: 150
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.create.milling(recipe.outputs, recipe.input).processingTime(recipe.processingTime);
    });
});
