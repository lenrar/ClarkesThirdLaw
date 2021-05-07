//priority: 1000

const modPriorities = [
    'minecraft',
    'thermal',
    'immersiveengineering',
    'mekanism',
    'create',
    'occultism',
    'botania',
    'quark',
    'bloodmagic',
    'eidolon',
    'refinedstorage'
];

const materialsToUnify = [
    'iron',
    'gold',
    'copper',
    'silver',
    'zinc',
    'brass',
    'lead',
    'tin',
    'compressed_iron',
    'nickel',
    'aluminum',
    'uranium',
    'bronze',
    'electrum',
    'constantan',
    'steel',
    'osmium',
    'diamond',
    'lapis',
    'emerald',
    'quartz',
    'coal',
    'charcoal',
    'obsidian',
    'ender',
    'invar',
    'signalum',
    'sulfur',
    'cinnabar',
    'niter',
    'saltpeter',
    'redstone',
    'glowstone',
    'coal_coke'
];

const refinedStorageItems = [
    'grid',
    'crafting_grid',
    'pattern_grid',
    'fluid_grid',
    'controller',
    'creative_controller',
    'network_receiver',
    'network_transmitter',
    'relay',
    'detector',
    'security_manager',
    'wireless_transmitter',
    'crafter',
    'crafting_monitor',
    'disk_manipulator',
    'crafter_manager'
];

const typesToUnify = ['nugget', 'ingot', 'gem', 'storage_block', 'ore', 'dust', 'gear', 'plate', 'rod'];

const itemsToDisable = [
    'eidolon:tallow',
    'quark:tallow',

    'mekanism:sawdust',
    'mekanism:dust_lapis_lazuli',

    'bloodmagic:growing_doubt',

    'ars_nouveau:glyph_decoy',
    'ars_nouveau:ritual',
    'ars_nouveau:ritual_parchment',
    'ars_nouveau:ritual_book',
    'ars_nouveau:arcane_road',

    'createaddition:copper_rod',
    'createaddition:gold_rod',
    'createaddition:iron_rod',
    'createaddition:brass_rod',

    'quark:pipe',
    'quark:potato_crate',
    'quark:beetroot_crate',
    'quark:carrot_crate',

    'thermal:beetroot_block',
    'thermal:carrot_block',
    'thermal:potato_block',
    'thermal:sugar_cane_block',
    'thermal:apple_block',

    'twilightforest:keepsake_casket'
];

