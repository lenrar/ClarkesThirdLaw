//priority: 1000

// Used to populate the buildWoodVariants constant - Add variants here to enable compat with various cutting mechanics.
// Be aware that you may need to specify exceptions in the loop below for this to work properly.
var woodVariantsToConstruct = [
    'minecraft:acacia',
    'minecraft:birch',
    'minecraft:dark_oak',
    'minecraft:jungle',
    'minecraft:oak',
    'minecraft:spruce',
    'minecraft:warped',
    'minecraft:crimson',

    'ars_nouveau:red_archwood',
    'ars_nouveau:green_archwood',
    'ars_nouveau:purple_archwood',
    'ars_nouveau:blue_archwood',

    'upgrade_aquatic:driftwood',
    'upgrade_aquatic:river',

    'autumnity:maple',
    'autumnity:sappy_maple',

    // 'twilightforest:twilight_oak',
    // 'twilightforest:canopy',
    // 'twilightforest:darkwood',
    // 'twilightforest:mangrove',
    // 'twilightforest:timewood',
    // 'twilightforest:transwood',
    // 'twilightforest:mining',
    // 'twilightforest:sortwood',

    'biomesoplenty:hellbark',
    'biomesoplenty:willow',
    'biomesoplenty:fir',
    'biomesoplenty:umbran',
    'biomesoplenty:magic',
    'biomesoplenty:dead',
    'biomesoplenty:palm',
    'biomesoplenty:jacaranda',
    'biomesoplenty:mahogany',
    'biomesoplenty:cherry',
    'biomesoplenty:redwood'
];

var twilightForestWoodMap = {
    twilight_oak: 'twilight_oak',
    canopy: 'canopy',
    darkwood: 'dark',
    mangrove: 'mangrove',
    timewood: 'time',
    transwood: 'trans',
    mining: 'mine',
    sortwood: 'sort'
};

var buildWoodVariants = [];

woodVariantsToConstruct.forEach((variant) => {
    var splitVariant = variant.split(':');
    var modId = splitVariant[0];
    var logType = splitVariant[1];
    var logSuffix, woodSuffix, logBlockStripped, woodBlockStripped, logBlock, woodBlock, plankBlock, slabBlock;

    var strippedPrefix = 'stripped';
    var plankSuffix = 'planks';
    var slabSuffix = 'slab';

    //suffix exceptions
    switch (logType) {
        case 'warped':
            logSuffix = 'stem';
            woodSuffix = 'hyphae';
            break;
        case 'crimson':
            logSuffix = 'stem';
            woodSuffix = 'hyphae';
            break;
        default:
            logSuffix = 'log';
            woodSuffix = 'wood';
    }

    logBlock = `${modId}:${logType}_${logSuffix}`;
    woodBlock = `${modId}:${logType}_${woodSuffix}`;
    logBlockStripped = `${modId}:${strippedPrefix}_${logType}_${logSuffix}`;
    woodBlockStripped = `${modId}:${strippedPrefix}_${logType}_${woodSuffix}`;
    plankBlock = `${modId}:${logType}_${plankSuffix}`;
    slabBlock = `${modId}:${logType}_${slabSuffix}`;

    switch (modId) {
        case 'ars_nouveau':
            plankBlock = 'ars_nouveau:archwood_planks';
            slabBlock = 'ars_nouveau:archwood_slab';
            break;
        default:
    }

    switch (logType) {
        case 'sappy_maple':
            logBlockStripped = 'autumnity:stripped_maple_log';
            woodBlockStripped = 'autumnity:stripped_maple_wood';
            plankBlock = 'autumnity:maple_planks';
            break;
        case 'driftwood':
            woodBlock = `${modId}:${logType}`;
            woodBlockStripped = `${modId}:${strippedPrefix}_${logType}`;
            break;
        default:
    }

    var woodVariant = {
        modId: modId,
        logType: logType,
        logBlock: logBlock,
        woodBlock: woodBlock,
        logBlockStripped: logBlockStripped,
        woodBlockStripped: woodBlockStripped,
        plankBlock: plankBlock,
        slabBlock: slabBlock
    };

    buildWoodVariants.push(woodVariant);
});
