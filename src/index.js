const Mermaid = require('node-mermaid-extension')({
  listen: 8888
})

const stat          = require('./plugins/stat')
    , end           = require('node-mermaid-extension/plugin/end')

;(async () => {
  const extension = await Mermaid.ready()

  extension.use(stat)
  extension.use(end)
})()

/*const express         = require('express')
    , app             = express()
    , cors            = require('cors')
    , bodyParser      = require('body-parser')
    , fs              = require('fs')
    , viewStat        = require('./view-stat')

app.use(cors())

let tokens = {
  chaturbate: {},
  bongacams: {},
  striptchat: {},
  myfreecams: {}
}
  , LocalContxetId = 'null'

viewStat(tokens)

app.get('/events', (req, res) => {
  const {
    isToken,
    platform,
    tokenCount,
    username,
    contextId
  } = req.query


  if (LocalContxetId !== contextId) {
    console.log('clear stat')
    LocalContxetId = contextId
    tokens = {
      chaturbate: {},
      bongacams: {},
      striptchat: {},
      myfreecams: {}
    }
  }

  if (isToken === 'true') {
    if (tokens[platform]) {
      if (tokens[platform][username]) {
        tokens[platform][username] += parseInt(tokenCount)
      } else {
        tokens[platform][username] = parseInt(tokenCount)
      }
      viewStat(tokens)
    } else {
      tokens[platform] = {}
    }
  }

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send('ok')
})

app.listen(8888)
*/
