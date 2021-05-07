events.listen('recipes', (event) => {
    var idRemovals = [
        'eidolon:tallow',

        'createaddition:copper_rod',
        'createaddition:gold_rod',
        'createaddition:iron_rod',
        'createaddition:brass_rod'
    ];

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

    itemsToDisable.forEach((disabledItem) => {
        event.remove({ output: disabledItem });
    });

    event.remove({
        output: '/\\w+:\\w+_gear$/',
        type: 'minecraft:crafting_shaped'
    });

    beamRecipes.forEach((recipe) => {
        event.remove({ output: recipe.output });
    });

    stonecuttables.forEach((stoneType) => {
        stoneType.stones.forEach((stone) => {
            event.remove({ type: 'minecraft:stonecutting', output: stone });
        });
        stoneType.onlyAsOutput.forEach((stone) => {
            event.remove({ type: 'minecraft:stonecutting', output: stone });
        });
    });

    // event.remove({
    //     input: '#forge:ores/zinc',
    //     type: 'thermal:smelter'
    // });
    // event.remove({
    //     input: '#forge:ores/osmium',
    //     type: 'thermal:smelter'
    // });
    // event.remove({
    //     input: '#forge:ores/uranium',
    //     type: 'thermal:smelter'
    // });
    // event.remove({
    //     input: '#forge:ores/aluminum',
    //     type: 'thermal:smelter'
    // });
    // event.remove({
    //     input: '#forge:ores/nickel',
    //     type: 'thermal:smelter'
    // });
    // event.remove({
    //     input: 'minecraft:fire_charge',
    //     mod: 'thermal',
    //     type: 'minecraft:crafting_shapeless'
    // });
    // event.remove({ type: 'create:milling', output: '#forge:dyes' });
    // event.remove({ type: 'create:crushing', output: '#forge:dyes' });
    // event.remove({ type: 'mekanism:enriching', output: '#forge:dyes' });
    // event.remove({ type: 'thermal:centrifuge', output: '#forge:dyes' });
    // event.remove({ type: 'immersiveengineering:crusher', output: '#forge:dyes' });
});
