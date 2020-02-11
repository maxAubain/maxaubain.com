import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const ContentItemsCount = ({ path }) => {
  // Get content items from file located by path
  const [contentItems, setContentItems] = useState([])
  useEffect(() => {
    axios.get(path).then(response => {
      setContentItems(response.data)
    })
  }, [])

  // If content items count is greater than 0, return count
  let contentItemsCount = contentItems.length
  if (contentItemsCount > 0) {
    return <>&nbsp;({contentItemsCount})</>
  } else {
    return <></>
  }
}
