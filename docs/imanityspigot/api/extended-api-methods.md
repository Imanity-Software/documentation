---
sidebar_position: 600
title: Extended API Methods
---

# Extended API Methods

## **World**

You can found here all methods that ImanitySpigot added (or make them more advanced) for the developers about World.

`World#imanity()`

**All Methods**

- `CompletableFuture<Chunk> getChunkAtAsynchronously(int x, int z, AsyncPriority priority)` - Get Chunk asynchronously
  with urgent priority (which is the priority while get chunk block main)
- `CompletableFuture<Chunk> getChunkAtAsynchronously(Location location, AsyncPriority priority)` - Get Chunk
  asynchronously with urgent priority (which is the priority while get chunk block main)
- `CompletableFuture<Chunk> getChunkAtAsynchronously(Block block, AsyncPriority priority)` - Get Chunk asynchronously
  with urgent priority (which is the priority while get chunk block main)
- `CompletableFuture<Boolean> createExplosionAsync(Location location, float power)` - Create explosion using AsyncExplosion addition *(Enterprise Only)*
- `CompletableFuture<Boolean> createExplosionAsync(Location location, float power, boolean setFire)` - Create explosion using AsyncExplosion addition *(Enterprise Only)*
- `CompletableFuture<Boolean> createExplosionAsync(Location location, float power, boolean setFire, boolean breakBlocks)` - Create explosion using AsyncExplosion addition *(Enterprise Only)*

**Class:** `org.bukkit.World`

---

## **Entity**

You can found here all methods that ImanitySpigot added (or make them more advanced) for the developers about Entity.

**All Methods**

- `boolean canStacked()` - Can the entity be stacked with mobstacker system.
- `void setCanStacked(boolean canStacked)` - Set the ability for entity to be stacked with mobstacker system.
- `int getStackAmount()` - Get the stack amount of the mobstacker system.
- `void setStackAmount(int stackAmount)` - Set the stack amount of the mobstacker system.

**Class:** `org.bukkit.entity.Entity`

---

## **Mob**

You can found here all methods that ImanitySpigot added (or make them more advanced) for the developers about Mob.

**All Methods**

- `boolean isIntelligence()` - Allow you to know if the entity has intelligence (AI)
- `void setIntelligence(boolean intelligence)` - Allow you to set if the entity should have intelligence (AI)

**Class:** `org.bukkit.entity.Mob`

---

## **HumanEntity**

You can found here all methods that ImanitySpigot added (or make them more advanced) for the developers about
HumanEntity.

**All Methods**

- `void setBlocking(boolean blocking)` - Force the player to block or not (ie with a sword).

**Class:** `org.bukkit.entity.HumanEntity`

---

## **Player**

You can found here all methods that ImanitySpigot added (or make them more advanced) for the developers about Player.

`Player#imanity()`

**All Methods**

- `boolean isCanPickupExperienceOrbs()` - Can player pickup experience orbs
- `void setCanPickupExperienceOrbs(boolean canPickup)` - Set ability for player to pickup experience orbs
- `void setKnockback(Knockback knockback)` - Set the knockback profile for the player
- `void setFakeEnvironment(World.Environment environment)` - Set a fake environment to the player
- `void removeFakeEnvironment()` - Remove the fake environment applied to the player
- `World.Environment getFakeEnvironment()` - Get the fake environment of the player currently applied

**Class:** `org.bukkit.entity.Player`

---

## **Server**

You can found here all methods that ImanitySpigot added (or make them more advanced) for the developers about Server.

`Server#imanity()`

**All Methods**

- `PacketService getPacketService()` - Get PacketService for packet listeners
- `void registerPacketHandler(Plugin plugin, PacketHandler packetHandler)` - Register a packet handler
- `void unregisterPacketHandler(PacketHandler packetHandler)` - Unregister a packet handler
- `MovementService getMovementService()` - Get MovementService for movement listeners
- `void registerMovementHandler(Plugin plugin, MovementHandler movementHandler)` - Register a movement handler
- `void unregisterMovementHandler(MovementHandler movementHandler)` - Unregister a movement handler
- `MobAIService getMobAIService()` - Get MobAIService for non-player minecraft entity AI listeners
- `void registerMobAIHandler(Plugin plugin, MobAIHandler mobAIHandler)` - Register a mob AI handler
- `void unregisterMobAIHandler(MobAIHandler mobAIHandler)` - Unregister a mob AI handler
- `KnockbackService getKnockbackService()` - Get KnockbackService for player knockback purposes
- `void setKnockback(Player player, Knockback knockback)` - Set Player's knockback profile
- `Properties getProperties()` - Get Properties to manage server properties
- `void setMaxPlayers(int maxPlayers)` - Set max players count on your server

**Class:** `org.bukkit.Server`

---
