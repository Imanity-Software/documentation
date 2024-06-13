---
sidebar_position: 700
title: Mob AI & Goals
---

# Mob AI & Goals

## Mob

A Entity interface represents entities that has AI, extends LivingEntity. entity like Zombie, Skeleton, Pig, Cow... any
entity that has AI will extend on it

:::note

This interface is the same as modern Bukkit Mob interface (>=1.12). you can expect to use it the same as them.

:::

**Class Interface:** `org.bukkit.entity.Mob`

**All Methods**

```java
    /**
     * Instructs this Mob to set the specified LivingEntity as its target.
     * Hostile creatures may attack their target, and friendly creatures may
     * follow their target.
     *
     * @param target New LivingEntity to target, or null to clear the target
     */
    void setTarget(LivingEntity target);

    /**
     * Gets the current target of this Mob
     *
     * @return Current target of this creature, or null if none exists
     */
    LivingEntity getTarget();

    /**
     * Enables access to control the pathing of an Entity
     * @return Pathfinding Manager for this entity
     */
    Pathfinder getPathfinder();

    /**
     * Instruct this Mob to look at a specific Location
     * Useful when implementing custom mob goals
     *
     * @param location location to look at
     */
    void lookAt(@NotNull org.bukkit.Location location);

    /**
     * Instruct this Mob to look at a specific Location
     * Useful when implementing custom mob goals
     *
     * @param location location to look at
     * @param headRotationSpeed head rotation speed
     * @param maxHeadPitch max head pitch rotation
     */
    void lookAt(@NotNull org.bukkit.Location location, float headRotationSpeed, float maxHeadPitch);

    /**
     * Instruct this Mob to look at a specific Entity
     * If a LivingEntity, look at eye location
     * Useful when implementing custom mob goals
     *
     * @param entity entity to look at
     */
    void lookAt(@NotNull Entity entity);

    /**
     * Instruct this Mob to look at a specific Entity
     * If a LivingEntity, look at eye location
     * Useful when implementing custom mob goals
     *
     * @param entity entity to look at
     * @param headRotationSpeed head rotation speed
     * @param maxHeadPitch max head pitch rotation
     */
    void lookAt(@NotNull Entity entity, float headRotationSpeed, float maxHeadPitch);

    /**
     * Instruct this Mob to look at a specific position
     * Useful when implementing custom mob goals
     *
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate
     */
    void lookAt(double x, double y, double z);

    /**
     * Instruct this Mob to look at a specific position
     * Useful when implementing custom mob goals
     *
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate
     * @param headRotationSpeed head rotation speed
     * @param maxHeadPitch max head pitch rotation
     */
    void lookAt(double x, double y, double z, float headRotationSpeed, float maxHeadPitch);

    /**
     * Gets the head rotation speed
     *
     * @return the head rotation speed
     */
    int getHeadRotationSpeed();

    /**
     * Gets the max head pitch rotation
     *
     * @return the max head pitch rotation
     */
    int getMaxHeadPitch();
    
    /**
     * Get if the mob have intelligence or not
     *
     * @return true if the mob have intelligence, false otherwise
     */
    boolean isIntelligence();

    /**
     * Allow or not to the mob to have intelligence
     *
     * @param intelligence boolean of the intelligence state
     */
    void setIntelligence(boolean intelligence);
```

---

## Pathfinder

Handles pathfinding operations for an Entity. Open the possibility to call custom pathfinding without NMS

`Mob#.getPathfinder()`

**Class Interface:** `com.destroystokyo.paper.entity.Pathfinder`

**All Methods**

