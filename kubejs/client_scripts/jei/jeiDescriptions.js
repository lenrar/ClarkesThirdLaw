events.listen('jei.information', (event) => {
    const recipes = [
        {
            items: ['astralsorcery:stardust'],
            description: [
                'Obtained by left-clicking a Starmetal Ingot in-world. See the Astral Tome for more information.'
            ]
        },
        {
            items: ['buildinggadgets:construction_paste'],
            description: ['Obtained by breaking a Dense Construction Block with a Pickaxe.']
        },
        {
            items: ['thermal:blizz_rod', 'thermal:blizz_spawn_egg'],
            description: [
                'The Blizz spawns naturally in cold biomes. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['thermal:blitz_rod', 'thermal:blitz_spawn_egg'],
            description: [
                'The Blitz spawns naturally in warm, dry biomes. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['thermal:basalz_rod', 'thermal:basalz_spawn_egg'],
            description: [
                'The Basalz spawns naturally in barren or mountainous biomes. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['mekanismgenerators:fusion_reactor_controller'],
            description: [
                'The Fusion Reactor has been nerfed quite heavily.',
                'It produces 60k-250k rf/t passively, but has potential for far higher output when paired with one or multiple Steam Turbines.'
            ]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.description);
        });
    });

    refinedStorageItems.forEach((item) => {
        event.add(`refinedstorage:${item}`, 'Can be dyed through crafting or by right clicking it with dye in-world.');
    });

    itemsToDisable.forEach((item) => {
        event.add(
            item,
            "This item has been disabled, if you managed to obtain it please report it on Enigmatica 6's issue tracker: https://github.com/NillerMedDild/Enigmatica6/issues"
        );
    });
});
