import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className="flex mb-3">
      <Link to="/">Home</Link>
      <Link className="ml-3" to="/about">About</Link>
      <Link className="ml-3" to="/contact">Contact</Link>
    </div>
  )
}