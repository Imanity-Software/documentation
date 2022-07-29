---
id: files-structure-and-example-config
sidebar_position: 6
title: Files Structure and Example
description: View ImanitySpigot file structure and example config!
---

# Files Structure and Example

The current displayed of the **Rancha** configuration is version **`2022.05.3 BUILD 4`**

The current displayed of the **ImanitySpigot3** configuration is version **`2022.05.1 BUILD 2`**

---

## **Files Structure**

```
imanity
├── addition (If you have additions)
│ └── ....
├── knockback
│ └── .... (You knockback profile will go here)
├── worlds
│ └── default.yml
├── config.yml
├── rancha.yml
├── knockback.yml
└── premium.yml (If you have Premium plan)
```

---

### config.yml
```yaml title="imanity/config.yml"
# -------------------------------------------------------
# Imanity Software © 2019 ~ 2022
#  
# Welcome to the main configuration of ImanitySpigot3! (config.yml)
# As you can see, there's tons to configure. Some options may impact gameplay, so use
# with caution, and make sure you know what each option does before configuring.
# If you need help with the configuration or have any question related to ImanitySpigot,
# join our discord. Happy Configuration!
#  
# Discord: https://discord.gg/GBZKR3nn
# -------------------------------------------------------

# Automatically download and install spark profiler plugin?
# Spark: https://www.spigotmc.org/resources/spark.57242/
autoDownloadSpark: true

# Should tnt entities be hidden? (Just before they explode)
hideTntEntities: false

# Should allow the server to change the weather?
weatherChange: true

# Should let the server decay the leaves of the trees?
leavesDecay: true

# Should let cactus damage entities?
cactusDamage: true

# Should players hear the sounds of other players' footsteps?
footStepSound: true

# Should allow the infinity water sources?
# Can be done by placing water sources in the corners of a 2x2x1 area
# By default this is possible in minecraft only with water
infiniteWaterSource: true

# Should allow the infinity lava sources?
# Can be done by placing lava sources in the corners of a 2x2x1 area
# By default this is not possible in minecraft (possible only with water)
infiniteLavaSource: false

# This option will completely skip item stack's nbt data from reading
# For the purpose to prevent packet crasher
# This may somehow cause inconsistent behaviour for some plugin/vanilla stuff
# If you had some issue related to item, try turning this option off.
dontReadItemNBTDataFromPackets: true

# This option buffers the number of logins which will attempt to join the world per tick
# this attempts to reduce the impact that join floods has on the server
maxLoginProcessPerTick: 3

# In 1.8 durability is much lower than previous versions (1.7)
# You can here modify the damages affected to durability of items
# This can be double with '.'
# Examples: 
#    - 1 will not change anything since the damages will be multiply by 1 (no change)
#    - Choosing a number under 1 will increase the durability of the items (reduces damage)
#    - ex: 1.6 will multiply the damages by 1.6, ex: durability damage original: 8 ==> 13
#    - Choosing a number above 1 will reduce the durability of the items (increases damage)
#    - ex: 0.5 will multiply the damages by 0.5, ex: durability damage original: 8 ==> 4
#    - 0 will make items never break.
# NOTE: 
#    - Minecraft durability is Integer, that means durability is impossible to have decimal
#    - So the result of damage will be rounded, for example:
#    - 8 x 1.3 = 10.4 ==> 10
#    - 8 x 0.6 = 4.8 ==> 5
durabilityMultiplier: 1.0

# Force updating inventory / item slot to player
# whenever the final durability isn't the same as vanilla behaviour expected.
# It could caused by either durabilityMultiplier from the above or plugin changing the durability.
# While updating inventory itself is harmless, but minecraft client will stop any item action upon the update happens.
# For example eating food will be stopped, so if the player got damaged and the player is wearing armor,
# A durability update happens to the armor, it will cause the player's eating food action being cancelled,
# And the eating timer will reset, which is a bad behaviour for some servers.
forceDurabilityUpdating: true

# Should hide the IP address of the players in the console?
hideIPAddressInConsole: false

# This option will remove the red screen & death animation when a player died
# Completely remove the delay when died.

# If you are using Via-Version for 1.9+ Compatibility
# You may want to disable the option 'use-new-deathmessages' in Via-Version config.yml
# Since that option added death screen manually, disable it will fix the problem
instantRespawn: false

# Use the old style enchanting from pre-1.7
# That has no lapis required, and enchanting level will randomly picked after refresh
# In 1.8+ client they will automatically receive lapis in enchanting table
# As a visual item in order for client to enchant without problems.
oldEnchanting: false

# Should the AI of the entities be enabled?
# Set this to false will override every API usages (MobAIHandler & MobGoal)
# This option can be toggled in-game thanks to /mobai command from the spigot
mobAI: true

# In Minecraft 1.7 and 1.8
# Carpet block has different behaviour
# Which in 1.7 carpet is 0 height and 1.8 is 1/16 of block height
# This will enforce block to be zero height in any version.
# If you seen any false ban from anti-cheat related to carpet, try disabling it.
zeroHeightCarpets: true

# Should Vanish Patch enabled?
# Vanish patch will made everything from hidden player to be invisible from the receive player's vision
# Including every potion, item, arrow and projectile shooting by the hidden player will not appear
# This feature is very useful for Practice Plugin that can work for 1 arena multiple matches.
#  
# IMPORTANT: Block break & place and Entity spawned by hidden player will still be visible
vanishPatch: true

# Should TCPNoDelay be enable?
tcpNoDelay: true

# Should entity collisions be enable?
# While disabling entity collision, that means collision detection on move to entity will be disabled
# So in this case, If you have a lot of entity in same region
# You will get significant performance boost
entityCollisions: true

# Should players need permission to tab the /version command? (Permission: bukkit.command.version.tab)
permissionToTabVersion: true

# Should enable Entity Movement Cache?
# Entity Movement Cache is the system that will cache entities movement data
# And re-use it if the movement information is exactly the same
entityMovementCache: false

# Support for https://timin.gs/
# timin.gs is a fork of aikar's timings
# It provides better UI and flexibility
timinGsSupport: true

# Ability to save player's information like health, hunger inventory etc
# By vanilla it's enabled
# If you disabled it everytime the player joined the server
# Server will see the player as fresh new player
shouldSavePlayerData: true

# Should Player Data Saving be Asynchronous?
# Player Data Saving was used to be in Main Thread
# Doing it in Asynchronous could save a little of performance.
asyncPlayerDataLoadingAndSaving: true

# Should Player Data be cached in memory when it saved?
# If this option is enabled
# Server will have the ability to search data from cache when loading
# Reduce the time trying to search from file.
cachingPlayerData: false

# This option will use Panda Redstone algorithm by md_5
# Which is a heavy optimised version of vanilla redstone algorithm
betterRedstoneAlgorithm: true

# Light Random Algorithm is a much faster algorithm compare to old Java Random algorithm
# But while using it, It might break minecraft original seed generation
# Chunk generation seed will be different to vanilla
lightRandomAlgorithm: true

# What's the maximum possible NBT data can player send to the server?Vanilla's limit used to be 2097152, which is 2MBIt's a significant amount where most of players wouldn't be able to sentUnless they are using some hack client attempts to crash the server.
nbtPacketLimit: 51200

# By default in minecraft you can only send messages of 100 characters in chat
# But many modified clients allow you to send more.
# Enabling this option will allow clients to send messages with a 256 character limit instead of 100
upTo256CharsInChat: false

# In regular spigot 1.8 there is a 'bug' also called 'NoDelayFood'.
# This is caused when you eat and drop item at the same time which can cause unexpected things like
# Eating while sprinting or eating while doing nothing.
# Enabling this option will make this glitch not working anymore.
eatAndDropFix: false

# Should the server be processing packets while sleeping?
# Normally packets are stacked into a queue
# And flush the queue at once at the starting of the tick.
# That means at maximum a packet can be delayed up to 50ms
# Which can be noticeable for competitive gameplay.
#  
# This will try to process packet whenever server is free to minimize the delay of packets.
# Disadvantage: this may cause higher cpu usage.
processPacketWhileSleeping: true

# Here you can configure the optimizations about cannoning/tnt/explosions
cannonOptimizations:

  # This section allow you to edit how the merging system work
  # The merging system destroys the TNT entities considered 'useless' according to the configurable options below.
  # This will allow the server to have to manage fewer entities and therefore to handle with better performance the explosions on the server.
  # Note that editing a lot the default (options) values can in some cases, cause the most complex cannons to malfunction.
  merge:
    enabled: true
    maxTime: 1.15
    size: 0.15

# Configurations about Projectiles Behaviours
projectiles:

  # Configuration about Snowball projectile
  snowball:

    # Should Snowball have to ability to go through an opening Fence Gate?
    throughFenceGate: false

    # Should Egg have to ability to go through a Tripwire?
    # Note that a Tripwire is not a Tripwire Hook.
    # Tripwire is a string as block (string placed).
    throughTripwire: false

  # Configuration about Egg projectile
  egg:

    # Should Snowball have to ability to go through an opening Fence Gate?
    throughFenceGate: false

    # Should Egg have to ability to go through a Tripwire?
    # Note that a Tripwire is not a Tripwire Hook.
    # Tripwire is a string as block (string placed).
    throughTripwire: false

    # Should Egg hatching when throw?
    hatching: false

# Configurations about Ender Pearl Behaviours
enderPearl:

  # Should Ender Pearl have to ability to go through an opening Fence Gate?
  throughFenceGate: false

  # Should Ender Pearl have to ability to go through a Tripwire?
  # Note that a Tripwire is not a Tripwire Hook.
  # Tripwire is a string as block (string placed).
  throughTripwire: false

  # Should Ender Pearl spawns Endermite?
  spawnEndermite: false

  # Taliban Pearl is a kind of mechanism that you can pearl through blocks in certain situation 
  # and move you to smooth position so you won't get stuck in blocks
  # Example: https://www.youtube.com/watch?v=XX4-AzyxwTE
  talibanPearl:

    # Should taliban pearl be enabled?
    enabled: false

    # Allow slabs to execute Taliban Pearl behaviour
    slabCanThrough: true

    # Allow stairs to execute Taliban Pearl behaviour
    stairsCanThrough: true

    # Other Block types that are allowed to execute Taliban Pearl behaviour
    blockCanThrough:
    - ENCHANTMENT_TABLE
    - ENDER_PORTAL_FRAME

    # This is a value to determine is Player attempting to perform taliban pearl
    # The higher the value is, the more straight the pearl should be shoot
    horizontalMotionTaliban: 0.05

  # The AntiGlitch system for Ender Pearls
  # It will cache valid position every tick Ender Pearl move
  # And use the last cached valid position for teleportation.
  antiGlitch:

    # Should taliban pearl be enabled?
    enabled: false

    # Prevent Ender Pearl from Suffocating to blocks.
    antiSuffocation: false

    # If Pearl's current position is a part of prohibited pearl blocks
    # The position will not be determined as valid position.
    prohibitedPearlBlocks:
    - FENCE
    - FENCE_GATE

# The Compression Type for Chunk Region files
# Existing types:
# GZIP - The very old compression type from very old minecraft, Slowest and not really recommended
# ZLIB - The latest compression library used by minecraft, The default compression library on 1.8, Not the best compression library but best compatibility for Minecraft World
# ZSTD - The new compression library, It's the best compression library but the world will only work with ImanitySpigot, Very recommended if you are building your server from ground up with ImanitySpigot
# NONE - No compression library, No compression time waste but the region file will be extremely big, VERY not recommended
compressType: ZLIB

# Asynchronous Entity AI Path Searching
asyncPathSearching:

  # Should enable Asynchronous Entity AI Path Searching?
  enabled: true

  # How much threads do you want for Path Searching?
  pathSearchThreads: 2

# Asynchronous Chunk Load and Terrain Generation
# Terrain Generation is the first stage of Minecraft Chunk Generation

# This option will completely separate load and generation off from main thread
# Provide Significant performance boost.
asyncChunkLoads:

  # Should enable Asynchronous Chunk Load/Terrain Generation?
  enabled: true

  # Should let Generation happen in Asynchronous?
  asyncChunkGeneration: true

  # Should separate threads for chunk per world?
  chunkGeneratePerWorld: true

  # How much threads do you want for Chunk Loading?
  chunkLoadThreads: 8

  # How much threads do you want for Chunk Generating?
  # THIS OPTION IS VERY EXPERIMENTAL.
  chunkGenerateThreads: 2

  # Should we include the process of lighting calculation within async chunk generation?
  # This option will made chunk generation much more stable
  # But at the same time it will slow down generation speed
  # This option will not affect server performance
  includingLighting: true

  # The range in chunks around spawn to keep loaded
  keepSpawnLoadedRange: 8

  # Should wait for chunks to load on start or bukkit world creating?
  waitForChunks: true

# Asynchronous Lighting Updates
# Minecraft always had a task to update lighting based on sky light or block light
# But when the task stack up, It could cause potential lag spikes
# By enabling Async Lighting would solve the issue
#  
# But Keep in mind, Async Lighting could cause entity not being spawned or not spawning correctly
# Since Lighting Update isn't forced to update instead it will update when it's ready and async task finished
# And before Lighting Update completed Minecraft wouldn't let the chunk spawn mobs naturally.
asyncLightUpdates:

  # Should enable async lighting updates?
  enabled: false

# Parallel Entity Track Processing
# Entity Tracking is the way minecraft send entity data to players
# Letting Player's Client know each entity's location and their information
#  
# But by default, Entity Track was process with in Main Thread
# Which means when there is large amount of entity processing, It could cause the server lag
#  
# What we do now is we made it into a thread safe structure
# And when minecraft server called to do entity tracking update
# We will block the main thread and start assign work to each parallel threads
# This is be significant performance boost if you have large amount of entities.
parallelEntityTracking:

  # Should enable Parallel Entity Tracking?
  enabled: true

  # How much thread do you want for Entity Tracking?
  entityTrackerThreads: 4

# EXPERIMENTAL FEATURES
#  
# Should we use server side hit detection?
serverSideHitDetection:

  # Should server side hit detection be enabled?
  enabled: false

  # How far can player reach to hit victims?
  reach: 3.0

  # The offset to rollback positions for ping difference
  lagPingOffset: 100

# The built-in book exploit crash
bookExploitPatch:

  # What's the maximum possible pages player can write?
  maxBookPages: 2560

  # The multiplier for amount of bytes allowed to write per page
  maxBookTotalSizeMultiplier: 0.98

```