```java
    /**
     * @return The entity that is controlled by this pathfinder
     */
    @NotNull
    Mob getEntity();

    /**
     * Instructs the Entity to stop trying to navigate to its current desired location
     */
    void stopPathfinding();

    /**
     * If the entity is currently trying to navigate to a destination, this will return true
     * @return true if the entity is navigating to a destination
     */
    boolean hasPath();

    /**
     * @return The location the entity is trying to navigate to, or null if there is no destination
     */
    @Nullable
    PathResult getCurrentPath();

    /**
     * Calculates a destination for the Entity to navigate to, but does not set it
     * as the current target. Useful for calculating what would happen before setting it.
     * @param loc Location to navigate to
     * @return The closest Location the Entity can get to for this navigation, or null if no path could be calculated
     */
    @Nullable PathResult findPath(@NotNull Location loc);

    /**
     * Calculates a destination for the Entity to navigate to to reach the target entity,
     * but does not set it as the current target.
     * Useful for calculating what would happen before setting it.
     *
     * The behavior of this PathResult is subject to the games pathfinding rules, and may
     * result in the pathfinding automatically updating to follow the target Entity.
     *
     * However, this behavior is not guaranteed, and is subject to the games behavior.
     *
     * @param target the Entity to navigate to
     * @return The closest Location the Entity can get to for this navigation, or null if no path could be calculated
     */
    @Nullable PathResult findPath(@NotNull LivingEntity target);

    /**
     * Calculates a destination for the Entity to navigate to, and sets it with default speed
     * as the current target.
     * @param loc Location to navigate to
     * @return If the pathfinding was successfully started
     */
    default boolean moveTo(@NotNull Location loc) {
        return moveTo(loc, 1);
    }

    /**
     * Calculates a destination for the Entity to navigate to, with desired speed
     * as the current target.
     * @param loc Location to navigate to
     * @param speed Speed multiplier to navigate at, where 1 is 'normal'
     * @return If the pathfinding was successfully started
     */
    default boolean moveTo(@NotNull Location loc, double speed) {
        PathResult path = findPath(loc);
        return path != null && moveTo(path, speed);
    }

    /**
     * Calculates a destination for the Entity to navigate to to reach the target entity,
     * and sets it with default speed.
     *
     * The behavior of this PathResult is subject to the games pathfinding rules, and may
     * result in the pathfinding automatically updating to follow the target Entity.
     *
     * However, this behavior is not guaranteed, and is subject to the games behavior.
     *
     * @param target the Entity to navigate to
     * @return If the pathfinding was successfully started
     */
    default boolean moveTo(@NotNull LivingEntity target) {
        return moveTo(target, 1);
    }

    /**
     * Calculates a destination for the Entity to navigate to to reach the target entity,
     * and sets it with specified speed.
     *
     * The behavior of this PathResult is subject to the games pathfinding rules, and may
     * result in the pathfinding automatically updating to follow the target Entity.
     *
     * However, this behavior is not guaranteed, and is subject to the games behavior.
     *
     * @param target the Entity to navigate to
     * @param speed Speed multiplier to navigate at, where 1 is 'normal'
     * @return If the pathfinding was successfully started
     */
    default boolean moveTo(@NotNull LivingEntity target, double speed) {
        PathResult path = findPath(target);
        return path != null && moveTo(path, speed);
    }

    /**
     * Takes the result of a previous pathfinding calculation and sets it
     * as the active pathfinding with default speed.
     *
     * @param path The Path to start following
     * @return If the pathfinding was successfully started
     */
    default boolean moveTo(@NotNull PathResult path) {
        return moveTo(path, 1);
    }

    /**
     * Takes the result of a previous pathfinding calculation and sets it
     * as the active pathfinding,
     *
     * @param path The Path to start following
     * @param speed Speed multiplier to navigate at, where 1 is 'normal'
     * @return If the pathfinding was successfully started
     */
    boolean moveTo(@NotNull PathResult path, double speed);

    /**
     * Checks if this pathfinder allows passing through closed doors.
     *
     * @return if this pathfinder allows passing through closed doors
     */
    boolean canOpenDoors();

    /**
     * Allows this pathfinder to pass through closed doors, or not
     *
     * @param canOpenDoors if the mob can pass through closed doors, or not
     */
    void setCanOpenDoors(boolean canOpenDoors);

    /**
     * Checks if this pathfinder allows passing through open doors.
     *
     * @return if this pathfinder allows passing through open doors
     */
    boolean canPassDoors();

    /**
     * Allows this pathfinder to pass through open doors, or not
     *
     * @param canPassDoors if the mob can pass through open doors, or not
     */
    void setCanPassDoors(boolean canPassDoors);

    /**
     * Checks if this pathfinder assumes that the mob can float
     *
     * @return if this pathfinder assumes that the mob can float
     */
    boolean canFloat();

    /**
     * Makes this pathfinder assume that the mob can float, or not
     *
     * @param canFloat if the mob can float, or not
     */
    void setCanFloat(boolean canFloat);

    /**
     * Represents the result of a pathfinding calculation
     */
    interface PathResult {

        /**
         * All currently calculated points to follow along the path to reach the destination location
         *
         * Will return points the entity has already moved past, see {@link #getNextPointIndex()}
         * @return List of points
         */
        @NotNull
        List<Location> getPoints();

        /**
         * @return Returns the index of the current point along the points returned in {@link #getPoints()} the entity
         * is trying to reach, or null if we are done with this pathfinding.
         */
        int getNextPointIndex();

        /**
         * @return The next location in the path points the entity is trying to reach, or null if there is no next point
         */
        @Nullable Location getNextPoint();

        /**
         * @return The closest point the path can get to the target location
         */
        @Nullable Location getFinalPoint();
    }
```

