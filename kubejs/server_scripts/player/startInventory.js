events.listen('player.logged_in', function (event) {

    starting_items = [
        'ftbquests:book',
        'minecraft:stone_sword',
        'minecraft:stone_axe',
        'minecraft:stone_pickaxe',
        Item.of('minecraft:torch', 32)
    ]


    if (!event.hasGameStage('starting_items')) {

        starting_items.forEach((item) => {
            event.player.give(item)
        });

        event.addGameStage('starting_items');
    }
});
