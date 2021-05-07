events.listen('item.toss', function (event) {
    event.getItemEntity().setCustomName(event.getItem().getName() + ' tossed by ' + event.getEntity());
    event.getItemEntity().setCustomNameAlwaysVisible(true);
});