---

## MobGoals

Represents a part of the "brain" of a mob. It tracks all tasks (running or not), allows adding and removing vanilla or
custom goals

```java
    /**
     * Add a goal to the target mob
     *
     * @param mob the Mob
     * @param priority the Priority
     * @param goal the Goal
     * @param <T> the type of Mob
     */
    <T extends Mob> void addGoal(@NotNull T mob, int priority, @NotNull Goal<T> goal);

    /**
     * Remove a goal from the target mob
     *
     * @param mob the Mob
     * @param goal the Goal
     * @param <T> the type of Mob
     */
    <T extends Mob> void removeGoal(@NotNull T mob, @NotNull Goal<T> goal);

    /**
     * Remove every goals from target mob
     *
     * @param mob the Mob
     * @param <T> the type of Mob
     */
    <T extends Mob> void removeAllGoals(@NotNull T mob);

    /**
     * Remove every goals based on goal type from target mob
     *
     * @param mob the Mob
     * @param type the type of Goal
     * @param <T> the type of Mob
     */
    <T extends Mob> void removeAllGoals(@NotNull T mob, GoalType type);

    /**
     * Remove a goal based on key from target mob
     *
     * @param mob the Mob
     * @param key the Key of the Goal, If you are trying to remove a vanilla goal, See {@link VanillaGoal}
     * @param <T> the type of Mob
     */
    <T extends Mob> void removeGoal(@NotNull T mob, @NotNull GoalKey<T> key);

    /**
     * Check if the mob has a goal with the key
     *
     * @param mob the Mob
     * @param key the Key of the Goal, If you are trying to check a vanilla goal, See {@link VanillaGoal}
     * @param <T> the type of Mob
     * @return true if mob has the goal
     */
    <T extends Mob> boolean hasGoal(@NotNull T mob, @NotNull GoalKey<T> key);

    /**
     * Get the goal instance based on key from target mob
     *
     * @param mob the Mob
     * @param key the Key of the Goal, If you are trying to find a vanilla goal, See {@link VanillaGoal}
     * @param <T> the type of Mob
     * @return the Goal instance, null if no key matched
     */
    @Nullable
    <T extends Mob> Goal<T> getGoal(@NotNull T mob, @NotNull GoalKey<T> key);

    /**
     * Get the goal instances based on key from target mob
     *
     * @param mob the Mob
     * @param key the Key of the Goal, If you are trying to find vanilla goals, See {@link VanillaGoal}
     * @param <T> the type of Mob
     * @return the Goal instances, empty if no key matched
     */
    @NotNull
    <T extends Mob> Collection<Goal<T>> getGoals(@NotNull T mob, @NotNull GoalKey<T> key);

    /**
     * Get every goal instances from target mob
     *
     * @param mob the Mob
     * @param <T> the type of Mob
     * @return the Goal instances
     */
    @NotNull
    <T extends Mob> Collection<Goal<T>> getAllGoals(@NotNull T mob);

    /**
     * Get every goal instances based on goal type from target mob
     *
     * @param mob the Mob
     * @param type the type of Goal
     * @param <T> the type of Mob
     * @return the Goal instances, empty if no type matched
     */
    @NotNull
    <T extends Mob> Collection<Goal<T>> getAllGoals(@NotNull T mob, GoalType type);

    /**
     * Get every goal instances that aren't the specific type from target mob
     *
     * @param mob the Mob
     * @param type the type of Goal to filtered
     * @param <T> the type of Mob
     * @return the Goal instances
     */
    @NotNull
    <T extends Mob> Collection<Goal<T>> getAllGoalsWithout(@NotNull T mob, GoalType type);

    /**
     * Get every running goals from target mob
     *
     * @param mob the Mob
     * @param <T> the type of Mob
     * @return the Goal instances
     */
    @NotNull
    <T extends Mob> Collection<Goal<T>> getRunningGoals(@NotNull T mob);

    /**
     * Get every running goals based on goal type from target mob
     *
     * @param mob the Mob
     * @param type the type of Goal
     * @param <T> the type of Mob
     * @return the Goal instances
     */
    @NotNull
    <T extends Mob> Collection<Goal<T>> getRunningGoals(@NotNull T mob, GoalType type);

    /**
     * Get every running goal instances that aren't the specific type from target mob
     *
     * @param mob the Mob
     * @param type the type of Goal to filtered
     * @param <T> the type of Mob
     * @return the Goal instances
     */
    @NotNull
    <T extends Mob> Collection<Goal<T>> getRunningGoalsWithout(@NotNull T mob, GoalType type);

    /**
     * Wrap a instance of MobGoals for target mob
     * 
     * @param mob the Mob
     * @param <T> the type of Mob
     * @return the wrapped MobGoals
     */
    @NotNull
    <T extends Mob> EntityMobGoals<T> getEntityGoals(@NotNull T mob);
```

