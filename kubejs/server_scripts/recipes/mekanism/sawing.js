events.listen('recipes', (event) => {
    var sawDust = 'thermal:sawdust';
    event.recipes.mekanism.sawing(Item.of(sawDust), '#forge:rods/wooden');
});
