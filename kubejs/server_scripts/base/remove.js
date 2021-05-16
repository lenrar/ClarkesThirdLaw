// priority: 105

events.listen('recipes', (event) => {

    global.itemsToDisable.forEach((disabledItem) => {
        event.remove({ output: disabledItem });
    });

    global.duplicateMetals.forEach((disabledItem) => {
        event.remove({ output: disabledItem });
    });

    global.fluidsToDisable.forEach((disabledFluid) => {
        event.remove({ output: disabledFluid });
    });

    // event.remove({
    //     output: '/\\w+:\\w+_gear$/',
    //     type: 'minecraft:crafting_shaped'
    // });

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

    event.remove({output: 'minecraft:bread', type: 'minecraft:crafting_shapeless'})
	event.remove({output: 'minecraft:bread', type: 'minecraft:crafting_shaped'})

	event.remove({output: 'immersiveengineering:stick_iron', type: 'minecraft:crafting_shaped'})
    event.remove({output: 'immersiveengineering:stick_steel', type: 'minecraft:crafting_shaped'})
    event.remove({output: 'immersiveengineering:stick_aluminum', type: 'minecraft:crafting_shaped'})

    var iceAndFireTools = [
        'iceandfire:silver_sword',
        'iceandfire:silver_shovel',
        'iceandfire:silver_pickaxe',
        'iceandfire:silver_axe',
        'iceandfire:silver_hoe',
        'iceandfire:copper_sword',
        'iceandfire:copper_shovel',
        'iceandfire:copper_pickaxe',
        'iceandfire:copper_axe',
        'iceandfire:copper_hoe'
    ]

    iceAndFireTools.forEach((tool) => {
        event.remove({ input: tool });
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
