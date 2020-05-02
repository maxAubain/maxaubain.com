import React from 'react'

export const WebLink = ({ url, linkObj, className }) => {
  return (
    <a
      onClick={() => {
        window.open(url, '_blank')
      }}
      className={className}
    >
      {linkObj}
    </a>
  )
}
