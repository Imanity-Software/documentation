---
sidebar_position: 400
title: Properties
---

# Properties

## How it work?

This is a very useful class that allow you to edit the properties *(server.properties file)* of your server while he is
started.

`Server#imanity()#getProperties()`

- *void* #savePropertiesFile()
- *void* #setServerProperty(ServerProperty, Object value)

**All Properties** *(ServerProperty enum)*

```java
SPAWN_PROTECTION("spawn-protection"),
SERVER_NAME("server-name"),
FORCE_GAMEMODE("force-gamemode"),
NETHER("allow-nether"),
DEFAULT_GAMEMODE("gamemode"),
QUERY("enable-query"),
PLAYER_IDLE_TIMEOUT("player-idle-timeout"),
DIFFICULTY("difficulty"),
SPAWN_MONSTERS("spawn-monsters"),
OP_PERMISSION_LEVEL("op-permission-level"),
RESOURCE_PACK_HASH("resource-pack-hash"),
RESOURCE_PACK("resource-pack"),
ANNOUNCE_PLAYER_ACHIEVEMENTS("announce-player-achievements"),
PVP("pvp"),
SNOOPER("snooper-enabled"),
LEVEL_NAME("level-name"),
LEVEL_TYPE("level-type"),
LEVEL_SEED("level-seed"),
HARDCORE("hardcore"),
COMMAND_BLOCKS("enable-command-blocks"),
MAX_PLAYERS("max-players"),
PACKET_COMPRESSION_LIMIT("network-compression-threshold"),
MAX_WORLD_SIZE("max-world-size"),
IP("server-ip"),
PORT("server-port"),
DEBUG_MODE("debug"),
SPAWN_NPCS("spawn-npcs"),
SPAWN_ANIMALS("spawn-animals"),
FLIGHT("allow-flight"),
VIEW_DISTANCE("view-distance"),
WHITE_LIST("white-list"),
GENERATE_STRUCTURES("generate-structures"),
MAX_BUILD_HEIGHT("max-build-height"),
MOTD("motd"),
REMOTE_CONTROL("enable-rcon");
```

**Class:** `org.imanity.imanityspigot.Properties`

:::warning
Some properties are loaded in the cache of the spigot. That mean you will still have to restart your server in order to
apply the changes.
:::
