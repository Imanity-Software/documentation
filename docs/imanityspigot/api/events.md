---
sidebar_position: 200
title: Events
description: All the Non-Cancellable or Cancellable Events!
---

# Events

## **Cancellable Events**

All events mentioned in this list are implemented Cancellable.

### **PlayerPearlRefundEvent**

Event called when a pearl launched by a player is refunded

**All Methods:**

```java
Player #getPlayer()
EnderPearl #getEnderPearl()
```

**Class:** `org.imanity.imanityspigot.event.PlayerPearlRefundEvent`

### **AsyncTabCompleteEvent**

Event called when a CommandSender try to use completion

:::note From Javadoc:

Allows plugins to compute tab completion results asynchronously. If this event provides completions, then
the standard synchronous process will not be fired to populate the results.

However, the synchronous TabCompleteEvent
will fire with the Async results. Only 1 process will be allowed to provide completions, the Async Event, or the
standard process.

:::

**All Methods:**

```java
CommandSender #getSender()
List #getCompletions()
void #setCompletions(List completions)
String #getBuffer()
boolean #isCommand()
Location #getLocation()
boolean #isHandled()
boolean #setHandled()
```

**Class:** `org.imanity.imanityspigot.event.AsyncTabCompleteEvent`

### **PotionEffectEvent**

The event that is related to potion effect

```java
LivingEntity #getEntity()
PotionEffect #getEffect()
```

**Class:** `org.bukkit.event.entity.PotionEffectEvent`

### **PotionEffectAddEvent**

The event that will be execute when adding effect to a living entity

```java
EffectCause #getCause()
boolean #isCancelled()
void #setCancelled(boolean cancel)
enum EffectCause {
    POTION_SPLASH,
    BEACON,
    WITHER_SKELETON,
    WITHER_SKULL,
    PLUGIN,
    UNKNOWN,
    CAVE_SPIDER,
    VILLAGE_TRADE,
    ZOMBIE_CONVERTING,
    ZOMBIE_CONVERTED;
}
```

**Class:** `org.bukkit.event.entity.PotionEffectAddEvent`

**Super Class:** `org.bukkit.event.entity.PotionEffectEvent`

### **PotionEffectRemoveEvent**

The event that will be execute when removing an effect from a living entity

```java
boolean #isCancelled()
void #setCancelled(boolean cancel)
```

**Class:** `org.bukkit.event.entity.PotionEffectExpireEvent`

**Super Class:** `org.bukkit.event.entity.PotionEffectEvent`

### **PotionEffectExpireEvent**

The event that will be execute when an effect from a living entity is expired

```java
int #getDuration()
void #setDuration(int duration)
boolean #isCancelled()
void #setCancelled(boolean cancel)
```

**Class:** `org.bukkit.event.entity.PotionEffectExpireEvent`

**Super Class:** `org.bukkit.event.entity.PotionEffectRemoveEvent`

### **PotionEffectExtendEvent**

The event that will be execute when an effect from a living entity is being extended

```java
PotionEffect #getOldEffect()
```

**Class:** `org.bukkit.event.entity.PotionEffectExtendEvent`

**Super Class:** `org.bukkit.event.entity.PotionEffectAddEvent`

### **KnockbackSelectEvent**

The event that will be called when an knockback apply to a player

**All Methods:**

```java
Player #getPlayer()
Knockback #getCurrent()
Knockback #getSelected()
void #setSelected(Knockback selected)
Reason #getReason()
```

**Class:** `dev.imanity.knockback.api.event.KnockbackSelectEvent`

### **EquipmentSetEvent**

The event that will be called on equipment being swaped on a player or equipped.

**Class:** `org.bukkit.event.inventory.EquipmentSetEvent`

## **Non-Cancellable Events**

All events mentioned in this list are **not** implemented Cancellable.

### **KnockbackServiceInitializeEvent**

The Event that will be called before Knockback Profile being registered.

We recommend you to register knockback behaviours when this event being called.

**Class:** `dev.imanity.knockback.api.event.KnockbackServiceInitializeEvent`

### **ChunkAnalyseEvent**

The event that is related to chunk analyse

**Class:** `org.imanity.imanityspigot.event.chunk.ChunkAnalyseEvent`

### **ChunkAnalyseStartEvent**

The event that will be executed when chunk analyse starts

**Class:** `org.imanity.imanityspigot.event.chunk.ChunkAnalyseStartEvent`

**Super Class:** `org.imanity.imanityspigot.event.chunk.ChunkAnalyseEvent`

### **ChunkAnalyseEndEvent**

The event that will be executed when chunk analyse ends

**Class:** `org.imanity.imanityspigot.event.chunk.ChunkAnalyseEndEvent`

**Super Class:** `org.imanity.imanityspigot.event.chunk.ChunkAnalyseEvent`

### **LagSpikeTriggerEvent (Premium ONLY)**

The event that will be executed when the LagSpikeLogger feature trigger an alert

```java
long #getTimestamp()
long #getFullServerTotal()
List #getEntries()
```

**Class:** `org.imanity.imanityspigot.event.LagSpikeTriggerEvent`