### rancha.yml
```yaml title="imanity/rancha.yml"
# -------------------------------------------------------
# Imanity Software © 2019 ~ 2022
#  
# Welcome to the Rancha configuration of ImanitySpigot3! (rancha.yml)
# If you need help with the configuration or have any question related to ImanitySpigot,
# join our discord. Happy Configuration!
#  
# Discord: https://discord.gg/GBZKR3nn
# -------------------------------------------------------

# The path for License Key File
# By this option you can set it to a static location
# Which allowing you to using same license key file across the machine.
licenseKeyFilePath: imanity/.license

# Dependencies version controlThis area provides the ability to upgrade the dependency to a more recent versions
# Upgrade dependency allow you to access modern features and minor performance improvement
# However, it may happen that the plugins is not supported
# Please consider it before upgrading.
dependencies:

  # The Google Json Library
  # LEGACY -> 2.2.4 (MC1.8)
  # MODERN -> 2.8.7
  gson: LEGACY

  # The MySql Connector Driver Library
  # LEGACY -> 5.1.14 (MC1.8)
  # MODERN -> 8.0.25
  mysqlDriver: LEGACY

  # The Netty Library
  # LEGACY -> 4.0.23.Final (MC1.8)
  # MODERN -> 4.1.60.Final
  #  
  # IMPORTANT NOTE: To run ImanitySpigot3 for java 9+, Netty will be forced to be modern.
  netty: LEGACY

# The amount of threads to download Spigot JAR
# Bumping download thread count could provide higher download speed
downloadThreads: 1

# Automated Update system
# This area provides the ability to keep your spigot JAR up to date by automatically download updates.
automated:

  # Automatically update to latest build of your current release when new build were detected
  updateToLatestBuild: true

  # Automatically update to latest LTS release when new LTS version were detected
  # This is not recommended if you care about stability
  # Since each LTS version could have potential changes.
  updateToLatestLTS: false

  # Automatically update to latest release when new version were detected
  # This is very NOT recommended
  # It will update to whatever version, Including LTS or non-LTS
  updateToLatestVersion: false

# The current version of ImanitySpigot3
# DO NOT TOUCH IT IF YOU DON'T KNOW WHAT YOU ARE USING
spigotJarVersion: 2022.05.3 BUILD 4

# The scheduled updated version of ImanitySpigot3
# DO NOT TOUCH IT IF YOU DON'T KNOW WHAT YOU ARE USING
scheduledUpdateVersion: none

# ImanitySpigot3 has updated Netty to the latest version
# But it also comes with come incompatible issues with plugins
# Since in older versions, netty usually copies bytes to heap buffer with allows you to read byte array
# But in newer versions, It will return direct buffer instead
# So this option patch netty to use heap unpooled buffer, So it could fix the issue
forceNettyUseUnpoolBuffer: true

```

