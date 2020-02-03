import React from 'react'

function TodoList({ todos }) {
  return (
    <div>
      <p>Loyal Fox todos:</p>
      <ul className="list-disc list-inside">
        {
          todos.map(todo => {
            return <li key={todo.id}>{todo.task}</li>
          })
        }
      </ul>
    </div>
  )
}

export default TodoList
