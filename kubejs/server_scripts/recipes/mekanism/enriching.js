events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'minecraft:sugar_cane',
                output: Item.of('minecraft:sugar', 2)
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input);
    });
});