### knockback.yml
```yaml title="imanity/knockback.yml"
# -------------------------------------------------------
# Imanity Software © 2019 ~ 2022
#  
# Welcome to the knockback configuration of ImanitySpigot3! (knockback.yml)
# If you need help with the configuration or have any question related to ImanitySpigot3 or ImanityKnockback,
# join our discord. Happy Configuration!
#  
# Discord: https://discord.gg/GBZKR3nn
# -------------------------------------------------------

# Should knockback be automatically save when ever a change being done?
autoSave: true

# The global knockback profile that will be applied to every players and entities
globalKnockback: vanilla

# The editor type that will be applied when you use /kb
# V2 - The classic command editor that only works with v2 knockback profiles.
# V3 - The modern chat editor with modern features (default).
editorType: V3

# The pastebin dev key to publish content into pastebin.
# You can find your dev key in https://pastebin.com/doc_api#1
# Make sure you logged in before doing so.
pastebinDevKey: ''

```

### premium.yml
```yaml title="imanity/premium.yml"
# -------------------------------------------------------
# Imanity Software © 2019 ~ 2022
#  
# Welcome to the Premium configuration of ImanitySpigot3! (premium.yml)
# If you need help with the configuration or have any question related to ImanitySpigot,
# join our discord. Happy Configuration!
#  
# Discord: https://discord.gg/GBZKR3nn
# -------------------------------------------------------

# The server name or version (this appear when you ping the server or in the server list)
serverName: ImanitySpigot3

# Custom /version message
# Placeholder available:
#    <version> - Current version of the spigot
version:
- '&7&m*---------------&f &b&lImanity - Software &f&7&m---------------*'
- ' '
- '&fThis Server is currently running &bImanitySpigot3 Premium'
- '&fVersion: &b<version>'
- ' '
- '&7&m*--------------------------------------------------*'

# Custom /tps command
# Placeholders available:
#    <tps5s> - TPS the last 5 seconds
#    <tps10s> - TPS the last 10 seconds
#    <tps1m> - TPS the last minute
#    <tps5m> - TPS the last 5 minutes
#    <tps15m> - TPS the last 15 minutes
#    <fullServerTick> - Time that the server take to run 1 tick in ms
#    <worldTick> - Time that the worlds take to run 1 tick in ms
#    <currentOnline> - Number of players currently online
#    <maxOnline> - Number of the max slots of the server
#    <uptime> - Time since the server is started
#    <entities> - Entities count of the the current world of the player or the first world if executed by console
#    <loadedChunks> - Chunks count of the current world of the player or the first world if executed by console
#    <world> - Current world name of the player or the first world if executed by console
#    <usedMemory> - Memory currently used by the server
#    <maxMemory> - All the memory available for the server
#    <freeMemory> - Memory free for the server
#    <availableProcessors> - Processors available for the server
#    <processCpuLoad> - CPU process loaded
#    <rightArrow> - Basically just: »
#    <leftArrow> - Basically just: «
tpsCommand:
- '&7&m*---------------&f &b&lImanity - Software &f&7&m---------------*'
- ' '
- '&bTPS &7(5s, 10s, 1m, 5m, 15m) &8<rightArrow> <tps5s>, <tps10s>, <tps1m>, <tps5m>,
  <tps15m>'
- '&bLogic Tick Time &8<rightArrow> <fullServerTick>'
- '&bWorld Tick Time &8<rightArrow> <worldTick>'
- '&bOnline Players &8<rightArrow> &a<currentOnline>&7/&a<maxOnline>'
- '&bUptime &8<rightArrow> &a<uptime>'
- '&bEntities &8<rightArrow> &f<entities>'
- '&bChunks Loaded &8<rightArrow> &f<loadedChunks> &7(<world>)'
- '&bMemory &8<rightArrow> &a<usedMemory>/<maxMemory>'
- '&bCPU Information &8<rightArrow>'
- '&9  Cores &8<rightArrow> &f<availableProcessors> Threads'
- '&9  Loads &8<rightArrow> &f<processCpuLoad>'
- ' '
- '&7&m*--------------------------------------------------*'

# Custom /ping (target) command
# Placeholders available:
#    <player> - Target of the command
#    <ping> - Ping of the target
pingCommand:
- '&7[&bPing&7] &b<player>&f''s ping is &b<ping>ms'

# Custom /ping command
# Placeholders available:
#    <player> - Player name of the command executor
#    <ping> - Ping of the player that executed the command
pingSelfCommand:
- '&7[&bPing&7] &fYour ping is &b<ping>ms'

# Custom no permission message, this is showed when you do not have access to built-in commands such as /tps...
noPermissionMessage:
- '&cI''m sorry, but you do not have permission to perform this command. Please contact
  the server administrators if you believe that this is in error.'

# Custom message when a pearl is refunded by the custom pearl system of ImanitySpigot
pearlRefundMessage:
- '&cYour Pearl has been refund.'

# Custom message when you change the slots of the server thanks to /setmaxslots (slots) command
# Placeholder available:
#   <slots> - New slots of the server
setMaxSlotsMessage:
- '&bMax players &fupdated to §b<slots> slots§f.'

# This section allow you to change the color of the warnings mainly for the placeholders of /tps command
colorWarning:
  highWarningColor: '&c'
  mediumWarningColor: '&e'
  noWarningColor: '&a'

# This section allow you to highly customize your /plugins command
pluginsCommand:

  # Placeholders available:
  #   <count> - Number of plugins on the server
  #   <plugins> - All plugins, based on 'pluginFormat' & 'pluginSeparator'
  #   <newline> - Separate the message in a new line
  pluginMessage:
  - '&bPlugins &f(<count>): <plugins>'

  # Placeholders available:
  #   <color> - Prefix color based on 'pluginEnableColor' if the plugin is enable, else 'pluginDisableColor'
  #   <name> - Name of the plugin
  #   <main> - Main of the plugin
  #   <website> - Website of the plugin
  #   <description> - description of the plugin
  #   <prefix> - Prefix of the plugin
  #   <authors> - Authors of the plugin
  #   <fullname> - Fullname of the plugin
  #   <database> - Database of the plugin
  #   <depends> - Dependencies of the plugin
  #   <loadsbefore> - Plugins loaded before the plugin
  #   <loadorder> - Load order of the plugin
  #   <version> - Version of the plugin
  #   <enable> - Is the plugin enable?
  #   <newline> - Separate the message in a new line
  pluginFormat: <color><name> &7(&b<version>&7)

  # Placeholders available:
  #   <newline> - Separate the message in a new line
  pluginSeparator: '&f, '
  pluginEnableColor: '&a'
  pluginDisableColor: '&c'

# This section allow you to custom the messages of the MobAI command
mobAI:

  # Placeholders available:
  #   <state> - State of the MobAI after the command has been executed, placeholder configurable below
  mobAIMessage:
  - The &bMobAI &fis now <state>&f.
  mobAIStatePlaceholderEnable: '&aenable'
  mobAIStatePlaceholderDisable: '&cdisable'

# Lag Spike Logger
# Whenever a lag spike were detected this feature will be able to store current timing data and show warning to moderators & Log it to a file
# Giving you the ability to found lag spike and check timing in realtime & Save it logged to see the frequency of the lag spikes
lagSpikeLogging:

  # Should Lag spike logger be enabled?
  # Whenever a lag spike were detected this feature will be able to show warning to moderators
  # And Log it to a file
  enabled: true

  # Should moderators receive the warning whenever lag spike were detected?
  # To determine who is a moderator, the player most have the permission 'imanity.lagspike.log'
  moderatorWarning: true

  # Should the lag spike log storing into a file while detected?
  # The log file will be stored at lagspike folder
  logToFile: false

  # Maximum Lag spike log file allowed to generate per minute
  # This value is to prevent file spams.
  logFileRate: 10

  # The Tick Time limit to log the lag spike
  # The current tick time has to at least surpass this limit to log it
  # Time Unit is Milli Seconds
  loggingTickTimeLimit: 100

  # The Tick Time limit to log the timing when lag spike were detected
  # The total tick time most surpass this limit to include in the lag spike log
  # Time Unit is Milli Seconds
  logTimingTotalLimit: 1

  # The Customization for Alert Message when moderatorWarning option is enabled
  alertMessage:
  - '&c&lLAG SPIKE &8> &7Tick Time: &f<tickTime>ms &7Timestamp: &f<timestamp> &e<timing>'

```

