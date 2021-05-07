// priority: 100

events.listen('recipes', function (event) {
    //   ex: In all recipes, replace Stick with Oak Sapling in output items
    //   event.replaceOutput({}, 'minecraft:stick', 'minecraft:oak_sapling')
    event.replaceOutput({}, 'immersiveengineering:dust_wood', 'thermal:sawdust');
});
