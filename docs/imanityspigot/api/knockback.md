---
sidebar_position: 500
title: Knockback
---

# Knockback

Before using this API, you have to know that the knockback system of ImanitySpigot3 is unique and a bit more complexe
than the others, BUT is for sure the more powerful and give you unlimited possibilities of knockback profiles.

**This is advised to learn how this knockback system work before using the
API: [ImanityKnockback Documentation](/category/kb "ImanityKnockback Overview")**

---

## **KnockbackService**

You can get the KnockbackService that give you a large amount of methods to manage the knockback profiles on your
server. This can be very useful for a lot of game mode like Practice server.

`Bukkit#imanity()#getKnockbackService()`

**All Methods**

- `boolean #isInitialized()` - is KnockbackService initialized
- `Knockback #getKnockback(Player player)` - get player's current knockback profile
- `void #setKnockback(Player player, Knockback knockback)` - set specific knockback profile for player
- `File #getFileForKnockback(Knockback knockback)` - get Json File for Knockback profile, It will pick a file name based
  on knockback name within *'/imanity/knockback'*. for example if knockback were called *'example'*, the file will be *'
  /imanity/knockback/example.json'*
- `KnockbackBehaviourDescription #getRegisteredBehaviourByName(String name)` - get Registered behaviour description by
  name
- `<T extends KnockbackBehaviour> T #createBehaviourByName(String name)` - Create an instance by behaviour name
- `void #registerBehaviour(Plugin plugin, String name, KnockbackBehaviourDescription knockbackBehaviour)` - Register a
  behaviour so it can be found in both APIs and commands
- `void #unregisterBehaviour(String name)` - Unregister a behaviour by name
- `void #unregisterBehaviour(KnockbackBehaviour knockbackBehaviour)` - Unregister behaviour by behaviour instance
- `void #unregisterAllBehavioursByPlugin(Plugin plugin)` - Unregistering all behaviours registered by the target plugin
- `Collection<KnockbackBehaviourDescription> #getAllKnockbackBehaviours()` - get All knockback behaviours that has been
  registered
- `Knockback #getKnockbackByName(String name)` - get knockback Profile by Name
- `void #registerKnockback(Plugin plugin, Knockback knockback)` - register a Knockback Profile
- `void #unregisterKnockback(Knockback knockback)` - Unregistering a knockback profile
- `void #unregisterAllKnockbackByPlugin(Plugin plugin)` - Unregistering All Knockback Profiles registered by target
  Plugin
- `Knockback #getRandomKnockback(World world)` - get Default Knockback based on configurations by the World. This will
  first search if there is any valid knockback from world. If not, it will search by default configuration. finally, if
  still not valid, it will return vanilla knockback profile.
- `Collection<Knockback> #getAllKnockback()` - get All Knockback Profiles
- `void #registerModifier(Plugin plugin, String name, KnockbackValueModifierDescription knockbackModifier)` - Register a
  modifier so it can be found in both APIs and commands
- `KnockbackValueModifierDescription #getRegisteredModifierByName(String name)` - get Registered modifier description by
  name
- `<T> KnockbackValueModifier<T> #createModifierByName(String name)` - Create an instance by modifier name
- `void #unregisterModifier(String name)` - Unregister a modifier by name
- `void #unregisterAllModifiersByPlugin(Plugin plugin)` - Unregistering all modifiers registered by the target plugin
- `Collection<KnockbackValueModifierDescription> #getAllModifiers()` - get All knockback modifiers that has been
  registered
- `Collection<KnockbackEntity> #getAllKnockbackEntities(Knockback knockback)` - get All Knockback Entities that applied
  with target knockback profile
- `boolean #reload()` - Reload every knockback profile that is based on file from their own files

**Class:** `dev.imanity.knockback.api.KnockbackService`

---

## **Knockback**

- `String #getName()` - get the Name of the knockback
- `void #setName(String name)` - set the Name of the knockback
- `File #getFile()` - get the File of the knockback
- `void #setFile(File file)` - set the File of the knockback
- `Plugin #getOwningPlugin()` - get the owner plugin
- `void #setOwningPlugin(Plugin plugin)` - set the owner plugin
- `List<KnockbackBehaviour> #getBehaviours()` - get List of Behaviours in the knockback profile
- `boolean #loadFromJson()` - Load all behaviour and values from json file. This should not be executed if there wasn't
  a file to load
- `void #save()` - Save the knockback profile to Json File. This should not be executed if there wasn't a file to save
- `JsonObject #toJsonObject()` - store data of the knockback profile to json
- `void #addBehaviour(String id, KnockbackBehaviour behaviour)` - Add behaviour to the knockback profile
- `KnockbackBehaviour #getBehaviour(String id)` - get Behaviour by ID
- `<T> T #getBehaviourByType(Class<T> type)` - get Behaviour by Class Type
- `void removeBehaviour(KnockbackBehaviour behaviour)` - Remove specific behaviour from the knockback profile

**Class:** `dev.imanity.knockback.api.Knockback`

---

## **KnockbackBuilder**

You can easily create a knockack profile thanks to the KnockBackBuilder.

**All Methods**

```Java
KnockbackBuilder #name(String name)

KnockbackBuilder #behaviour(String id, KnockbackBehaviour behaviour)

KnockbackBuilder #behaviour(String id, String type, int priority)

KnockbackBuilder #behaviour(String id, String type, int priority, Consumer<T> onCreate)

Knockback #build()
```

**Class:** `dev.imanity.knockback.api.KnockbackBuilder`

---