### worlds/default.yml
```yaml title="worlds/default.yml"
# -------------------------------------------------------
# Imanity Software © 2019 ~ 2022
#  
# Welcome to the world configuration of ImanitySpigot3! (default.yml)
# As you can see, there's tons to configure. Some options may impact gameplay, so use
# with caution, and make sure you know what each option does before configuring.
# If you need help with the configuration or have any question related to ImanitySpigot,
# join our discord. Happy Configuration!
#  
# Discord: https://discord.gg/GBZKR3nn
# -------------------------------------------------------

# In vanilla arrow, it always has a randomness value being applied to it trajectory.
# Which could potentially break some experience in terms of combat.
# You can increase it for more randomness or set to 0 to completely disable it.
arrowTrajectoryRandomness: 1.0

# Should allowed generation of different types of stones? (Granite, Diorite, Andesite...)
differentVariantStoneGeneration: true

# Should cooldown hoppers when they are full?
cooldownHopperWhenFull: true

# Should unload chunks?
doChunkUnload: true

# Should we count any kind of entity for entity spawning limit?
countAllMobsForSpawning: false

# How many chunk generates per tick are allowed?
# If you don't have Async Chunk enabled
# This will impact performance a lot

# Set to negative value for unlimited.
maxChunkGeneratePerTick: 10

# The rate to tick per chunk
# Value: 0-1
chunkTickRate: 0.85

# Should block operation be enabled?
# Block operation is a part of world ticking.
# It will randomly find tick-able blocks in each chunks to operate them.
# Such as leaves decay, fire spread, and grass spread etc are being worked in this section.
#  
# But at the same time it is very performance consuming.
# If your server doesn't need this vanilla behaviour, We highly suggest to disable it
# Especially for servers such as Practice, MiniGames... it is unnecessary.
blockOperation: true

# We've re-enabled the auto save chunks cap that has been disabled by Spigot
# Which we think it's make sense to have it capped
maxAutoSaveChunksPerTick: 24

# Prevent queueing auto save works when the amount of current queue is more than specific amount
maxQueuedSizeAutoSave: 60

# The is the value to determine how long a chunk takes to tick may be higher then average in chunk analyzer
# Which might have the potential cause the server lag
# Unit is milli seconds
# (Chunk analyzer is a feature of Premium Plan, It's useless if you don't have the feature)
potentialLagChunkTickTime: 2.0

# The section that allow you to customize item merging range for specific types
# If there is no types specify here it will select the itemMerge range from spigot.yml
itemMergeRange:
  cactus: 12.0

# Here you can toggle the generation of specific biomes
# This option is really powerful for custom world generation
biomes:
  biomeOceans: true
  biomePlains: true
  biomeRoofedForest: true
  biomeMushroomIsland: true
  biomeSwampland: true
  biomeDesert:
    enabled: true
    desertHills: true
  biomeExtremeHills:
    enabled: true
    extremeHillsPlus: true
  biomeForest:
    enabled: true
    forestHills: true
  biomeTaiga:
    enabled: true
    taigaHills: true
  biomeJungle:
    enabled: true
    jungleHills: true
  biomeBirchForest:
    enabled: true
    birchForestHills: true
  biomeColdTaiga:
    enabled: true
    coldTaigaHills: true
  biomeMegaTaiga:
    enabled: true
    megaTaigaHills: true
  biomeSavanna:
    enabled: true
    savannaPlateau: true
  biomeMesa:
    enabled: true
    mesaPlateauF: true
    mesaPlateau: true
  biomeIce:
    icePlains: true
    iceMountains: true

# Configurable options for Sugarcane Generation
sugarCane:

  # The Rate for sugarcane to generate
  sugarCaneRate: 10

  # The Minimum Height for sugarcane to generate
  minHeight: 2

  # The Maximum Height for sugarcane to generate
  maxHeight: 5

# Configurable options for Cave Generation
caves:

  # The Rate for cave to generate
  caveGenerateRate: 12

  # The Rate for Large Cave to generate
  largeCaveGenerateRate: 20

  # The Minimum Height for cave to generate
  caveMinHeight: 8

  # The Maximum Height for cave to generate
  caveMaxHeight: 120

# Custom Block Ruleset
# The replacement of the old custom ores
customBlockRuleSet:

  # Should the world generation be using custom block ruleset?
  # If this is enabled the server will ignore custom settings from vanilla minecraft.
  enabled: true

  # Ruleset
  # material = The Material Type of the block
  # toReplace = The target location must be this specific type in order to generate
  # data = The Type Data of the Block
  # veinGenerateRate = The Chance of a vein to generate
  # maxSizePerVein = Max Block amount per vein
  # veinPerChunk = The amount of vein to generate per chunk
  # minHeight = Minimum Y Level of the block to generate
  # maxHeight = Maximum Y Level of the block to generate
  ruleset:
  - blockData:
      material: DIRT
      data: 0
    toReplace: STONE
    veinGenerateRate: 100.0
    maxSizePerVein: 33
    veinsPerChunk: 10
    minHeight: 0
    maxHeight: 256
  - blockData:
      material: GRAVEL
      data: 0
    toReplace: STONE
    veinGenerateRate: 100.0
    maxSizePerVein: 33
    veinsPerChunk: 8
    minHeight: 0
    maxHeight: 256
  - blockData:
      material: STONE
      data: 1
    toReplace: STONE
    veinGenerateRate: 100.0
    maxSizePerVein: 33
    veinsPerChunk: 10
    minHeight: 0
    maxHeight: 80
  - blockData:
      material: STONE
      data: 3
    toReplace: STONE
    veinGenerateRate: 100.0
    maxSizePerVein: 33
    veinsPerChunk: 10
    minHeight: 0
    maxHeight: 80
  - blockData:
      material: STONE
      data: 5
    toReplace: STONE
    veinGenerateRate: 100.0
    maxSizePerVein: 33
    veinsPerChunk: 10
    minHeight: 0
    maxHeight: 80
  - blockData:
      material: COAL_ORE
      data: 0
    toReplace: STONE
    veinGenerateRate: 100.0
    maxSizePerVein: 17
    veinsPerChunk: 20
    minHeight: 0
    maxHeight: 128
  - blockData:
      material: IRON_ORE
      data: 0
    toReplace: STONE
    veinGenerateRate: 100.0
    maxSizePerVein: 9
    veinsPerChunk: 20
    minHeight: 0
    maxHeight: 64
  - blockData:
      material: GOLD_ORE
      data: 0
    toReplace: STONE
    veinGenerateRate: 100.0
    maxSizePerVein: 9
    veinsPerChunk: 2
    minHeight: 0
    maxHeight: 32
  - blockData:
      material: REDSTONE_ORE
      data: 0
    toReplace: STONE
    veinGenerateRate: 100.0
    maxSizePerVein: 8
    veinsPerChunk: 8
    minHeight: 0
    maxHeight: 16
  - blockData:
      material: DIAMOND_ORE
      data: 0
    toReplace: STONE
    veinGenerateRate: 100.0
    maxSizePerVein: 8
    veinsPerChunk: 1
    minHeight: 0
    maxHeight: 16
  - blockData:
      material: LAPIS_ORE
      data: 0
    toReplace: STONE
    veinGenerateRate: 100.0
    maxSizePerVein: 7
    veinsPerChunk: 1
    minHeight: 16
    maxHeight: 16

# World Modification for region specifically
# x, z, and range unit is per-block
# Existing modification types:
# biomes - Change specific region to specific biome
# removeRivers - Remove Rivers from specific region
# removeLakes - Remove Water Lakes from specific region
regions:
- enabled: false
  x: 0
  z: 0
  range: 2
  modifications:
  - type: biome
    biome: PLAINS
```