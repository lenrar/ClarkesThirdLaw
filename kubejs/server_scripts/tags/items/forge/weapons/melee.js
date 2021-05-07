events.listen('item.tags', (event) => {
    var items = [
        'botania:ender_dagger',
        'immersiveengineering:sword_steel',
        'mekanism:atomic_disassembler',
        'mekanism:meka_tool',
        'bloodmagic:soulsword',
        'bloodmagic:soulscythe',
        'eidolon:reaper_scythe'
    ];
    var exceptions = [];

    var tags = ['forge:weapons', 'forge:weapons/melee'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_sword/)
            .add(/_paxel/)
            .add(/_aiot/)
            .add(/betterendforge:\w+_hammer/)
            .remove(exceptions);
    });
});
