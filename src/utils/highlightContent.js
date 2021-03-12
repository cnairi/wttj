import React from 'react'

const highlightContent = (content, filtersKeyword) => {
  const trimmedKeyword = filtersKeyword.trim()
  const matchRegexp = new RegExp(trimmedKeyword.replace(/[-[/\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'gi')

  const match = content.match(matchRegexp)
  if (!trimmedKeyword) return content

  const highlightedContent = content.split(matchRegexp).reduce((accumulator, currentValue, i) => {
    if (!i) return [currentValue]
    return accumulator.concat(
      <span key={filtersKeyword + currentValue} style={{ backgroundColor: '#FFCD00' }}>
        {match[i - 1]}
      </span>,
      currentValue
    )
  }, [])
  return highlightedContent
}

export default highlightContent
