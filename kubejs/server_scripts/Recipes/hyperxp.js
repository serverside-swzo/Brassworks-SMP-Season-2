ServerEvents.recipes(event => {
  const heap = 'brassworkscore:super_experience_heap';
  const handle = 'create_sa:zinc_handle';

  event.shaped('brassworkscore:super_experience_sword', [
    'a',
    'a',
    'b'
  ], {
    a: heap,
    b: handle
  });

  event.shaped('brassworkscore:super_experience_shovel', [
    'a',
    'b',
    'b'
  ], {
    a: heap,
    b: handle
  });

  event.shaped('brassworkscore:super_experience_pickaxe', [
    'aaa',
    ' b ',
    ' b '
  ], {
    a: heap,
    b: handle
  });

  event.shaped('brassworkscore:super_experience_axe', [
    'aa',
    'ab',
    ' b'
  ], {
    a: heap,
    b: handle
  });

  event.shaped('brassworkscore:super_experience_heap', [
    'aa',
    'aa'
  ], {
    a: 'create_enchantment_industry:super_experience_nugget'
  });
});