events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'upgrade_aquatic:squid_bucket',
                fluid: Fluid.of('astralsorcery:liquid_starlight', 250),
                output: 'upgrade_aquatic:glow_squid_bucket'
            },
            {
                input: 'minecraft:glass_bottle',
                fluid: { fluidTag: 'forge:milk', amount: 250 },
                output: 'farmersdelight:milk_bottle'
            },
            {
                input: 'minecraft:glass_bottle',
                fluid: Fluid.of('thermal:syrup', 25),
                output: 'autumnity:syrup_bottle'
            },
            {
                input: 'minecraft:glass_bottle',
                fluid: Fluid.of('thermal:sap', 500),
                output: 'autumnity:sap_bottle'
            },
            {
                input: 'minecraft:glass_bottle',
                fluid: Fluid.of('industrialforegoing:essence', 250),
                output: 'minecraft:experience_bottle'
            },
            {
                input: 'minecraft:glass_bottle',
                fluid: Fluid.of('pneumaticcraft:memory_essence', 250),
                output: 'minecraft:experience_bottle'
            },
            {
                input: 'minecraft:glass_bottle',
                fluid: Fluid.of('cofh_core:experience', 250),
                output: 'minecraft:experience_bottle'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]);
    });
});
