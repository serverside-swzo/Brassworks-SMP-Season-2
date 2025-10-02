/**
 *
 * @param {Array<string>} itemsToHide
 * Takes a list of item ids and hides them from EMI.
 */
function emiHideItems(itemsToHide) {
  console.info("Hiding items from EMI...");

  let obj = {
    removed: [],
  };

  itemsToHide.forEach((i) => {
    obj.removed.push(`item:${i}`);
  });

  JsonIO.write("kubejs/assets/emi/index/stacks/hidden_stacks.json", obj);
}

// In KubeJS 6.5, use ServerEvents.loaded instead of ServerEvents.startup
ServerEvents.loaded(event => {
  // Get all items with the forge:hidden tag
  const allItems = Ingredient.of('#forge:hidden').getItemIds();
  
  console.info(`Found ${allItems.length} items with the #forge:hidden tag`);
  
  // Hide all items with the forge:hidden tag
  emiHideItems(allItems);
});