const itemsToHide = [
    '@curios',
    '@kubejs',
    'eidolon:tallow',
    'quark:tallow',

    'bloodmagic:growing_doubt',

    'ars_nouveau:glyph_decoy',
    'ars_nouveau:ritual',
    'ars_nouveau:ritual_parchment',
    'ars_nouveau:ritual_book',
    'ars_nouveau:arcane_road',

    'createaddition:copper_rod',
    'createaddition:gold_rod',
    'createaddition:iron_rod',
    'createaddition:brass_rod',

    'ftbquests:barrier',
    'ftbquests:banner',
    'ftbquests:custom_icon',
    'ftbquests:missing_item',

    //#region Ores

    // lead -> thermal:lead_ore
    'eidolon:lead_ore',
    'mekanism:lead_ore',
    'immersiveengineering:ore_lead',

    //copper -> thermal:copper_ore
    'mekanism:copper_ore',
    'create:copper_ore',
    'iceandfire:copper_ore',
    'immersiveengineering:ore_copper',
    'occultism:copper_ore',

    // nickel -> thermal:nickel_ore
    'immersiveengineering:ore_nickel',

    // uranium -> immersiveengineering:ore_uranium
    'mekanism:uranium_ore',

    // tin -> thermal:tin_ore
    'mekanism:tin_ore',

    // silver -> thermal:silver_ore
    'iceandfire:silver_ore',
    'immersiveengineering:ore_silver',
    'occultism:silver_ore',

    //#endregion

    //#region Ingots

    // copper -> thermal:copper_ingot
    'create:copper_ingot',
    'occultism:copper_ingot',
    'iceandfire:copper_ingot',
    'immersiveengineering:ingot_copper',
    'mekanism:ingot_copper',

    // silver -> thermal:silver_ingot
    'occultism:silver_ingot',
    'iceandfire:silver_ingot',
    'immersiveengineering:ingot_silver',

    // nickel -> thermal:nickel_ingot
    'immersiveengineering:ingot_nickel',

    // lead -> thermal:lead_ingot
    'eidolon:lead_ingot',
    'mekanism:ingot_lead',
    'immersiveengineering:ingot_lead',

    //constantan -> thermal:constantan_ingot
    'immersiveengineering:ingot_constantan',

    // uranium -> immersiveengineering:ingot_uranium
    'mekanism:ingot_uranium',

    // tin -> thermal:tin_ingot
    'mekanism:ingot_tin',

    // steel -> immersiveengineering:ingot_steel
    'mekanism:ingot_steel',

    // steel -> thermal:bronze_ingot
    'mekanism:ingot_bronze',

    // electrum -> thermal:electrum_ingot
    'immersiveengineering:ingot_electrum',

    //#endregion

    //#region Nuggets

    // uranium
    'mekanism:nugget_uranium',

    // nickel
    'immersiveengineering:nugget_nickel',

    // copper
    'mekanism:nugget_copper',
    'create:copper_nugget',
    'iceandfire:copper_nugget',
    'immersiveengineering:nugget_copper',
    'occultism:copper_nugget',

    // tin
    'mekanism:nugget_tin',

    // electrum
    'immersiveengineering:nugget_electrum',

    // bronze
    'mekanism:nugget_bronze',

    // silver
    'iceandfire:silver_nugget',
    'immersiveengineering:nugget_silver',
    'occultism:silver_nugget',

    // constantan
    'immersiveengineering:nugget_constantan',

    // lead
    'eidolon:lead_nugget',
    'mekanism:nugget_lead',
    'immersiveengineering:nugget_lead',

    // steel
    'mekanism:nugget_steel',

    //#endregion

    //#region Blocks

    // uranium
    'mekanism:block_uranium',

    // copper
    'mekanism:block_copper',
    'create:copper_block',
    'iceandfire:copper_block',
    'immersiveengineering:storage_copper',
    'occultism:copper_block',

    // lead
    'eidolon:lead_block',
    'mekanism:block_lead',
    'immersiveengineering:storage_lead',

    // silver
    'iceandfire:silver_block',
    'immersiveengineering:storage_silver',
    'occultism:silver_block',

    // coal coke
    'immersiveengineering:coke',

    // steel
    'mekanism:block_steel',

    // bronze
    'mekanism:block_bronze',

    // nickel
    'immersiveengineering:storage_nickel',

    // charcoal
    'mekanism:block_charcoal',
    'quark:charcoal_block',

    // tin
    'mekanism:block_tin',

    // electrum
    'immersiveengineering:storage_electrum',

    //constantan
    'immersiveengineering:storage_constantan',

    //#endregion

    //#region Dusts

    // silver -> thermal:silver_dust
    'immersiveengineering:dust_silver',
    'occultism:silver_dust',

    // electrum -> thermal:electrum_dust
    'immersiveengineering:dust_electrum',

    // quartz -> thermal:quartz_dust
    'mekanism:dust_quartz',

    // sulfur -> thermal:sulfur_dust
    'eidolon:sulfur',
    'mekanism:dust_sulfur',
    'bloodmagic:sulfur',
    'immersiveengineering:dust_sulfur',

    // constantan -> thermal:constantan_dust
    'immersiveengineering:dust_constantan',

    // lapis -> thermal:lapis_dust
    'mekanism:dust_lapis_lazuli',

    // wood -> thermal:sawdust
    'mekanism:sawdust',
    'immersiveengineering:dust_wood',

    // copper -> thermal:copper_dust
    'mekanism:dust_copper',
    'immersiveengineering:dust_copper',
    'occultism:copper_dust',

    // nickel -> thermal:nickel_dust
    'immersiveengineering:dust_nickel',

    // gold -> thermal:gold_dust
    'mekanism:dust_gold',
    'bloodmagic:goldsand',
    'immersiveengineering:dust_gold',
    'occultism:gold_dust',

    // tin -> thermal:tin_dust
    'mekanism:dust_tin',

    // lead -> thermal:lead_dust
    'mekanism:dust_lead',
    'immersiveengineering:dust_lead',

    //uranium -> immersiveengineering:dust_uranium
    'mekanism:dust_uranium',

    // bronze -> thermal:bronze_dust
    'mekanism:dust_bronze',

    // emerald -> thermal:emerald_dust
    'mekanism:dust_emerald',

    // steel -> immersiveengineering:dust_steel
    'mekanism:dust_steel',

    // diamond -> thermal:diamond_dust
    'mekanism:dust_diamond',

    // iron -> thermal:iron_dust
    'mekanism:dust_iron',
    'bloodmagic:ironsand',
    'immersiveengineering:dust_iron',
    'occultism:iron_dust'

    //#endregion
];
