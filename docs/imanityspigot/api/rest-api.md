---
sidebar_position: 900
title: Rest API
---

# Rest API

## Download

HTTP Method: `GET`

License Type: `Enterprise`

URL: `https://imanity.dev/raisensu/download/ispigot3`

Parameters:
- `version`: The version of ImanitySpigot3. `(latest/latest/<yyyy>.<mm>.<release>b<build>[-LTS])`

Headers:
- `Authorization`: Your license key.
  
Response Data:
- JAR data

Example using `curl`:

- ```bash
  curl -o rancha.jar -H "Authorization: XXXX-XXXX-XXXX-XXXX" "https://imanity.dev/raisensu/download/ispigot3?version=latest"
  ```
