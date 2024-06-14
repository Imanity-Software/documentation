---
sidebar_position: 6
title: Configurations
description: All RaytraceAntiXray configurations!
---

# Configurations

All RaytraceAntiXray configurations.

---

## **Files Structure** {#structure}

```
raytraced-antixray
├── custom (custom configuration directory)
│ └── ....
├── default-overworld.yml
├── default-nether.yml
├── default-end.yml
raytraced-entity-culling
├── custom (custom configuration directory)
│ └── ....
├── default-overworld.yml
├── default-nether.yml
├── default-end.yml
raytraced-tile-culling
├── custom (custom configuration directory)
│ └── ....
├── default-overworld.yml
├── default-nether.yml
├── default-end.yml
```

## Directories {#directories}

- **`custom`** - Custom configuration directory. 
    - *This directory will store every custom world configuration directory.*
    - *Any worlds with name matching the XXX.yml will be automatically selected.*

---

## Files {#files}

### **`core default-XXX.yml`** - Default configuration file for RaytraceAntiXray. {#core}

```yaml title="default-overworld.yml"
# This is the default config for the overworld,
# Should anti-xray be enabled?
enabled: true
# The minimum block height to execute anti xray.
minBlockHeight: -64
# The maximum block height to execute anti xray.
maxBlockHeight: 64
# Maximum chunk load per tick.
maxChunkLoadPerTick: 20
# The maximum raytrace distance.
maxRaytraceDistance: 64.0
# The block update radius when world interaction happens.
updateRadius: 2
# The delay to start raytracing after the player joins the server / teleport / world change.
raytraceDelay: 10
# The amount of threads to be used to execute the obfuscation.
obfuscateThreads: 2
# The amount of threads to be used to execute the raytracing.
raytraceThreads: 4
# The raytrace ticking rate for each player. (in ticks, 1 ticks = 50ms)
raytraceRate: 1
# Should the newly placed block in loaded chunks be raytraced?
# The term 'loaded chunk' means the chunk that is loaded by the player's client.
# Not the server's chunk loading.
# This feature is useful to prevent the player from using x-ray by another player's block placement.
# However, this feature will be a bit more resource-intensive.
tracePlacedBlock: true
# Should stop raytracing the block when the player reveals it?
revealStopRaytracing: false
# Should support third person view for the raytracing?
supportThirdPerson: true
# The blocks to be obfuscated.
obfuscateBlocks:
  - DIAMOND_ORE
  - EMERALD_ORE
  - GOLD_ORE
  - IRON_ORE
  - LAPIS_ORE
  - REDSTONE_ORE
  - COAL_ORE
  - COPPER_ORE
  - DEEPSLATE_COAL_ORE
  - DEEPSLATE_COPPER_ORE
  - DEEPSLATE_DIAMOND_ORE
  - DEEPSLATE_EMERALD_ORE
  - DEEPSLATE_GOLD_ORE
  - DEEPSLATE_IRON_ORE
  - DEEPSLATE_LAPIS_ORE
  - DEEPSLATE_REDSTONE_ORE
# The material to replace the obfuscated blocks.
replacementBlocks:
  0: STONE
  -64: DEEPSLATE
# The fake structures to be generated within the world,
# It contains several features such as fake ores,
# The goal is to mislead the cheaters.
fakeConfig:
  # The fake ores to be generated within the world.
  ores:
    - block: COAL_ORE
      replace: STONE
      veinCount: 10
      veinSize: 16
      minHeight: 0
      maxHeight: 128
    - block: IRON_ORE
      replace: STONE
      veinCount: 10
      veinSize: 8
      minHeight: 0
      maxHeight: 64
    - block: GOLD_ORE
      replace: STONE
      veinCount: 2
      veinSize: 8
      minHeight: 0
      maxHeight: 32
    - block: REDSTONE_ORE
      replace: STONE
      veinCount: 8
      veinSize: 7
      minHeight: 0
      maxHeight: 16
    - block: LAPIS_ORE
      replace: STONE
      veinCount: 1
      veinSize: 6
      minHeight: 0
      maxHeight: 32
    - block: DIAMOND_ORE
      replace: STONE
      veinCount: 1
      veinSize: 7
      minHeight: 0
      maxHeight: 16
    - block: EMERALD_ORE
      replace: STONE
      veinCount: 1
      veinSize: 1
      minHeight: 0
      maxHeight: 32
    - block: COPPER_ORE
      replace: STONE
      veinCount: 20
      veinSize: 8
      minHeight: 0
      maxHeight: 64
    - block: DEEPSLATE_COAL_ORE
      replace: DEEPSLATE
      veinCount: 5
      veinSize: 16
      minHeight: -64
      maxHeight: 0
    - block: DEEPSLATE_IRON_ORE
      replace: DEEPSLATE
      veinCount: 5
      veinSize: 8
      minHeight: -64
      maxHeight: 0
    - block: DEEPSLATE_GOLD_ORE
      replace: DEEPSLATE
      veinCount: 2
      veinSize: 8
      minHeight: -64
      maxHeight: 0
    - block: DEEPSLATE_REDSTONE_ORE
      replace: DEEPSLATE
      veinCount: 4
      veinSize: 7
      minHeight: -64
      maxHeight: 0
    - block: DEEPSLATE_LAPIS_ORE
      replace: DEEPSLATE
      veinCount: 1
      veinSize: 6
      minHeight: -64
      maxHeight: 0
    - block: DEEPSLATE_DIAMOND_ORE
      replace: DEEPSLATE
      veinCount: 1
      veinSize: 7
      minHeight: -64
      maxHeight: 0
    - block: DEEPSLATE_EMERALD_ORE
      replace: DEEPSLATE
      veinCount: 1
      veinSize: 1
      minHeight: -64
      maxHeight: 0
    - block: DEEPSLATE_COPPER_ORE
      replace: DEEPSLATE
      veinCount: 20
      veinSize: 8
      minHeight: -64
      maxHeight: 0
```

