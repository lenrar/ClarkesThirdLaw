events.listen('recipes', (event) => {
    data = {
        recipes: [
            {
                result: 'thermal:apatite_ore',
                weight: 700
            },
            {
                result: 'ars_nouveau:arcane_ore',
                weight: 600
            },
            {
                result: 'thermal:cinnabar_ore',
                weight: 500
            },
            {
                result: 'minecraft:coal_ore',
                weight: 2500
            },
            {
                result: 'thermal:copper_ore',
                weight: 2000
            },
            {
                result: 'minecraft:diamond_ore',
                weight: 400
            },
            {
                result: 'minecraft:emerald_ore',
                weight: 350
            },
            {
                result: 'mekanism:fluorite_ore',
                weight: 450
            },
            {
                result: 'minecraft:gold_ore',
                weight: 550
            },
            {
                result: 'minecraft:iron_ore',
                weight: 2000
            },
            {
                result: 'minecraft:lapis_ore',
                weight: 500
            },
            {
                result: 'thermal:lead_ore',
                weight: 1500
            },
            {
                result: 'thermal:nickel_ore',
                weight: 1000
            },
            {
                result: 'mekanism:osmium_ore',
                weight: 1500
            },
            {
                result: 'minecraft:redstone_ore',
                weight: 700
            },
            {
                result: 'thermal:silver_ore',
                weight: 1000
            },
            {
                result: 'thermal:sulfur_ore',
                weight: 2000
            },
            {
                result: 'thermal:tin_ore',
                weight: 1800
            },
            {
                result: 'immersiveengineering:ore_uranium',
                weight: 500
            },
            {
                result: 'create:zinc_ore',
                weight: 1000
            },
            {
                result: 'occultism:iesnium_ore',
                weight: 100
            },
            {
                result: 'minecraft:glowstone',
                weight: 100
            },
            {
                result: 'minecraft:ancient_debris',
                weight: 80
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'occultism:miner',
            ingredient: {
                tag: 'occultism:miners/ores'
            },
            result: {
                item: recipe.result
            },
            weight: recipe.weight
        });
    });
});
