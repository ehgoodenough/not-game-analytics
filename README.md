# Not Game Analytics #

An unofficial wrapper library for [GameAnalytics](https://gameanalytics.com). If you are searching for the official library, you'll want to check out their [npm module](https://www.npmjs.com/package/gameanalytics).

To get started:

```js
const GameAnalytics = require("not-game-analytics")

GameAnalytics.BUILD_VERSION = "vX.Y.Z"
GameAnalytics.GAME_KEY = "XXXXXXXXXXXXX"
GameAnalytics.SECRET_KEY = "XXXXXXXXXXXXX"
```

To use:

```js
GameAnalytics.reportStageStart("Stage1")
GameAnalytics.reportStageSuccess("Stage1")
GameAnalytics.reportStageFailure("Stage1")
GameAnalytics.reportDesignEvent("FireLord:Death")
GameAnalytics.reportError(new Error("Something went wrong"))
```

To optionally configure:

```js
GameAnalytics.isLogging = true // set to true to show the logs.
GameAnalytics.isReporting = false // set to false to not send reports.
```
