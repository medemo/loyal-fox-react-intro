import React, { useState } from 'react'
import uuid from 'uuid/v1'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function Todos(props) {
  const [todos, setTodos] = useState([])

  const addNewTodo = (newTodo) => {
    setTodos(todos => [...todos, { id: uuid(), task: newTodo }])
  }

  return (
    <>
      <AddTodo addNewTodo={addNewTodo} />
      {
        todos.length > 0
          ? <TodoList todos={todos} />
          : <p>No todos</p>
      }
      <button
        onClick={() => setTodos([])}
        className="border border-gray-500 px-4 py-1 rounded"
      >
        RESET
        </button>
    </>
  )
}

export default Todos
