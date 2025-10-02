// Register the whitened_pulp item
StartupEvents.registry('item', event => {
  event.create('brassworks:whitened_pulp')
    .displayName('Whitened Pulp')
    .texture('brassworks:item/whitened_pulp')

  event.create('brassworks:crushed_ancient_debris')
    .displayName('Crushed Ancient Debris')
    .texture('brassworks:item/crushed_raw_ancient_debris')
    .tag('create:crushed_raw_materials')


})