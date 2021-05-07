events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                outputs: [Item.of('occultism:obsidian_dust'), Item.of('minecraft:obsidian').withChance(0.75)],
                input: 'minecraft:obsidian',
                id: 'create:crushing/obsidian'
            },
            {
                outputs: [
                    Item.of('buildinggadgets:construction_paste', 3),
                    Item.of('buildinggadgets:construction_paste').withChance(0.75),
                    Item.of('buildinggadgets:construction_paste').withChance(0.5)
                ],
                input: 'buildinggadgets:construction_block_dense'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        const re = event.recipes.create.crushing(recipe.outputs, recipe.input);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
