{
  "chaturbateEvent": [{
    "fetch": {
      "url": "http://localhost:8888/events?contextId=({event.contextId})&platform=({event.platform})&isToken=({event.parseMessageEvent.isToken})&tokenCount=({event.parseMessageEvent.tokenCount})&username=({event.parseMessageEvent.userUsername})"
    },
    "delay": 500,
    "cancel": 13000,
    "attemptsError": 3,
    "attemptsSleepError": 5000
  }]
}
