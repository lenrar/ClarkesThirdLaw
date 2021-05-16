// //priority: 900

// const materialsToUnify = [
//     'iron',
//     'gold',
//     'copper',
//     'silver',
//     'zinc',
//     'brass',
//     'lead',
//     'tin',
//     'compressed_iron',
//     'nickel',
//     'aluminum',
//     'uranium',
//     'bronze',
//     'electrum',
//     'constantan',
//     'steel',
//     'osmium',
//     'diamond',
//     'lapis',
//     'emerald',
//     'quartz',
//     'coal',
//     'charcoal',
//     'obsidian',
//     'ender',
//     'invar',
//     'signalum',
//     'sulfur',
//     'cinnabar',
//     'niter',
//     'saltpeter',
//     'redstone',
//     'glowstone',
//     'coal_coke'
// ];

// const typesToUnify = ['nugget', 'ingot', 'gem', 'storage_block', 'ore', 'dust', 'gear', 'plate', 'rod'];

// events.listen('recipes', (event) => {
//     materialsToUnify.forEach((material) => {
//         typesToUnify.forEach((type) => {
//             if (!entryIsBlacklisted(material, type)) {
//                 var tagString = `#forge:${type}s/${material}`;
//                 var tag = Ingredient.of(tagString);
//                 if (tag.stacks.size() > 1) {
//                     var prefItem = getPreferredItemInTag(tag);
//                     event.replaceOutput({}, tagString, prefItem);
//                 }
//             }
//         });
//     });
// });
