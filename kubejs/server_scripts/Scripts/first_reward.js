const bundleItems = [
  { id: "numismatics:bank_terminal", count: 1 },
  { id: "numismatics:spur", count: 64 },
  { id: "create:builders_tea", count: 1 },
  {
    id: "minecraft:bundle",
    count: 1,
    components: {
      "minecraft:bundle_contents": [
        {
          id: "minecraft:written_book",
          count: 1,
          components: {
            "minecraft:written_book_content": {
              title: { raw: "📘 Welcome to Brassworks SMP!" },
              author: "swzo",
              resolved: true,
              pages: [
                { raw: '{"text":"Welcome to Brassworks SMP! Your adventure starts here."}' },
                { raw: '{"text":"Check your starter bundle for items and currency."}' }
              ]
            }
          }
        },
        { id: "numismatics:spur", count: 60 }
      ]
    }
  }
];

function giveStarterBundle(player) {
  for (const item of bundleItems) {
    if (item.components) {
      player.give(Item.of(item.id, item.count, { components: item.components }));
    } else {
      player.give(Item.of(item.id, item.count));
    }
  }

  player.tell(Text.green("You have received the Newcomer’s Starter Bundle!"));
}

PlayerEvents.loggedIn(event => {
  const player = event.player;

  if (!player.persistentData.hasReceivedBundle) {
    player.persistentData.hasReceivedBundle = true;
    giveStarterBundle(player);

    event.server.scheduleInTicks(1, () => {
      event.server.runCommandSilent(
        'tellraw @a {"text":"' + player.name.getString() + ' has joined the server for the 1st time!","color":"yellow"}'
      );
    });
  }
});

ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event;
  event.register(
    Commands.literal('loginbundle')
      .requires(source => source.hasPermission(2))
      .executes(ctx => {
        const player = ctx.source.playerOrException;
        giveStarterBundle(player);
        return 1;
      })
  );
});
