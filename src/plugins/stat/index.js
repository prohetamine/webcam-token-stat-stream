const viewStat = require('./view-stat')

let stack = {
  chaturbate: {},
  bongacams: {},
  stripchat: {},
  myfreecams: {}
}

viewStat(stack)

module.exports = ({ fetch, test }) =>
  fetch.usePost('/events', ({ event, sendMessageSocket, nextPlugin }) => {
    const isToken = event.parseEvent.isToken
        , isUser = event.parseEvent.isUser
        , username = event.parseEvent.username
        , tokenCount = event.parseEvent.tokenCount
        , platform = event.platform

    if (isToken && isUser) {

      if (stack[platform][username]) {
        stack[platform][username] += tokenCount
      } else {
        stack[platform][username] = tokenCount
      }

      viewStat(stack)
    }

    nextPlugin()
  })
