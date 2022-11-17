---
sidebar_position: 1
title: Configurations
description: All woolwars configurations! 
---

# Configurations

All woolwars configurations.

---

## **Files Structure**

```
woolwars
├── arena (flatfile storage for arenas) 
│ └── ....
├── kit (flatfile storage for kits)
│ └── ....
├── stats (flatfile storage for player stats)
│ └── ....
├── libs (plugin library directory)
│ └── ....
├── modules (module directory)
│ └── ....
├── global.yml
├── hotbar.yml
├── menu.yml
├── messages.yml
├── sidebar.yml
└── storage.yml
```

### Directories

- **`arena`** - Flatfile storage for arenas. 
    - *This directory may not be created if you are using MongoDB.*
    - *Do not touch unless you know what you are doing.*
- **`kit`** - Flatfile storage for kits. *(Do not touch unless you know what you are doing)*
    - *This directory may not be created if you are using MongoDB.*
    - *Do not touch unless you know what you are doing.*
- **`stats`** - Flatfile storage for player stats.
    - *This directory may not be created if you are using MongoDB.*
    - *Do not touch unless you know what you are doing.*
- **`libs`** - Plugin library directory. *(Do not touch)*
- **`modules`** - Module directory, you can manually install modules here.

---

### Files

**`global.yml`** - Global configuration file.

```yaml title="global.yml"
# The arena mode of the current server.
# Select "BUNGEE" if you want to split single game to multiple servers with a proxy.
# Select "MULTI" if you want to have multi games in this server with a lobby.
mode: MULTI
# The duration to wait before the game starts (in ms).
pregameDuration: 20000
# The duration to wait before round starts (in ms).
roundPrepareDuration: 10000
# The maximum duration for each rounds (in ms).
roundDuration: 120000
eliminateRoundDuration:
  # Should eliminate round duration be enabled?
  enabled: true
  # The duration of the round when one of the team has eliminated.
  time: 10000
# The duration to wait while ending the game (in ms).
endingDuration: 10000
# The best of per match.
bestOf: 5
# The bar symbol to be used in <team_wins_bar> placeholder.
bar: ●
# The message for none.
none: <gray>None
# The config section to configure anything related to proxy, specifically for BUNGEE/VELOCITY modes.
proxy:
  # The lobbies in the proxy to be connected whenever game ends in bungee/velocity mode.
  lobbies:
  - lobby1
  - lobby2
  # The time to disconnect players if player didn't connect to lobby (in ms).
  disconnectPeriod: 5000
# The config section to configure anything related to multi-arena 1 server mode, specifically for MULTI mode.
multiArena:
  # Should cache player's inventory when player joins a game, and restore it when player quits the game?
  cacheInventory: true
  # Should the player be teleported to the lobby when the game ends?
  useGlobalLobby: true
  # The global spawn location for players.
  # It will be used when player quits a game, when game ends, or when player joins the server.
  globalLobbyPosition: 0.0, 0.0, 0.0, world

```

---

**`hotbar.yml`** - Hotbar configuration file.

```yaml title="hotbar.yml"
# The hotbar that will be given to players when they joined pregame.
pregame:
  items:
    - slot: 8
      material: RED_BED
      displayName: "<red>Leave Game"
      displayLores:
        - " "
        - "<gray>Click to leave the game"
        - " "
      commands:
        - "wl leave"

# The hotbar that will be given to players when they died in game.
died:
  items:
    - slot: 0
      material: COMPASS
      displayName: "<yellow>Teleportation"
      displayLores:
        - " "
        - "<gray>Click to pick a player to teleport"
        - " "
      commands:
        - "wl tp"

# The hotbar that will be given to players when they are spectating.
spectating:
  items:
    - slot: 0
      material: COMPASS
      displayName: "<yellow>Teleportation"
      displayLores:
        - " "
        - "<gray>Click to pick a player to teleport"
        - " "
      commands:
        - "wl tp"
    - slot: 8
      material: RED_BED
      displayName: "<red>Leave Game"
      displayLores:
        - " "
        - "<gray>Click to leave the game"
        - " "
      commands:
        - "wl leave"
```

