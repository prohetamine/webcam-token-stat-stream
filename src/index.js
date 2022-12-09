const Mermaid = require('node-mermaid-extension')({
  port: 9999
})

const stat          = require('./plugins/stat')
    , end           = require('node-mermaid-extension/plugins/end')

;(async () => {
  const extension = await Mermaid.ready()

  extension.use(stat)
  extension.use(end)
})()
