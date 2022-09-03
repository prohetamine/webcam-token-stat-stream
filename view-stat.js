
module.exports = tokens => {
  const lineLength = 30
      , itemsCount = 20

  console.clear()

  const plaforms = Object.keys(tokens)

  const platformsTitle = plaforms.map(
    platform =>
      platform + (' '.repeat(lineLength - platform.length))
  )

  const platformsCount = plaforms.map(
    plaforms =>
      Object.values(tokens[plaforms])
        .reduce(
          (ctx, number) => ctx + number, 0
        )
        .toString()
  ).map(
    platform =>
      platform + (' '.repeat(lineLength - platform.length))
  )

  const title = `platform   | ${platformsTitle.join('| ')}`
  console.log(title)
  console.log('-'.repeat(title.length))
  console.log(`tokens     | ${platformsCount.join('| ')}`)
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
                              item[itemIndex] = parsePlatform[i] ? parsePlatform[i].join(': ') : 'not star'
                              return item
                            }
                          )

                          return ctx
                      },
                      Array(itemsCount).fill(
                        Array(plaforms.length).fill([])
                      )
                    )[i]
                    .map(
                      username =>
                        username + (' '.repeat(lineLength - username.length))
                    )

    console.log(`username   | ${users.join('| ')}`)
  }
}
