---
sidebar_position: 2
title: Rancha
description: FAQ for Rancha
---

# Rancha FAQ

## **What is Rancha?**

Rancha is the launcher of ImanitySpigot3. It handles launching, library downloading, licensing, and updating. An
ImanitySpigot instance will need Rancha to boot up. When you download a copy of ImanitySpigot3, The file you receive
should be a copy of Rancha.

## **An error has been thrown while initializing Launcher**

This problem occurs when using old version ImanitySpigot with new version launcher. If you facing this problem,
please type `!update` in the console and type `0` to get the latest update. You can change the version whatever you want
after it's able to be startup.

## **java.nio.charset.MalformedInputException: Input length = 1**

This problem occurs when your config encoding is not UTF-8, please add `-Dfile.encoding=UTF-8` in your java
startup flag.
Please keep in mind you **may** need to delete all the relevant config files.

## **java.lang.ClassCastException: java.lang.String cannot be cast to java.util.Map**

This problem occurs when your config encoding is not UTF-8, please add `-Dfile.encoding=UTF-8` in your java
startup flag.
Please keep in mind you **may** need to delete all the relevant config files.

## **How to launch Rancha?**

There are **
zero** difference to launch Rancha between Spigot. You only need to change the target file in your startup flag. For instance, if your jvm startup flag is `java -jar Spigot.jar` just replace the .jar to Rancha: `java -jar Rancha.jar`.