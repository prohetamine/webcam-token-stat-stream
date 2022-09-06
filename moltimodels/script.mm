{
  "chaturbateEvent": [{
    "fetch": {
      "url": "http://localhost:8888/events?contextId=({event.contextId})&platform=({event.platform})&isToken=({event.parseMessageEvent.isToken})&tokenCount=({event.parseMessageEvent.tokenCount})&username=({event.parseMessageEvent.userUsername})"
    },
    "if": "({event.modelUsername}) == modelusername1",
    "cancel": 13000,
    "attemptsError": 3,
    "attemptsSleepError": 5000
  }, {
    "fetch": {
      "url": "http://localhost:8889/events?contextId=({event.contextId})&platform=({event.platform})&isToken=({event.parseMessageEvent.isToken})&tokenCount=({event.parseMessageEvent.tokenCount})&username=({event.parseMessageEvent.userUsername})"
    },
    "if": "({event.modelUsername}) == modelusername1",
    "cancel": 13000,
    "attemptsError": 3,
    "attemptsSleepError": 5000
  }]
}
