{
  "chaturbateHttpEvent": [{
    "fetch": {
      "url": "http://localhost:9999/events",
      "method": "POST",
      "mode": "cors",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": "{\"contextId\":\"({event.contextId})\",\"id\":({event.id}),\"hashId\":\"({event.hashId})\",\"platform\":\"({event.platform})\",\"modelUsername\":\"({event.modelUsername})\",\"pureEvent\":\"({event.pureEvent})\",\"isParsedEvent\":({event.isParsedEvent}),\"parseEvent\":{\"isModel\":({event.parseEvent.isModel}),\"isUser\":({event.parseEvent.isUser}),\"isAnon\":({event.parseEvent.isAnon}),\"isNotice\":({event.parseEvent.isNotice}),\"isToken\":({event.parseEvent.isToken}),\"isRemovedMessage\":({event.parseEvent.isRemovedMessage}),\"isDisconnect\":({event.parseEvent.isDisconnect}),\"isConnect\":({event.parseEvent.isConnect}),\"isRoomCount\":({event.parseEvent.isRoomCount}),\"tokenCount\":({event.parseEvent.tokenCount}),\"message\":\"({event.parseEvent.message})\",\"username\":\"({event.parseEvent.username})\",\"roomCount\":({event.parseEvent.roomCount}),\"user\":\"({event.parseEvent.user})\",\"model\":\"({event.parseEvent.model})\",\"notice\":\"({event.parseEvent.notice})\"}}"
    },
    "cancel": 15000,
    "attemptsError": 3,
    "attemptsSleepError": 5000
  }],
  "stripchatHttpEvent": [{
    "fetch": {
      "url": "http://localhost:9999/events",
      "method": "POST",
      "mode": "cors",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": "{\"contextId\":\"({event.contextId})\",\"id\":({event.id}),\"hashId\":\"({event.hashId})\",\"platform\":\"({event.platform})\",\"modelUsername\":\"({event.modelUsername})\",\"pureEvent\":\"({event.pureEvent})\",\"isParsedEvent\":({event.isParsedEvent}),\"parseEvent\":{\"isModel\":({event.parseEvent.isModel}),\"isUser\":({event.parseEvent.isUser}),\"isAnon\":({event.parseEvent.isAnon}),\"isNotice\":({event.parseEvent.isNotice}),\"isToken\":({event.parseEvent.isToken}),\"isRemovedMessage\":({event.parseEvent.isRemovedMessage}),\"isDisconnect\":({event.parseEvent.isDisconnect}),\"isConnect\":({event.parseEvent.isConnect}),\"isRoomCount\":({event.parseEvent.isRoomCount}),\"tokenCount\":({event.parseEvent.tokenCount}),\"message\":\"({event.parseEvent.message})\",\"username\":\"({event.parseEvent.username})\",\"roomCount\":({event.parseEvent.roomCount}),\"user\":\"({event.parseEvent.user})\",\"model\":\"({event.parseEvent.model})\",\"notice\":\"({event.parseEvent.notice})\"}}"
    },
    "cancel": 15000,
    "attemptsError": 3,
    "attemptsSleepError": 5000
  }]
}