---

**`menu.yml`** - Menu configuration file.

```yaml title="menu.yml"
# Paginated menu buttons
paginated:
  # The button to go to the previous page
  previous:
    material: ARROW
    amount: 1
    displayName: "<red>Previous Page"
    displayLores:
      - " "
      - "<gray>Click to go to the previous page."
      - " "

  # The button to go to the next page
  next:
    material: ARROW
    amount: 1
    displayName: "<green>Next Page"
    displayLores:
      - " "
      - "<gray>Click to go to the next page."
      - " "

  # The button that is displayed when there is no next page
  currentlyLastPage:
    material: BARRIER
    amount: 1
    displayName: "<red>You are currently on the last page!"
    displayLores:
      - " "
      - "<gray>You cannot go to the next page."
      - " "

  # The button that is displayed when there is no previous page
  currentlyFirstPage:
    material: BARRIER
    amount: 1
    displayName: "<red>You are currently on the first page!"
    displayLores:
      - " "
      - "<gray>You cannot go to the previous page."
      - " "

  # The button that can be used to go to a specific page
  viewAllPages:
    material: BOOK
    amount: 1
    displayName: "<green>View All Pages"
    displayLores:
      - " "
      - "<gray>Click to view all pages."
      - " "

# Player stats menu buttons
playerStatsMenu:
  title: "<gold><bold>Player Stats"
  rows: 5
  items:
    - material: PLAYER_HEAD
      displayName: "<yellow><player>"
      head: "<player>"
      slot: 13

    - material: IRON_INGOT
      displayName: "<yellow>Games Played"
      displayLores:
        - " "
        - "<gray>Game Played: <white><games_played> <gray>(#<games_played_pos>)"
        - " "
      slot: 21

    - material: GOLD_INGOT
      displayName: "<yellow>Game Wins"
      displayLores:
        - " "
        - "<gray>Game Wins: <white><game_wins> <gray>(#<game_wins_pos>)"
        - " "
      slot: 22

    - material: BRICK
      displayName: "<yellow>Game Losses"
      displayLores:
        - " "
        - "<gray>Game Losses: <white><game_losses> <gray>(#<game_losses_pos>)"
        - " "
      slot: 23

    - material: COMPASS
      displayName: "<yellow>Overall"
      displayLores:
        - " "
        - "<gray>Round Played: <white><all_rounds_played> <gray>(#<all_rounds_played_pos>)"
        - "<gray>Round Wins: <white><all_round_wins> <gray>(#<all_round_wins_pos>)"
        - "<gray>Round Losses: <white><all_round_losses> <gray>(#<all_round_losses_pos>)"
        - "<gray>W/L: <white><all_round_win_lose_ratio> <gray>(#<all_round_win_lose_ratio_pos>)"
        - " "
        - "<gray>Kills: <white><all_kills> <gray>(#<all_kills_pos>)"
        - "<gray>Assists: <white><all_assists> <gray>(#<all_assists_pos>)"
        - "<gray>Deaths: <white><all_deaths> <gray>(#<all_deaths_pos>)"
        - "<gray>K/D: <white><all_kill_death_ratio> <gray>(#<all_kill_death_ratio_pos>)"
        - "<gray>Goal Captures: <white><all_goal_placed> <gray>(#<all_goal_placed_pos>)"
        - "<gray>Blocks Broken: <white><all_blocks_broken> <gray>(#<all_blocks_broken_pos>)"
        - " "
      slot: 29

    - material: IRON_SWORD
      displayName: "<red>Warrior Kit Stats"
      displayLores:
        - " "
        - "<gray>Round Played: <white><warrior_rounds_played> <gray>(#<warrior_rounds_played_pos>)"
        - "<gray>Round Wins: <white><warrior_round_wins> <gray>(#<warrior_round_wins_pos>)"
        - "<gray>Round Losses: <white><warrior_round_losses> <gray>(#<warrior_round_losses_pos>)"
        - "<gray>W/L: <white><warrior_round_win_lose_ratio> <gray>(#<warrior_round_win_lose_ratio_pos>)"
        - " "
        - "<gray>Kills: <white><warrior_kills> <gray>(#<warrior_kills_pos>)"
        - "<gray>Assists: <white><warrior_assists> <gray>(#<warrior_assists_pos>)"
        - "<gray>Deaths: <white><warrior_deaths> <gray>(#<warrior_deaths_pos>)"
        - "<gray>K/D: <white><warrior_kill_death_ratio> <gray>(#<warrior_kill_death_ratio_pos>)"
        - "<gray>Goal Captures: <white><warrior_goal_placed> <gray>(#<warrior_goal_placed_pos>)"
        - "<gray>Blocks Broken: <white><warrior_blocks_broken> <gray>(#<warrior_blocks_broken_pos>)"
        - " "
      slot: 31

    - material: BOW
      displayName: "<aqua>Archer Kit Stats"
      displayLores:
        - " "
        - "<gray>Round Played: <white><archer_rounds_played> <gray>(#<archer_rounds_played_pos>)"
        - "<gray>Round Wins: <white><archer_round_wins> <gray>(#<archer_round_wins_pos>)"
        - "<gray>Round Losses: <white><archer_round_losses> <gray>(#<archer_round_losses_pos>)"
        - "<gray>W/L: <white><archer_round_win_lose_ratio> <gray>(#<archer_round_win_lose_ratio_pos>)"
        - " "
        - "<gray>Kills: <white><archer_kills> <gray>(#<archer_kills_pos>)"
        - "<gray>Assists: <white><archer_assists> <gray>(#<archer_assists_pos>)"
        - "<gray>Deaths: <white><archer_deaths> <gray>(#<archer_deaths_pos>)"
        - "<gray>K/D: <white><archer_kill_death_ratio> <gray>(#<archer_kill_death_ratio_pos>)"
        - "<gray>Goal Captures: <white><archer_goal_placed> <gray>(#<archer_goal_placed_pos>)"
        - "<gray>Blocks Broken: <white><archer_blocks_broken> <gray>(#<archer_blocks_broken_pos>)"
        - " "
      slot: 32

    - material: IRON_CHESTPLATE
      displayName: "<green>Tank Kit Stats"
      displayLores:
        - " "
        - "<gray>Round Played: <white><tank_rounds_played> <gray>(#<tank_rounds_played_pos>)"
        - "<gray>Round Wins: <white><tank_round_wins> <gray>(#<tank_round_wins_pos>)"
        - "<gray>Round Losses: <white><tank_round_losses> <gray>(#<tank_round_losses_pos>)"
        - "<gray>W/L: <white><tank_round_win_lose_ratio> <gray>(#<tank_round_win_lose_ratio_pos>)"
        - " "
        - "<gray>Kills: <white><tank_kills> <gray>(#<tank_kills_pos>)"
        - "<gray>Assists: <white><tank_assists> <gray>(#<tank_assists_pos>)"
        - "<gray>Deaths: <white><tank_deaths> <gray>(#<tank_deaths_pos>)"
        - "<gray>K/D: <white><tank_kill_death_ratio> <gray>(#<tank_kill_death_ratio_pos>)"
        - "<gray>Goal Captures: <white><tank_goal_placed> <gray>(#<tank_goal_placed_pos>)"
        - "<gray>Blocks Broken: <white><tank_blocks_broken> <gray>(#<tank_blocks_broken_pos>)"
        - " "
      slot: 33

    # Placeholder buttons
    - material: GRAY_STAINED_GLASS_PANE
      displayName: " "
      slot:
        - 0
        - 1
        - 2
        - 3
        - 4
        - 5
        - 6
        - 7
        - 8
        - 9
        - 17
        - 18
        - 26
        - 27
        - 35
        - 36
        - 37
        - 38
        - 39
        - 40
        - 41
        - 42
        - 43
        - 44

# Spectate teleportation menu
spectateTeleportMenu:
  # Title of the menu
  title: "<gold>Spectate Teleportation"
  # The name of each buttons
  name: "<yellow><player>"
  # The lore of each buttons
  lore:
    - " "
    - "<green><bold>LEFT-CLICK <gray>to teleport to <white><player><gray>."
    - " "

# Arena selection menu
arenaSelectMenu:
  # Title of the arena select menu
  title: "<yellow>Select an arena"

  # The arena buttons for each arena
  arena:
    material: GRASS_BLOCK
    amount: 1
    displayName: "<green><arena>"
    displayLores:
      - " "
      - "<gray>Players: <green><players>/<max_players>"
      - "<gray>Mode: <gold><max_player_per_team>v<max_player_per_team>"
      - " "
      - "<gray>Click to join this arena."
      - " "

  # The button to randomly join an arena
  randomArena:
    material: COMPASS
    amount: 1
    displayName: "<green>Random Arena"
    displayLores:
      - " "
      - "<gray>Click to join a random arena."
      - " "

# Kit Selection Menu
kitSelectMenu:
  # The title of the kit selection menu
  title: "<yellow><bold>Kit Select"

  # The button lores for kits that are available to be selected
  availableKitLores:
    - " "
    - "<green><bold>LEFT-CLICK <reset><gray>to select this kit"
    - "<red><bold>SNEAK + CLICK <reset><gray>to preview this kit"
    - " "
    - "<gray>Used by <green><bold><used>"
    - "<gray>Remaining <green><bold><remaining>"
    - " "

  # The button lores for kits that are selected by the player
  selectedKitLores:
    - " "
    - "<green>You are currently using this kit."
    - "<red><bold>SNEAK + CLICK <reset><gray>to preview this kit"
    - " "
    - "<gray>Used by <green><bold><used>"
    - "<gray>Remaining <green><bold><remaining>"
    - " "

  # The button lores for kits that are not available to be selected
  unavailableKitLores:
    - " "
    - "<red>This kit is currently unavailable."
    - "<red><bold>SNEAK + CLICK <reset><gray>to preview this kit"
    - " "
    - "<gray>Used by <red><bold><used>"
    - "<gray>Remaining <red><bold><remaining>"
    - " "

  # The button to deselect the current kt
  deselectKitButton:
    material: RED_STAINED_GLASS
    amount: 1
    displayName: "<red><bold>Deselect Kit"
    displayLores:
      - " "
      - "<green>LEFT-CLICK<gray> to deselect your current kit."
      - " "

# Kit preview menu
kitPreviewMenu:
  # Title of the kit preview menu
  title: "<yellow><bold>Kit Preview"

  # The item that will be used to preview potion effects
  potionEffects:
    material: POTION
    amount: 1
    displayName: "<yellow><bold>Potion Effects"
    displayLores:
      - " "
      - "<yellow>Effects:"
      - "<effects>"
      - " "

  # The button to go back to the kit selection menu
  back:
    material: BARRIER
    amount: 1
    displayName: "<red><bold>Back"
    displayLores:
      - " "
      - "<gray>Click to go back to the previous menu."
      - " "

  # The format of each potion effects
  potionEffectFormat: "<gray>- <aqua><type> <gold>Lv<level> <red>(<duration>s)"
```