---

## Goal

Represents an AI goal of an entity. Replace the disgusting NMS PathfinderGoal to have clean AI codes

**Class Interface:** `org.imanity.imanitySpigot.ai.Goal`

**All Methods**

```java
    /**
     * Checks if this goal should be activated
     *
     * @return if this goal should be activated
     */
    boolean shouldActivate();

    /**
     * Checks if this goal should stay active, defaults to {@link Goal#shouldActivate()}
     *
     * @return if this goal should stay active
     */
    default boolean shouldStayActive() {
        return shouldActivate();
    }

    /**
     * Called when this goal gets activated
     */
    default void start() {
    }

    /**
     * Called when this goal gets stopped
     */
    default void stop() {
    }

    /**
     * Called each tick the goal is activated
     */
    default void tick() {
    }

    /**
     * A unique key that identifies this type of goal. Plugins should use their own namespace, not the minecraft
     * namespace. Additionally, this key also specifies to what mobs this goal can be applied to
     *
     * @return the goal key
     */
    @NotNull
    GoalKey<T> getKey();

    /**
     * Returns a list of all applicable flags for this goal.<br>
     *
     * This method is only called on construction.
     *
     * @return the subtypes.
     */
    GoalType getType();
```

**Example**

```java
import org.bukkit.Bukkit;
import org.bukkit.Location;
import org.bukkit.NamespacedKey;
import org.bukkit.entity.Zombie;
import org.imanity.imanityspigot.ai.Goal;
import org.imanity.imanityspigot.ai.GoalKey;
import org.imanity.imanityspigot.ai.GoalType;
import org.imanity.imanityspigot.ai.MobGoals;

public class GoingBackAndForwardGoal implements Goal<Zombie> {

    // The method to clear vanilla goals and insert our custom goal
    public static void insertGoal(Zombie zombie) {
        final MobGoals.EntityMobGoals<Zombie> entityGoals = Bukkit.imanity().getMobGoals().getEntityGoals(zombie);
        entityGoals.removeAllGoals(); // We don't want any other Goals affect our custom goal
        entityGoals.addGoal(10, new GoingBackAndForwardGoal(zombie)); // Add our custom goal
    }

    private final Zombie zombie;
    private final Location location;
    private int mul;
    public GoingBackAndForwardGoal(Zombie zombie) {
        this.zombie = zombie;
        this.location = zombie.getLocation(); // Zombie's current location will be center
        this.mul = 1;
    }

    @Override
    public boolean shouldActivate() {
        return true;
    }

    @Override
    public void start() {
    }

    @Override
    public void stop() {
    }

    @Override
    public void tick() {
        // Target Location
        final Location targetPos = location.clone().add(2 * mul, 0, 2 * mul);
        // If zombie is close to target position, go backward
        if (this.zombie.getLocation().distanceSquared(targetPos) < 1) {
            mul = -mul;
        }
        // Tell path finder go to the Target Location
        this.zombie.getPathfinder().moveTo(targetPos);
    }

    @Override
    public GoalKey<Zombie> getKey() {
        return GoalKey.of(Zombie.class, new NamespacedKey(SpigotTest.INSTANCE, ""));
    }

    @Override
    public GoalType getType() {
        return new GoalType(GoalType.SelectorType.GOAL, 1);
    }
}
```
