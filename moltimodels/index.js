const express         = require('express')
    , app             = express()
    , cors            = require('cors')
    , bodyParser      = require('body-parser')
    , fs              = require('fs')
    , viewStat        = require('./../view-stat')

app.use(cors())

let tokens = {
  chaturbate: {},
  bongacams: {},
  striptchat: {},
  myfreecams: {}
}

viewStat(tokens)

app.get('/events', (req, res) => {
  const {
    isToken,
    platform,
    tokenCount,
    username
  } = req.query

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

const port = process.env.PORT
app.listen(port)
