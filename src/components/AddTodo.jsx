import React, { useState } from 'react'

export default function AddTodo(props) {
  const [newTodo, setNewTodo] = useState('')

  const handleInputChange = e => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addNewTodo(newTodo)
    setNewTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border px-3 py-2 w-full"
        value={newTodo}
        onChange={handleInputChange}
      />
    </form>
  )
}