---

### **`entity-culling default-XXX.yml`** - Default configuration file for EntityCulling. {#entity-culling}

```yaml title="default-overworld.yml"
# This is the default config for the overworld,
# Should entity culling be enabled?
enabled: true
# The maximum distance to execute entity culling.
maxDistance: 64.0
# The bounding box expand for entity culling.
boundingBoxExpansion: 0.5
# The raytrace ticking rate for each player. (in ticks, 1 ticks = 50ms)
raytraceRate: 1
# Use Paper track entity & untrack entity events to track entities.
# This is more efficient than the default method which scans nearby entities.
usePaperEvents: true
# The entity types to be culled.
# List of entity types: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html
entityTypes:
  - PLAYER
  - ENDERMAN
  - BLAZE
  - WITCH
  - MINECART
  - MINECART_CHEST
  - MINECART_FURNACE
  - MINECART_MOB_SPAWNER
  - MINECART_TNT
  - ITEM_FRAME
  - GLOW_ITEM_FRAME
  - PAINTING
  - PRIMED_TNT
# The special settings for each entity type for entity culling.
specials:
  # Should the player only be sneaking to be culled?
  # This is due to player having a name tag, which is still visible when blocked by blocks.
  playerOnlySneaking: true
# The update rate for each entity type for entity culling.
updateRate:
  # The default rate for all entities.
  defaultRate: 3
  # The rate when viewer is moving.
  movingRate: 1
  # The rate when target is a player.
  playerRate: 1
  # The rate when target is a projectile.
  projectileRate: 1
```

---

### **`tile-culling default-XXX.yml`** - Default configuration file for TileCulling. {#tile-culling}

```yaml title="default-overworld.yml"
# This is the default config for the overworld,
# Should tile culling be enabled?
enabled: true
# The replacement block for the obfuscated blocks.
replacementBlock: AIR
# The blocks that should be added to tile culling raytracing.
tileEntities:
  - BEACON
  - BREWING_STAND
  - CHEST
  - COMMAND_BLOCK
  - STRUCTURE_BLOCK
  - COMPARATOR
  - CONDUIT
  - DAYLIGHT_DETECTOR
  - DISPENSER
  - DROPPER
  - ENCHANTING_TABLE
  - END_PORTAL_FRAME
  - FURNACE
  - LECTERN
  - HOPPER
  - JUKEBOX
  - NOTE_BLOCK
  - REPEATER
  - TRAPPED_CHEST
  - CRAFTING_TABLE
  - BARREL
  - BELL
  - JIGSAW
  - BEEHIVE
  - SCULK_SENSOR
  - CALIBRATED_SCULK_SENSOR
  - SCULK_CATALYST
  - SCULK_SHRIEKER
  - CHISELED_BOOKSHELF
  - DECORATED_POT
  - SMOKER
  - BLAST_FURNACE
  - CRAFTER
  - SPAWNER
  - TRIAL_SPAWNER
  - PISTON
  - SHULKER_BOX
  - SIGN
  - BANNER
  - HEAD
  - BED
# The minimum block height for tile culling.
minBlockHeight: -64
# The maximum block height for tile culling.
maxBlockHeight: 320
```

---
