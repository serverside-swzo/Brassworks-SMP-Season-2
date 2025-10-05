// Utility functions for reading/writing player data
function getPlayerDataclaims() {
  const path = 'kubejs/config/player_bonus_claims.json';
  const data = JsonIO.read(path);
  // Ensure we always have a usable object
  return data || {};
}

function savePlayerDataclaims(data) {
  const path = 'kubejs/config/player_bonus_claims.json';
  JsonIO.write(path, data);
}

// Get a player's bonus claims by UUID
function getBonusClaimsclaims(uuid) {
  const data = getPlayerDataclaims();
  return data[uuid]?.bonusClaims || 0;
}

// Update a player's bonus claims and save to file
function setBonusClaimsclaims(uuid, amount) {
  const data = getPlayerDataclaims();
  if (!data[uuid]) data[uuid] = {};
  data[uuid].bonusClaims = amount;
  savePlayerDataclaims(data);
}

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event;

  event.register(
    Commands.literal('useSpurs')
      .requires(src => src.hasPermission(0))
      .then(
        Commands.argument('amount', Arguments.INTEGER.create(event))
          .executes(ctx => {
            const player = ctx.source.player;
            const amount = Arguments.INTEGER.getResult(ctx, 'amount');

            if (amount <= 0) {
              player.sendSystemMessage(Text.red('Amount must be greater than 0'));
              return 0;
            }

            const spurId = 'numismatics:spur';
            const owned = player.inventory.count(Item.of(spurId));
            if (owned < amount) {
              player.sendSystemMessage(
                Text.red(`You need ${amount} spurs, but only have ${owned}.`)
              );
              return 0;
            }

            // Remove spurs via vanilla clear
            ctx.source.server.runCommandSilent(
              `clear ${player.name.string} ${spurId} ${amount}`
            );

            const cost = 1;
            // Compute bonus from this transaction
            const bonus = Math.floor(amount / cost);

            // === JSON-based player data ===
            const uuid = player.uuid.toString();
            const current = getBonusClaimsclaims(uuid);
            const newTotal = current + bonus;
            setBonusClaimsclaims(uuid, newTotal);

            // Build and run the OpenPac set command as the player with OP privileges
            const opCmd = `execute as ${player.name.string} run openpac player-config for ${player.name.string} set claims.bonusChunkClaims ${newTotal}`;
            ctx.source.server.runCommandSilent(opCmd);

            // Play sound feedback
            const sound = `execute at ${player.name.string} run playsound create:stock_ticker_trade player @a`;
            ctx.source.server.runCommandSilent(sound);

            player.sendSystemMessage(
              Text.green(`Used ${amount} spurs. Total bonus chunk claims is now ${newTotal}.`)
            );
            return 1;
          })
      )
  );
});