---

**`messages.yml`** - The messages file.

This configuration file contains all the messages that are used in the plugin. 
You can change the messages to whatever you want.
But it's not only for messages, it also contains sounds, titles, and action bars.
This configuration is powerful because it's extremely flexible.
Every single key can be made to have everything (chat message, sound, title, actionbar).
Or you can make it only have a chat message, or only have a sound, or only have a title, or only have an action bar.
You can also make it have multiple chat messages.
It also powered by MiniMessage, so you can use all the features of [MiniMessage](https://docs.adventure.kyori.net/minimessage/index.html) such as hover events, click events, and more.


```yaml title="messages.yml"
#
# Welcome to WoolWars messages configuration.
# This file contains all messages used by the plugin.
# You can change them to your liking.
# All messages here uses MiniMessage format. (https://docs.adventure.kyori.net/minimessage/format.html)
# But you can also use color codes with the code '&'.
#
# This configuration has a special message bundle system.
# *Every single message* here can be expanded with a bundle for example below:
#  key:
#    chat:
#      - "&aThis is a chat message"
#      - "&bThis is another chat message"
#    sound:
#      type: ENTITY_PLAYER_LEVELUP
#      source: PLAYER
#      volume: 1.0
#      pitch: 1.0
#    title:
#      title: "&aThis is a title"
#      sub_title: "&bThis is a subtitle"
#      fadeIn: 10
#      stay: 20
#      fadeOut: 10
#    action_bar: "&aThis is an action bar message"
#
# Which can also be minimized to:
#   key: "&aThis is a chat message"
#

# Kit messages
kit:
  # Players must select a kit before closing the select kit menu
  must_select_kit:
    chat: "&cYou must select a kit!"
    sound:
      type: ENTITY_VILLAGER_NO
      source: PLAYER
      volume: 1.0
      pitch: 1.0
  # Player has selected a kit
  selected:
    chat: "&aYou have selected the &b<kit> &akit."
    sound:
      type: ENTITY_PLAYER_LEVELUP
      source: PLAYER
      volume: 1.0
      pitch: 1.0
  # Player has deselected a kit
  deselected:
    chat: "&aYou have deselected the &b<kit> &akit."
    sound:
      type: UI_BUTTON_CLICK
      source: PLAYER
      volume: 1.0
      pitch: 1.0
  # Player tries to select a kit that is not available
  unavailable:
    chat: "&cThis kit is unavailable."
    sound:
      type: ENTITY_VILLAGER_NO
      source: PLAYER
      volume: 1.0
      pitch: 1.0

# Command messages
command:
  # Command help message for no permission players executing /woolwars
  help:
    - "<gray>strikethrough>----------------------------------------"
    - " "
    - "<yellow><bold>WoolWars"
    - "<gray>- <yellow>/woolwars select <kit> <gray>- Select an arena."
    - "<gray>- <yellow>/woolwars join [arena] <gray>- Join an arena. If no arena is specified, a random arena will be selected."
    - "<gray>- <yellow>/woolwars leave <gray>- Leave the arena."
    - " "
    - "<gray>strikethrough>----------------------------------------"
  # Target arena is not found
  arena_not_found: "<red>Arena not found."
  # Not spectator
  not_spectator: "<red>You are not a spectator."

# Game messages
game:
  # Death messages
  death:
    # The player is killed by another player
    slain_by_player: "<victim><gray>[<white><victim_kills><gray>]<dark_gray> was slained by <killer><gray>[<white><killer_kills><gray>]"
    # Other death messages
    other: "<victim><gray>[<white><victim_kills><gray>]<dark_gray> died"

  # Cannot find a game to join
  unable_to_find: "<red>Unable to find a game to join, please try again later."
  # Player tries to join a game while already in a game
  already_in_game: "<red>You are already in a game."
  # Player tries to quit a game while not in a game
  not_in_game: "<red>You are not in a game."
  # Player tries to join a game while the game is already full
  full: "<red>The game is full, please try another one."

  # Block related messages
  block:
    # Player tries to place an unbreakable block in a game
    cannot_break: "<red>You cannot break the block here."

  # Team related messages
  team:
    # A team is eliminated
    eliminated: "<eliminated_team_name> <gray>has been eliminated!"

  # Round messages
  round:
    # Round prepare state
    prepare:
      # Prepare state start
      start:
        chat: "<gray>Preparing for round <white><round><gray>..."
        title:
          title: " "
          sub_title: "<yellow>Round <round>"
          fadeIn: 10
          stay: 40
          fadeOut: 10
      # Prepare state countdown
      countdown:
        chat: "<white><seconds> <yellow>seconds until the gate open!"
        sound: BLOCK_NOTE_BLOCK_HAT

    # Round start
    start:
      chat: "<gray>Round <white><round><gray> has started!"
      sound:
        type: ENTITY_ENDER_DRAGON_GROWL
        source: PLAYER
        volume: 20.0
        pitch: 1.0
      title:
        title: "<gold><bold>FIGHT"
        sub_title: "<yellow><bold>Round <round>"
        fadeIn: 10
        stay: 20
        fadeOut: 10

    # Round tied
    tied:
      chat:
        - "<gray><strikethrough>----------------------------------------"
        - " "
        - "     <gray>Round <white><round><gray> has ended!"
        - " "
        - "          <gray>It's a <white><bold>TIE"
        - " "
        - "<gray><strikethrough>----------------------------------------"
      sound:
        type: ENTITY_BLAZE_DEATH
        source: PLAYER
        volume: 20.0
        pitch: 1.0
      title:
        title: "<gold><bold>ROUND <round> ENDED"
        sub_title: "<team_1_place_name> <white><team_1_place_scores_bar><dark_gray><team_1_place_scores_to_win_bar> <gray>| <white><team_2_place_scores_bar><dark_gray><team_2_place_scores_to_win_bar> <team_2_place_name>"
        fadeIn: 10
        stay: 40
        fadeOut: 10

    # Round scored
    scored:
      chat:
        - "<gray><strikethrough>----------------------------------------"
        - " "
        - "     <gray>Round <white><round><gray> has ended!"
        - " "
        - "         <gray><winner><gray> has scored!"
        - " "
        - "<gray><strikethrough>----------------------------------------"
      sound:
        type: ENTITY_BLAZE_DEATH
        source: PLAYER
        volume: 20.0
        pitch: 1.0
      title:
        title: "<gold><bold>ROUND <round> ENDED"
        sub_title: "<team_1_place_name> <white><team_1_place_scores_bar><dark_gray><team_1_place_scores_to_win_bar> <gray>| <white><team_2_place_scores_bar><dark_gray><team_2_place_scores_to_win_bar> <team_2_place_name>"
        fadeIn: 10
        stay: 40
        fadeOut: 10

  # Before game start
  pregame:
    # Player joined the game
    join: "<white><player> <yellow>has joined the game."
    # Player left the game
    quit: "<white><player> <yellow>has left the game."
    # Game start countdown
    countdown:
      chat: "<white><seconds> <yellow>seconds until the game starts!"
      sound: BLOCK_NOTE_BLOCK_HAT

  # Game ended
  ended:
    chat:
      - "<gray><strikethrough>--------------------------------"
      - " "
      - "                 <gold><bold>GAME ENDED"
      - " "
      - "<team_1_place_name> <yellow>won the match with <white><team_1_place_scores> <yellow>scores!"
      - " "
      - "<gray><strikethrough>--------------------------------"
    sound:
      type: ENTITY_WITHER_DEATH
      source: PLAYER
      volume: 20.0
      pitch: 1.0
    title:
      title: "<gold><bold>GAME ENDED"
      sub_title: "<winner_name> <yellow>won the match!"
      fadeIn: 10
      stay: 40
      fadeOut: 10
```

---

**``sidebar.yml``** - The configuration file for the sidebar.

```yaml title="sidebar.yml"
# The text to display when timer is not running
notStarted: <gray>Not started
pregame:
  title: '&e&lWoolWars'
  lines:
  - <gray><strikethrough>---------------------
  - ' '
  - '<yellow>Arena: <white><arena>'
  - '<yellow>Players: <white><players>/<max_players>'
  - ' '
  - <yellow>Starting in <white><time>
  - ' '
  - <gray><strikethrough>---------------------
roundPrepare:
  title: '&e&lWoolWars'
  lines:
  - <gray><strikethrough>---------------------
  - ' '
  - '<yellow>Round: <white><round>'
  - '<yellow>State: <white>Pre Round'
  - '<yellow>Arena: <white><arena>'
  - ' '
  - '<team_0_name> <yellow>scores: <white><bold><team_0_scores_bar><gray><bold><team_0_scores_to_win_bar>'
  - '<team_1_name> <yellow>scores: <white><bold><team_1_scores_bar><gray><bold><team_1_scores_to_win_bar>'
  - ' '
  - <yellow>Starting in <white><time>
  - ' '
  - <gray><strikethrough>---------------------
roundFighting:
  title: '&e&lWoolWars'
  lines:
  - <gray><strikethrough>---------------------
  - ' '
  - '<yellow>Round: <white><round>'
  - '<yellow>State: <white>Round Fighting'
  - '<yellow>Arena: <white><arena>'
  - ' '
  - '<team_0_name> <yellow>scores: <white><bold><team_0_scores_bar><gray><bold><team_0_scores_to_win_bar>'
  - '<team_1_name> <yellow>scores: <white><bold><team_1_scores_bar><gray><bold><team_1_scores_to_win_bar>'
  - ' '
  - '<yellow>Time Left: <white><time>'
  - '<yellow>Kills: <white><kills>'
  - ' '
  - <gray><strikethrough>---------------------
roundEnd:
  title: '&e&lWoolWars'
  lines:
  - <gray><strikethrough>---------------------
  - ' '
  - '<yellow>Round: <white><round>'
  - '<yellow>State: <white>Round End'
  - '<yellow>Arena: <white><arena>'
  - ' '
  - '<team_0_name> <yellow>scores: <white><bold><team_0_scores_bar><gray><bold><team_0_scores_to_win_bar>'
  - '<team_1_name> <yellow>scores: <white><bold><team_1_scores_bar><gray><bold><team_1_scores_to_win_bar>'
  - ' '
  - '<yellow>Winner: <white><winner_name>'
  - ' '
  - <gray><strikethrough>---------------------
postgame:
  title: '&e&lWoolWars'
  lines:
  - <gray><strikethrough>---------------------
  - ' '
  - '<yellow>Winner: <white><winner_name>'
  - ' '
  - '<team_0_name> <yellow>scores: <white><bold><team_0_scores_bar><gray><bold><team_0_scores_to_win_bar>'
  - '<team_1_name> <yellow>scores: <white><bold><team_1_scores_bar><gray><bold><team_1_scores_to_win_bar>'
  - ' '
  - <gray><strikethrough>---------------------
```

---

**``storage.yml``** - The configuration file for the storage.

```yaml title="storage.yml"
# The storage type to use.
types:
  # The storage type to use for the player statistics. (flat_file, mongo)
  playerStats: FLAT_FILE
  # The storage type to use for kit. (flat_file, mongodb)
  kit: FLAT_FILE
# The section for the mongodb storage type
mongo:
  # The host of the mongodb server
  connectionString: mongodb://localhost:27017
  # The database name to use.
  # Default: woolwars
  database: woolwars
  # The username to use for authentication.
  # Default: false
  useAuthentication: false
  # The username to use for authentication.
  # Default: user
  username: user
  # The password to use for authentication.
  # Default: password
  password: password
  # The collection name to use for the storage.
  # Default: woolwars_
  collectionPrefix: woolwars_
```