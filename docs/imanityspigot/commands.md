---
sidebar_position: 2
title: Commands
description: All the ImanitySpigot built-in commands!
---

# Commands

All the ImanitySpigot built-in commands.

## `/imanityspigot` {#imanityspigot}

The main command that contains features such as ChunkAnalyzer, Lag Spike Detector, Debug Information, and reload inside

**Permission:** *imanity.command.main*

**Aliases:** `/imanity`, `/ispigot`


**Usages**

### `reload` {#reload}

Reload ImanitySpigot configurations: config.yml, knockback profiles, and premium.yml

:::caution
Please note that this command will reload configurations but some options may be fixed, require a reboot to reload.
:::

### `syncload` {#syncload}

The main command for sync loads' catcher data. 
Sync load catcher is a tool to catch when an attempt to load chunk synchronicity, 
which is an action being very harmful when you have async chunk enabled. 

Using this tool, you can get stacktrace and their used count. 

If your server is lagging and have async chunk enabled but your server consumes chunks. 
Try using this tool to see if there is any sync load happening. We generally want to prevent any sync load from happening.

**This tool only being useful when you are a developer, and you understand how to read stacktrace.**

:::caution

In order to enable sync load catcher you will need to have
- Async Chunk **enabled**
- `-Dimanity.debug-sync-loads=true` in your startup flags
:::

#### `syncload export` {#syncload-export}

The command to export syncload data, It will export as a file inside the `debug` folder.

#### `syncload clear` {#syncload-clear}

The command to clear syncload data

---

### `dumpChunks` {#dumpchunks}

The tool to dump information for every chunk, useful to search how each chunks got generated.

It will cache chunk coords and chunk creation stacktrace for scheduled chunks and loaded chunks.
If you find that your server has loaded an unreasonable amount of chunks, try to use this tool to search.

**This tool only being useful when you are a developer, and you understand how to read stacktrace.**

:::caution

In order to enable sync load catcher you will need to have
- Async Chunk **enabled**
- `-Dimanity.debug-sync-loads=true` in your startup flags
:::

---

:::info
Chunk Analyzer is a **Premium only** feature.
:::

### `chunkAnalyzer` {#chunkanalyzer}

The tool to analyze chunk tick time data. 
It is very useful to see what chunk is causing server lag, you will have to start the analyzer for analyzer to cache tick time data, and stop it to check cached information.

#### `chunkAnalyzer start` {#chunkanalyzer-start}

Start the chunk analyzer.

#### `chunkAnalyzer stop` {#chunkanalyzer-stop}

Stop the chunk analyzer.

#### `chunkAnalyzer show` {#chunkanalyzer-show}

Display analyzer information. This command will sort information and highlight chunks that have unusual tick times. Give you the ability to find lags quickly.

#### `chunkAnalyzer export` {#chunkanalyzer-export}

Export analyzer information. It will export as JSON format, and you can save it or share it to anyone for situations such as discussing with developers. 

You can use the flag `-u` to upload the JSON to [code.imanity.dev](https://code.imanity.dev)

:::note
Please note that uploading to online site will cap maximum amount of chunks to export at _50_.
:::

#### Display / Export Shared Flags {#display--export-shared-flags}

| Flag | Input Type                                                     | Description                                                                                                                                                                                                                                          |
|------|----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| -t   | `ALL`<br/>`ENTITIES`<br/>`TILE_ENTITIES`<br/>`BLOCK_OPERATION` | Specify sort targets:<br/>`ALL` sort by every types of target combined<br/>`ENTITIES` sort by Entities Tick Time<br/>`TILE_ENTITIES` sort by Tile Entities Tick Time<br/>`BLOCK_OPERATION` sort by Block Tick Time.                                  |
| -m   | BY_TOTALBY_AVGBY_MAX                                           | Specify sort methods:<br/>`BY_TOTAL` sort by the total tick spent combined within the analyzer period.<br/>`BY_AVG` sort by the average tick time during the analyzer period.<br/>`BY_MAX` sort by the maxmium tick time during the analyzer period. |
| -w   | World Name                                                     | Specify the world to show/export with                                                                                                                                                                                                                |
| -e   | Entity / Tile Entity Type Name                                 | Specify target with type of Entity or Tile Entities                                                                                                                                                                                                  |
| -c   | Number                                                         | Specify maximum count to show/export                                                                                                                                                                                                                 |

---

:::info
Lag spike detection is a **Premium only** feature.
:::

### `lagSpike` {#lagspike}

The tool to detect lag spike happens during runtime, this is the main command to control on or off for the feature

#### `lagSpike enable` {#lagspike-enable}

Enable lag spike detector.

#### `lagSpike enable` {#lagspike-enable-1}

Disable lag spike detector.

---

## `/ping` {#ping}

Check connection ping from the **command sender**, must be executed by Player.

**Permission:** `imanity.command.ping`

### `/ping <player name>` {#ping-player-name}

Check connection ping from a target player, this can be executed in console.

---

## `/setMaxSlot <number>` {#setmaxslot-number}

Set current max player limit to the target number.

**Permission:** `imanity.command.setmaxslot`

**Aliases:** `/setMaxSlot`, `/setslot`, `/setslots`

---

## `/MobAI` {#mobai}

Toggle Mob AI in game.

**Permission:** `imanity.command.mobai`

**Aliases:** `/ai`, `/toggleAI`, `/toggleMobAI`