import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex mb-3 py-5">
      <Link data-testid="link-to-home" className="navbar-link" to="/">Home</Link>
      <Link data-testid="link-to-about" className="navbar-link ml-3" to="/about">About</Link>
      <Link data-testid="link-to-contact" className="navbar-link ml-3" to="/contact">Contact</Link>
    </div>
  )
}