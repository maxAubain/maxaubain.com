import React from 'react'

export const ContentItemsCount = ({ data }) => {
  let contentItemsCount = data.length
  return <>&nbsp;({contentItemsCount})</>
}
