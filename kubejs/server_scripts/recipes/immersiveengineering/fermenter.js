events.listen('recipes', (event) => {
    const lowAmountInputs = ['farmersdelight:pumpkin_slice'];

    const normalAmountInputs = [
        'alexsmobs:banana',
        'ars_nouveau:mana_berry',
        'autumnity:foul_berries',
        'farmersdelight:cabbage',
        'farmersdelight:cabbage_leaf',
        'farmersdelight:onion',
        'farmersdelight:tomato',
        'minecraft:beetroot',
        'minecraft:carrot',
        'minecraft:chorus_fruit',
        'minecraft:sweet_berries',
        'minecraft:wheat',
        'upgrade_aquatic:mulberry'
    ];

    lowAmountInputs.forEach((input) => {
        event.custom({
            type: 'immersiveengineering:fermenter',
            fluid: {
                fluid: 'immersiveengineering:ethanol',
                amount: 20
            },
            input: {
                item: input
            },
            energy: 1600
        });
    });
    normalAmountInputs.forEach((input) => {
        event.custom({
            type: 'immersiveengineering:fermenter',
            fluid: {
                fluid: 'immersiveengineering:ethanol',
                amount: 80
            },
            input: {
                item: input
            },
            energy: 6400
        });
    });
});
