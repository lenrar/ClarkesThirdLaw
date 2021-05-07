events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'thermal:phytogro',
                growthModifier: 3.0
            },
            {
                input: 'botania:fertilizer',
                growthModifier: 1.5
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.fertilizer(recipe.input).growthModifier(recipe.growthModifier);
    });
});
