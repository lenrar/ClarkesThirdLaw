events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'thermal:blizz_rod',
                output: Item.of('thermal:blizz_powder', 4),
                secondary: [Item.of('minecraft:snowball').chance(0.5)],
                id: 'immersiveengineering:crusher/blizz_rod'
            },
            {
                input: 'thermal:basalz_rod',
                output: Item.of('thermal:basalz_powder', 4),
                secondary: [Item.of('thermal:slag').chance(0.5)],
                id: 'immersiveengineering:crusher/basalz_rod'
            },
            {
                input: '#forge:end_stones',
                output: Item.of('occultism:crushed_end_stone', 4),
                secondary: [],
                id: 'immersiveengineering:crusher/end_stone'
            },
            {
                input: '#forge:obsidian',
                output: Item.of('occultism:obsidian_dust', 1),
                secondary: [Item.of('minecraft:obsidian').chance(0.75)],
                id: 'immersiveengineering:crusher/obsidian'
            },
            {
                input: 'minecraft:sugar_cane',
                output: Item.of('minecraft:sugar', 2),
                secondary: [Item.of('minecraft:sugar').chance(0.1)]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
