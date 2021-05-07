events.listen('jei.hide.items', function (event) {
    event.hide(itemsToHide);

    var twilightForestDoorTypes = ['twilight_oak', 'canopy', 'mangrove', 'dark', 'time', 'trans', 'mine', 'sort'];

    twilightForestDoorTypes.forEach((doorType) => {
        event.hide('twilightforest:' + doorType + '_door');
    });

    itemsToDisable.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });
});
