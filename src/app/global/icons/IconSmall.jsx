import React from 'react'
import './style/icon-small'

export const IconSmall = props => {
  return (
    <img
      className="icon-small"
      src={props.src}
      alt={props.alt}
      height="30"
      width="30"
    ></img>
  )
}
