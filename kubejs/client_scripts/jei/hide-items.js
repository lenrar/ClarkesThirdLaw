// priority: 50

events.listen('jei.hide.items', function (event) {
    event.hide(itemsToHide);

    var twilightForestDoorTypes = ['twilight_oak', 'canopy', 'mangrove', 'dark', 'time', 'trans', 'mine', 'sort'];

    twilightForestDoorTypes.forEach((doorType) => {
        event.hide('twilightforest:' + doorType + '_door');
    });

    global.itemsToDisable.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

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
        event.hide(tool);
    });

    global.duplicateMetals.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });
});
