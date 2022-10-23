
module.exports = tokens => {
  const lineLength = 30
      , itemsCount = 20

  console.clear()

  const plaforms = Object.keys(tokens).sort((b, a) =>
    Object.keys(tokens[a]).reduce((ctx, elem) => ctx + tokens[a][elem], 0)
      -
    Object.keys(tokens[b]).reduce((ctx, elem) => ctx + tokens[b][elem], 0)
  )

  const platformsTitle = plaforms.map(
    platform =>
      platform + (' '.repeat(lineLength - platform.length))
  )

  const platformsCount = plaforms.map(
    plaforms => {
      const tokensCount = Object.values(tokens[plaforms])
        .reduce(
          (ctx, number) => ctx + number, 0
        )

      return `${tokensCount}tk / ${(tokensCount * 0.05).toFixed(2)}$`
    }
  ).map(
    platform =>
      platform + (' '.repeat(lineLength - platform.length))
  )

  const title = `    |  platform     | ${platformsTitle.join('| ')}`
  console.log(title)
  console.log('-'.repeat(title.length))
  console.log(`#   |  tokens / $   | ${platformsCount.join('| ')}`)
  console.log('-'.repeat(title.length))

  for (let i = 0; i < itemsCount; i++) {
    const users = plaforms
                    .reduce(
                      (ctx, plaform, itemIndex) => {
                          const parsePlatform = Object.keys(tokens[plaform])
                                                  .map(
                                                    username =>
                                                      [
                                                        username
                                                          ? username
                                                          : 'Anonymous'
                                                        ,
                                                        tokens[plaform][username]
                                                      ]
                                                    )
                                                    .sort(
                                                      (a, b) =>
                                                        b[1] - a[1]
                                                      )

                          ctx = ctx.map(
                            item => {
                              item[itemIndex] = parsePlatform[i] ? `${parsePlatform[i][0]}: ${parsePlatform[i][1]}tk / ${(parsePlatform[i][1] * 0.05).toFixed(2)}$` : 'not star'
                              return item
                            }
                          )

                          return ctx
                      },
                      Array(itemsCount).fill(
                        Array(plaforms.length).fill([])
                      )
                    )[i]
                    .map(username => (u => u.length > 28 ? username.slice(0, 25) + '...' : username)(username))
                    .map(
                      username =>
                        username + (' '.repeat(lineLength - username.length))
                    )

    console.log(`#${( n => n + (' '.repeat(2 - n.toString().length)))(i+1)}  | username     | ${users.join('| ')}`)
  }
}
