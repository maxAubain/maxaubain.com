import React from 'react'
import './style/icon-small-plus'

export const IconSmallPlus = props => {
  return (
    <img
      className="icon-small-plus"
      src={props.src}
      alt={props.alt}
      height="40"
      width="40"
    ></img>
  )
}
