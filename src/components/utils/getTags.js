const getTagsA = arg => {
  const resultData = arg.map(item => item.content.tags)

  const allList = []
  resultData.map(item => {
    for (let j = 0; j < item.length; j++) {
      return allList.push(item[j])
    }
  })

  const result = []
  const occurrences = allList.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc
  }, {})

  for (const item in occurrences) {
    result.push(`${item} (${occurrences[item]})`)
  }

  return result.sort(function (a, b) {
    if (a < b) return -1
    if (a > b) return 1
    if ((a = b)) return 0
  })
}

const getTagsB = arg => {
  const resultData = arg.map(item => item.content.tags)
  const allTags = {}

  resultData.forEach(items => {
    items.forEach(tag => {
      if (!allTags[tag]) {
        allTags[tag] = 1
      } else {
        allTags[tag] += 1
      }
    })
  })

  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })
  return newTags
}

export { getTagsA, getTagsB }
