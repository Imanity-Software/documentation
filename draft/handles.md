# Handlers

### ImanitySpigot 3 API - Handlers
---

#### PacketHandler

This handler allow you to read packet and cancel them a lot more easily. Very useful for anticheat or plugin that need
to read the packets. No need to use reflection for this anymore!

- default boolean #onSent(Player player, Object packet) - return true
- default boolean #onReceived(Player player, Object packet) - return true
  Class Interface: `org.imanity.imanityspigot.packet.PacketHandler`

```Java
public class ExamplePacketHandler implements PacketHandler {
/
 The method that will be called on an packet get sent to player
 You can either cast to NMS Packet or use reflections

 @param player The Player
 @param packet The Packet Object
 @return false if Cancelled
/
@Override
public boolean onSent(Player player, Object packet) {
if (packet instanceof PacketPlayOutEntityVelocity) {
return false; // DONT SEND VELOCITY PACKET TO THE PLAYER!
}
return true;
}
/
 The method that will be called on an packet get received from player
 You can either cast to NMS Packet or use reflections

 @param player The Player
 @param packet The Packet Object
 @return false if Cancelled
/
@Override
public boolean onReceived(Player player, Object packet) {
if (packet instanceof PacketPlayInBlockPlace) {
return false; // DONT HANDLE BLOCK PLACE PACKET FROM THE PLAYER!
}
return true;
}
}
```

##### How to register:

In order to register or unregister your packet handlers you have to use the following methods:

- void Server#imanity()#registerPacketHandler(Plugin plugin, PacketHandler packetHandler)
- void Server#imanity()#unregisterPacketHandler(PacketHandler packetHandler)

##### Advanced:

For more experienced developers you can have access to the PacketService which offers you new methods including the one
that allows you to call the packet handlers yourself, USE IT ONLY IF YOU KNOW WHAT YOU ARE DOING!
`Server#imanity()#getPacketService()`

- void #registerPacketHandler(Plugin plugin, PacketHandler packetHandler)
- void #unregisterPacketHandler(PacketHandler packetHandler)
- List\<PacketHandler\> #getPacketHandlersFor(Plugin plugin)
- List\<PacketHandler\> #getPacketHandlers()
- void #unregisterPacketHandlerFor(Plugin plugin)
- PacketDirection #PacketDirection#SENT
- PacketDirection #PacketDirection#RECEIVED
- boolean callPacket(Player player, Object packet, PacketDirection direction)
  Class: `org.imanity.imanityspigot.packet.PacketService`

---

#### MovementHandler

This handler allow you to listen player movements, location and head rotation. Thanks to the MovementPacketWrapper you
can easily manage the PacketPlayInFlying of the movement. This is a lot more powerful than using the PlayerMoveEvent.

- void onUpdateLocation(Player player, Location from, Location to, MovementPacketWrapper movementPacketWrapper)
- void onUpdateRotation(Player player, Location from, Location to, MovementPacketWrapper movementPacketWrapper)
  Class Interface: `org.imanity.imanityspigot.movement.MovementHandler`

```Java
public class ExampleMovementHandler implements MovementHandler {
/
 The method that will be called when a player try to move
 You can either listen PacketPlayInFlying thanks to NMS Packet or reflections
 Using this method is preferable to PlayerMoveEvent

 @param player The Player
 @param from Original player location
 @param to New updated player location
 @param movementPacketWrapper The Wrapper for PacketPlayInFlying
/
@Override
public void onUpdateLocation(Player player, Location from, Location to, MovementPacketWrapper movementPacketWrapper) {
if (from.getBlockX() == to.getBlockX()
&& from.getBlockY() == to.getBlockY()
&& from.getBlockZ() == from.getBlockZ()) {
return;
}
player.teleport(from);
player.sendMessage("Don't try to move!");
}
/
 The method that will be called when a player try to rotate his head
 You can either listen PacketPlayInFlying thanks to NMS Packet or reflections
 Using this method is preferable to PlayerMoveEvent

 @param player The Player
 @param from Original player location
 @param to New updated player location
 @param movementPacketWrapper The Wrapper for PacketPlayInFlying
/
@Override
public void onUpdateRotation(Player player, Location from, Location to, MovementPacketWrapper movementPacketWrapper) {
// TODO
}
}
```

##### How to register:

In order to register or unregister your movement handlers you have to use the following methods:

- void Server#imanity()#registerMovementHandler(Plugin plugin, MovementHandler movementHandler)
- void Server#imanity()#unregisterMovementHandler(MovementHandler movementHandler)

##### Advanced:

For more experienced developers you can have access to the MovementService which offers you new methods including the
one that allows you to call the movement handlers yourself, USE IT ONLY IF YOU KNOW WHAT YOU ARE DOING!
`Server#imanity()#getMovementService()`

- void #registerMovementHandler(Plugin plugin, MovementHandler movementHandler)
- void #unregisterMovementHandler(MovementHandler movementHandler)
- List\<MovementHandler\> #getMovementHandlersFor(Plugin plugin)
- List\<MovementHandler\> #getMovementHandlers()
- void \#unregisterMovementHandlerFor(Plugin plugin)
- MovementType \#MovementType#LOCATION
- MovementType \#MovementType#ROTATION
- boolean callMovement(Player player, MovementType type, Location from, Location to, Object packetPlayInFlying)
  Class: `org.imanity.imanityspigot.movement.MovementService`

---

##### MobAIHandler THIS IS NOW DEPRECATED! (replaced by Mob AI & Goals)

This handler allow you to control the MobAI of the entities on your server. Pretty useful if you want create easily
unique features on your server with the entities (since you can manage the pathfinder) or just if you want disable MobAI
for specific entities, and more..!

- boolean doTickAI(Entity entity)
- boolean insertPathFinderGoal(Entity entity, Object pathfinderGoal)
  Class Interface: `org.imanity.imanityspigot.mobai.MobAIHandler`

```Java
public class ExampleMobAIHandler implements MobAIHandler {
@Override
public boolean doTickAI(Entity entity) {
if (entity instanceof EntityCreeper || entity instanceof EntityEnderman) {
return false; // Creeper & Enderman do not have AI anymore (HCF Server?)
}
return true;
}
@Override
public boolean insertPathFinderGoal(Entity entity, Object pathfinderGoal) {
if (entity instanceof EntityCreeper || entity instanceof EntityEnderman) {
return false; // Creeper & Enderman do not have AI anymore (HCF Server?)
}
return true;
}
}
```

##### How to register:

In order to register or unregister your mob AI handlers you have to use the following methods:

- void Server#imanity()#registerMobAIHandler(Plugin plugin, MobAIHandler mobAIHandler)
- void Server#imanity()#unregisterMobAIHandler(MobAIHandler mobAIHandler)

##### Advanced:

For more experienced developers you can have access to the MobAIService which offers you new methods.
`Server#imanity()#getMobAIService()`

- void #registerMobAIHandler(Plugin plugin, MobAIHandler mobAIHandler)
- void #unregisterMobAIHandler(MobAIHandler mobAIHandler)
- List\<MobAIHandler\> #getMobAIHandlersFor(Plugin plugin)
- List\<MobAIHandler\> #getMobAIHandlers()
- void #unregisterMobAIHandlerFor(Plugin plugin)
  Class: `org.imanity.imanityspigot.mobai.MobAIService`
  This is possible to disable the MobAI of the server in the configuration of the spigot (and via the command /mobai).
  If this option is disabled it will remove the MobAI of all entities on the server and override all mob AI handlers.
  Same if an entity is set to not have intelligence thanks to the API (see Extanted API Methods page).