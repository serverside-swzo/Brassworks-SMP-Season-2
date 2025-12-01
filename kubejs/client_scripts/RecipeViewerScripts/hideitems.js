RecipeViewerEvents.removeEntries('item', event => {
    Ingredient.of('#forge:hidden').stacks.forEach(stack => {
        event.remove(stack.id);
    });
});