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

let exampleList = [];

// Add all forge:hidden items
Ingredient.of("#forge:hidden").stacks.forEach((stack) => {
  exampleList.push(stack.id);
});

emiHideItems(exampleList);
