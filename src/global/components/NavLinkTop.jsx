import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavLinkTop = ({ key, to, className, linkObj }) => {
  const handleViewReset = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }
  return (
    <NavLink key={key} to={to} className={className} onClick={handleViewReset}>
      {linkObj}
    </NavLink>
  )
}
