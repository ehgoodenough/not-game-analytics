# Not Game Analytics #

To get started:

```js
const GameAnalytics = require("not-game-analytics")

GameAnalytics.BUILD_VERSION = "vX.Y.Z"
GameAnalytics.GA_GAME_KEY = "XXXXXXXXXXXXX"
GameAnalytics.GA_SECRET_KEY = "XXXXXXXXXXXXX"
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
