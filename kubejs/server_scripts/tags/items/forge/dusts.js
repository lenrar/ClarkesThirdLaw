events.listen('item.tags', (event) => {
    event
        .get('forge:dusts')
        .add('immersiveengineering:dust_aluminum')
        .add('immersiveengineering:dust_lead')
        .add('immersiveengineering:dust_silver')
        .add('immersiveengineering:dust_nickel')
        .add('immersiveengineering:dust_uranium')
        .add('immersiveengineering:dust_constantan')
        .add('immersiveengineering:dust_electrum')
        .add('immersiveengineering:dust_coke')
        .add('immersiveengineering:dust_hop_graphite')
        .add('immersiveengineering:dust_saltpeter')
        .add('thermal:ender_pearl_dust')
        .add('astralsorcery:stardust')
        .add('#forge:dusts/flour');

    event.add('forge:dusts/starmetal', 'astralsorcery:stardust');
    event.get('forge:dusts/lapis').add('mekanism:dust_lapis_lazuli');

    event.get('forge:dusts').remove('minecraft:prismarine_shard');
    event.get('forge:dusts/prismarine').remove('minecraft:prismarine_shard');

    event.get('forge:dusts/gold_copper').add('#forge:dusts/gold').add('#forge:dusts/copper');
    event.get('forge:dusts/iron_aluminum').add('#forge:dusts/iron').add('#forge:dusts/aluminum');

    event.get('forge:dusts/netherite_scrap').remove('bloodmagic:sand_netherite');

    event.add('forge:dusts/flour', 'create:wheat_flour');
});
