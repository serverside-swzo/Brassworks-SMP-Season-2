// === Simple JSON save/load functions ===
function getPlayerData() {
  const path = 'kubejs/config/playerdata.json';
  const data = JsonIO.read(path);
  return data || {};
}

function savePlayerData(data) {
  const path = 'kubejs/config/playerdata.json';
  JsonIO.write(path, data);
}

function getPlayerValue(uuid, key, defaultValue) {
  const data = getPlayerData();
  if (!data[uuid]) return defaultValue;
  return data[uuid][key] ?? defaultValue;
}

function setPlayerValue(uuid, key, value) {
  const data = getPlayerData();
  if (!data[uuid]) data[uuid] = {};
  data[uuid][key] = value;
  savePlayerData(data);
}

// === Starter items ===
const starterItems = [
  { id: "numismatics:spur", count: 64 },
  { id: "numismatics:bank_terminal", count: 1 },
  { id: "create:builders_tea", count: 1 }
];

// === Function to give the starter items ===
function giveStarterItems(player) {
  for (const item of starterItems) {
    player.give(Item.of(item.id, item.count));
  }
  player.tell(Text.green("You have received your starter items!"));
}

// === Give items on first join ===
PlayerEvents.loggedIn(event => {
  const player = event.player;
  const uuid = player.uuid.toString();

  const hasReceivedItems = getPlayerValue(uuid, 'hasReceivedStarterItems', false);

  if (!hasReceivedItems) {
    setPlayerValue(uuid, 'hasReceivedStarterItems', true);
    giveStarterItems(player);

    event.server.scheduleInTicks(1, () => {
      event.server.runCommandSilent(
        `tellraw @a {"text":"${player.name.getString()} has joined the server for the 1st time!","color":"yellow"}`
      );
    });
  }
});

// === Manual command to give starter items ===
ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event;

  event.register(
    Commands.literal('starteritems')
      .requires(source => source.hasPermission(2))
      .executes(ctx => {
        const player = ctx.source.playerOrException;
        giveStarterItems(player);
        return 1;
      })
  );
});
