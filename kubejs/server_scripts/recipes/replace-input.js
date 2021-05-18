// priority: 100

events.listen('recipes', function (event) {
    ['quark:tallow', 'eidolon:tallow', 'occultism:tallow'].forEach((tallow) => {
        event.replaceInput({}, tallow, '#forge:tallow');
    });

    event.replaceInput({}, 'refinedstorage:silicon', '#forge:silicon');
    event.replaceInput({}, 'refinedstorage:crafter', '#refinedstorage:crafter');

    event.replaceInput({}, 'thermal:cinnabar', '#forge:gems/cinnabar');
    event.replaceInput({}, 'thermal:sulfur', '#forge:gems/sulfur');
    event.replaceInput({}, 'thermal:apatite', '#forge:gems/apatite');
    event.replaceInput({}, 'thermal:niter', '#forge:gems/niter');
    event.replaceInput({}, 'thermal:coal_coke', '#forge:gems/coal_coke');

    event.replaceInput({}, 'ars_nouveau:mana_gem', '#forge:gems/mana');

    event.replaceInput({}, 'immersiveengineering:slag', '#forge:slag');
    event.replaceInput({}, 'immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium');


    event.replaceInput({}, 'thermal:slag', '#forge:slag');

    event.replaceInput({}, 'minecraft:iron_ore', '#forge:ores/iron');
    event.replaceInput({}, 'minecraft:gold_ore', '#forge:ores/gold');

    event.replaceInput({}, 'create:wheat_flour', '#forge:dusts/flour');
    event.replaceInput({}, 'create:dough', '#forge:doughs');
    event.replaceInput({}, 'create:bar_of_chocolate', '#forge:chocolate_bars');

    event.replaceInput({}, 'mekanism:sawdust', '#forge:dusts/wood');
    event.replaceOutput({}, 'mekanism:sawdust', '#forge:dusts/wood');
    event.replaceOutput({}, 'mekanism:dust_lapis_lazuli', '#forge:dusts/lapis');
    event.replaceInput({}, 'mekanism:dust_lapis_lazuli', '#forge:dusts/lapis');

    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:stone', '#forge:stone', true);
    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:stone', '#forge:stone', true);
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'powah:uraninite', '#forge:ingots/radioactive');
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:netherrack', '#forge:netherrack');
    event.replaceInput({}, 'minecraft:nether_brick', '#forge:ingots/nether_brick');

    event.replaceInput({ id: 'tetra:hammer/stone' }, 'minecraft:cobblestone', '#quark:stone_tool_materials');

    event.replaceInput({ mod: 'buildinggadgets' }, '#forge:ingots/iron', '#forge:ingots/iron_aluminum');

    event.replaceInput(
        { type: 'minecraft:crafting_shaped', output: 'minecraft:piston' },
        '#forge:cobblestone',
        '#quark:stone_tool_materials'
    );

    event.replaceInput(
        { id: 'bloodmagic:alchemytable/basic_cutting_fluid' },
        'minecraft:potion',
        Item.of('minecraft:potion', { Potion: 'minecraft:water' })
    );

    event.replaceInput(
        { id: 'create:mixing/chromatic_compound' },
        'create:powdered_obsidian',
        Ingredient.of('#forge:dusts/obsidian')
    );

    event.replaceInput({ id: 'minecraft:nether_bricks' }, '#forge:ingots/nether_brick', 'minecraft:nether_brick');
    event.replaceInput(
        { id: 'thermal:machine/press/packing2x2/press_nether_bricks_packing' },
        '#forge:ingots/nether_brick',
        'minecraft:nether_brick'
    );

    
    event.replaceInput({mod: 'neapolitan'}, 'minecraft:wheat', Item.of('create:wheat_flour'))
    event.replaceInput({mod: 'farmersdelight'}, 'minecraft:wheat', Item.of('create:wheat_flour'))
    event.replaceInput({mod: 'autumnity'}, 'minecraft:wheat', Item.of('create:wheat_flour'))

    event.replaceInput({mod: 'thermal'}, 'thermal:strawberry', Item.of('neapolitan:strawberries'))
    // event.replaceInput({output: '#supplementaries:cookies'}, 'minecraft:wheat', 'create:wheat_flour')
});
