// priority: 50

events.listen('item.registry', (event) => {
    const items = [
        'rare_lootbox',
        'epic_lootbox',
        'legendary_lootbox',
        'miners_delight',
        'sorcerers_delight',
        'farmers_delight',
        'blacksmiths_delight',
        'scavengers_delight',
        'alchemists_delight',
        'quintuple_alfsteel_ingot'
    ];

    items.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    });
});

onEvent('block.registry', (event) => {
    // Register new blocks here
    // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
});
