import React from 'react'

function TodoList({ todos }) {
  return (
    <div>
      <p>Loyal Fox todos:</p>
      <ul className="list-disc list-inside">
        {
          todos.map((todo, i) => {
            return <li key={i}>{todo}</li>
          })
        }
      </ul>
    </div>
  )
}

export default TodoList
