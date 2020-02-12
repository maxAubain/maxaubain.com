import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const ContentItemsCount = ({ path }) => {
  const [contentItems, setContentItems] = useState([])
  const [isContentLoaded, setIsConentLoaded] = useState(false)
  useEffect(() => {
    axios.get(path).then(response => {
      setContentItems(response.data)
      setIsConentLoaded(true)
    })
  }, [])

  let contentItemsCount = contentItems.length
  return <>{isContentLoaded && <>&nbsp;({contentItemsCount})</>}</>
}
