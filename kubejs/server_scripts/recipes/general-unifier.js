events.listen('item.tags', (e) => {
    e.remove('forge:plastic', 'rats:raw_plastic');

    e.add('forge:chests', 'iceandfire:ghost_chest');
    e.add('forge:chests/wooden', 'iceandfire:ghost_chest');

    e.add('forge:chocolatebar', 'create:bar_of_chocolate');

    e.add('forge:dusts/obsidian', 'create:powdered_obsidian');

    e.remove('forge:stone', 'quark:myalite');
    e.remove('forge:stone', 'quark:polished_myalite');
});

events.listen('block.tags', (e) => {
    e.add('forge:chests', 'iceandfire:ghost_chest');
    e.add('forge:chests/wooden', 'iceandfire:ghost_chest');

    e.remove('forge:stone', 'quark:myalite');
    e.remove('forge:stone', 'quark:polished_myalite');
});
