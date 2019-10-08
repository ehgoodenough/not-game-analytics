const GameAnalytics = require("gameanalytics")
GameAnalytics._ = GameAnalytics.GameAnalytics

const NGA = module.exports = {}

NGA.isInitialized = false
NGA.isReporting = true
NGA.isLogging = false

NGA.initialize = function() {
    if(NGA.isLogging == true) {
        GameAnalytics._.setEnabledInfoLog(true)
        GameAnalytics._.setEnabledVerboseLog(true)
    }

    if(NGA.GAME_KEY == undefined
    || NGA.SECRET_KEY == undefined
    || NGA.BUILD_VERSION == undefined) {
        throw new Error("not-game-analytics is missing a key or build version.")
    }

    GameAnalytics._.configureBuild(NGA.BUILD_VERSION)
    GameAnalytics._.initialize(NGA.GAME_KEY, NGA.SECRET_KEY)

    NGA.isInitialized = true
}

// <Error> error
NGA.reportError = function(error) {
    if(NGA.isReporting != true) return
    if(NGA.isInitialized != true) NGA.initialize()
    GameAnalytics._.addErrorEvent(GameAnalytics.EGAErrorSeverity.Error, error.message)
}

// <String> stage
NGA.reportStageStart = function(stage) {
    if(NGA.isReporting != true) return
    if(NGA.isInitialized != true) NGA.initialize()
    GameAnalytics._.addProgressionEvent(GameAnalytics.EGAProgressionStatus.Start, stage)
}

// <String> stage
NGA.reportStageSuccess = function(stage) {
    if(NGA.isReporting != true) return
    if(NGA.isInitialized != true) NGA.initialize()
    GameAnalytics._.addProgressionEvent(GameAnalytics.EGAProgressionStatus.Complete, stage)
}

// <String> stage
NGA.reportStageFailure = function(stage) {
    if(NGA.isReporting != true) return
    if(NGA.isInitialized != true) NGA.initialize()
    GameAnalytics._.addProgressionEvent(GameAnalytics.EGAProgressionStatus.Fail, stage)
}

// <String> event like "FireLord:Death"
NGA.reportDesignEvent = function(event) {
    if(NGA.isReporting != true) return
    if(NGA.isInitialized != true) NGA.initialize()
    GameAnalytics._.addDesignEvent(event)
}
