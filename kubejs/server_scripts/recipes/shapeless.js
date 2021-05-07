events.listen('recipes', (event) => {
    const recipes = [{ output: Item.of('occultism:tallow', 9), inputs: ['quark:tallow_block'] }];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });
});
