---
id: api-overview
sidebar_position: 100
---

# Overview

Do something programmatically with ImanitySpigot!

![version][apiVersion-url]

Many of the features that make ImanitySpigot 3 so successful are available through the API. This API lets you do
something programmatically so that you can do something from various sources leveraging the power of ImanitySpigot 3.

**Please read this page completely before using the API. This page contains everything to help you get started and what
you must know.**

---

## **Related Content**

- **[API Javadoc](https://imanity.dev/javadoc/spigot):** Documentation for the current release

---

## **Adding ImanitySpigot 3 API to your build**

### Using with Maven

Add Imanity Maven Repository to your Maven Project

```xml
<repositories>
    <!-- Imanity repo -->
    <repository>
        <id>imanity-repo</id>
        <url>https://repo.imanity.dev/imanity-libraries/</url>
    </repository>
</repositories>
```

Add Imanity Spigot API to your Maven Project Dependency

```xml
<dependencies>
    <!-- ImanitySpigot API -->
    <dependency>
        <groupId>org.imanity.imanityspigot</groupId>
        <artifactId>api</artifactId>
        <version>{VERSION}</version>
        <scope>provided</scope>
    </dependency>

    <!-- Original PaperSpigot -->
    <dependency>
        <groupId>org.imanity.paperspigot</groupId>
        <artifactId>paper1.8.8</artifactId>
        <version>1.8.8</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

---

### Using with Gradle

Add Imanity Maven Repository to your Gradle Project

```groovy
repositories {
    maven {
        url 'https://repo.imanity.dev/imanity-libraries/'
    }
}
```

Add Imanity Spigot API to your Gradle Project Dependency

```groovy
dependencies {
    compileOnly 'org.imanity.imanityspigot:api:{VERSION}'
    compileOnly 'org.imanity.paperspigot:paper1.8.8:1.8.8'
}
```

[apiVersion-url]: https://img.shields.io/badge/dynamic/json/?color=blue&label=API%20Version&query=version&url=https%3A%2F%2Frepo.imanity.dev%2Fapi%2Fmaven%2Flatest%2Fversion%2Fimanity-libraries%2Forg%252Fimanity%252Fimanityspigot%252Fapi&style=flat-square
