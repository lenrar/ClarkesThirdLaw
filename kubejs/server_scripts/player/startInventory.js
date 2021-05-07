events.listen('player.logged_in', function (event) {
    if (!event.hasGameStage('starting_items')) {
        event.player.give('ftbquests:book');
        event.addGameStage('starting_items');
    }
});
