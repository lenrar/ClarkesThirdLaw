// priority: 80

onEvent('jei.hide.fluids', (event) => {
    global.fluidsToDisable.forEach((disabledFluid) => {
        event.hide(disabledFluid);
    });
});
