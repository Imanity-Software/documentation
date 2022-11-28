---
sidebar_position: 2
title: Commands and Permission
description: All WoolWars commands!
---

# Commands and Permission

:::tip

You can use `/wl` as an alias when using command!

:::

## Player commands

These commands are available to all players by default and don't require any permissions.

| Command                | Description                                                               |
|------------------------|---------------------------------------------------------------------------|
| /woolwars select       | Select an arena.                                                          |
| /woolwars join [arena] | Join an arena. If no arena is specified, a random arena will be selected. |
| /woolwars leave        | Leave the arena.                                                          |
| /woolwars stats        | Check your stats.                                                         |

## Admin commands

These commands are only available to players with `woolwars.admin` permission.

| Command                              | Description                                        |
|--------------------------------------|----------------------------------------------------|
| /woolwars arena                      | Manage arenas.                                     |
| /woolwars arena create <id\>         | Create a new arena.                                |
| /woolwars arena delete <id\>         | Delete a arena.                                    |
| /woolwars arena edit <id\> [team-id] | Edit an arena. (Edit team if team-id is specified) |
| /woolwars kit                        | Manage kits.                                       |
| /woolwars kit list                   | List all kits.                                     |
| /woolwars kit create <kit id\>       | Create a new kit.                                  |
| /woolwars kit delete <kit id\>       | Delete a kit.                                      |
| /woolwars kit edit <kit id\>         | Edit a kit.                                        |
| /woolwars kit save                   | Save the content of the kit you were editing.      |
| /woolwars kit cancel                 | Cancel the kit editing.                            |
| /woolwars kit goalblock              | Gather the goal block item.                        |
| /woolwars setlobby                   | Set the global lobby location.                     |
| /woolwars modules                    | Check module information.                          |
| /woolwars reload                     | Reload the plugin.                                 |
