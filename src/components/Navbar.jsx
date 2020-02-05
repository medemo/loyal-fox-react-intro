import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className="flex mb-3 py-5">
      <Link className="navbar-link" to="/">Home</Link>
      <Link className="navbar-link ml-3" to="/about">About</Link>
      <Link className="navbar-link ml-3" to="/contact">Contact</Link>
    </div>
  )
}