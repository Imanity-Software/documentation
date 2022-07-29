---
sidebar_position: 1
title: Imanity License System
description: FAQ for Imanity License System (Raisensu)
---

# Imanity License System (Raisensu) FAQ

## What is IP Whitelists/Limit?

We will record the IP of your host/machine. For example, if you have **`2 IP Whitelists`** and you have two machines
with IPs `1.1.1.1` and `2.2.2.2`, this will count as <u>**2**</u> IPs. 

Therefore, if you try to start the server on a host that
is `different from the IP in our database`, it will fail to start. 

**You don’t need to add IP manually. Once you start the server, our system will automatically record the IP.**

:::note
It is based on **IP rather than the number of machines/hosts**. This means that if you have **multiple
machines** (for example, 5) running with the <u>**same IP**</u>, they will not be counted as 5 recorded IPs.
:::

---

## How to clear my IP records?

As of June 11th, 2021, we no longer provide clear IP records in tickets. This can be done by **sending a private
message to** **`@Raisensu#6662`** using the command `!clearIpRecords`.

If you have multiple licenses, You can also use `!clearIpRecords <license key>` to select it.

:::tip
You can easily find the bot at the top of the member list of Imanity Discord.

This command has a restriction to prevent abuse. You can only clear IP records **once** every **48 hours**.

:::

## java.security.InvalidKeyException: Illegal key size

You are using any Java version before **`Java 8 u162`**, we highly suggest you update to the latest Java 8 possible. 

If for any reason you need to use the current Java version, you will need to download [**JCE Unlimited Strength**][jce8] and 
extract the jar files from the zip and save them in `${java.home}/jre/lib/security`

[jce8]: https://www.oracle.com/java/technologies/javase-jce8-downloads.html