---
sidebar_position: 800
title: Chunk Analyse
---

# Chunk Analyse

## ChunkAnalyse

The ChunkAnalyse controller instance.

```java
void #start();

void #stop();

boolean #isRecording();

boolean #hasRecorded();

WorldAnalysesExport #getAnalyseExport(World world);

WorldAnalysesExport #getAnalyseExport(World world, SortTarget target, SortMethod method);

WorldAnalysesExport #getAnalyseExport(World world, SortTarget target, SortMethod method, EntityType entityType);

WorldAnalysesExport #getAnalyseExport(World world, SortTarget target, SortMethod method, TileEntityType tileEntityType)
```

---

## SortTarget

The sort target for the exported analyses

- `ALL` - Every targets
- `ENTITIES` - Use entity data as the main target
- `TILE_ENTITIES` - Use tile entity data as the main target
- `BLOCK_OPERATION` - Use block operation data as the main target (Fire spread, leaves decay etc)

---

## SortMethod

The sort method for the exported analyses

- `BY_TOTAL` - The total time spent for the target
- `BY_AVG` - The average time spent per tick for the target
- `BY_MAX` - The maximum time spent per tick for the target

---

## WorldAnalysesExport

The anaylses exported data, to get this you can do by `ChunkAnalyse.getAnalyseExport(World)`  
Make sure you have run `ChunkAnalyse.start()` and `ChunkAnalyse.stop()` before getting the export.

```java
ChunkAnalysesExport #getByChunk(int x, int z);

Collection<ChunkAnalysesExport> #getChunks();

AnalyseData #getByEntity(EntityType entityType);

AnalyseData #getByTileEntity(TileEntityType tileEntityType);

AnalyseData #getBlockOperation();

AnalyseData #getTotal();
```

---

## ChunkAnalysesExport

The anaylses exported data, to get this you can do by `WorldAnalysesExport.getByChunk(x, z)`

```java
int #getX();

int #getZ();

AnalyseData #getByEntity(EntityType entityType);

AnalyseData #getByTileEntity(TileEntityType tileEntityType);

AnalyseData #getBlockOperation();

AnalyseData #getTotal();
```

---

## AnalyseData

The instance where every data actually stored

```java
int #getCount();

double #getAvg();

double #getMax();

double #getTotal();
```
