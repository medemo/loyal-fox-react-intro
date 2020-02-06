import React from 'react'

function TodoList({ todos }) {
  return (
    <div>
      <p>Loyal Fox todos:</p>
      <ul
        data-testid="todos-list"
        className="list-disc list-inside"
      >
        {
          todos.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>
          })
        }
      </ul>
    </div>
  )
}

export default TodoList
