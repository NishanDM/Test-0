import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
  <ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/contacts">Contacts</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/products">Products</NavLink></li>
  </ul>
</div>

  )
}

export default NavBar

