---
id: troubleshooting
sidebar_position: 800
---

# Troubleshooting

## **An error has been thrown while initializing Launcher**

:::note
**This message doesn't contain any useful information, please look at the exception below the message.**

**Then, see this page to check is there any section contain similar exception you have.**
:::

If this page doesn't have the exception you're looking for. We provided a few solutions for you.


**Try to update your ImanitySpigot version:**

Please type `!update` in the console and type `0` to get the latest update. 

You can change the version whatever you want after it's able to be startup.

**If it still doesn't fix:**

Try to delete the `imanity` folder, this work 99% of the time. **REMEMBER TO BACK UP YOUR CONFIG FILES.**

**Still can't start your server?**

Contact us via **[Discord](https://go.imanity.dev/discord)** by opening a ticket.

## File Encoding

If you're seeing these error when launching:
- **java.lang.ClassCastException: java.lang.String cannot be cast to java.util.Map**
- **java.nio.charset.MalformedInputException: Input length = 1**

This problem occurs when your java encoding is not **UTF-8**, please add `-Dfile.encoding=UTF-8` before `-jar` in your java
startup flag.

Please keep in mind you **may** need to delete all the relevant config files.
