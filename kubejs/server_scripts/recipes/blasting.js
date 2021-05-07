events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'minecraft:rotten_flesh',
                output: 'occultism:tallow',
                xp: 0.5
            },
            {
                input: 'farmersdelight:iron_knife',
                output: Item.of('#forge:nuggets/iron'),
                xp: 0.1
            },
            {
                input: 'farmersdelight:golden_knife',
                output: Item.of('#forge:nuggets/gold'),
                xp: 0.1
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input).xp(recipe.xp);
    });
});
