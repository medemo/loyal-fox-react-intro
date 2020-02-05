import React from 'react'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import { addTodo, resetTodos } from '../store/actions/todosAction'
import { logout } from '../store/actions/userAction'

import { useDispatch, useSelector } from 'react-redux'


function Todos(props) {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const addNewTodo = (newTodo) => {
    dispatch(addTodo(newTodo))
  }

  const resetTodo = () => {
    dispatch(resetTodos())
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <AddTodo addNewTodo={addNewTodo} />
      {
        todos.length > 0
          ? <TodoList todos={todos} />
          : <p>No todos</p>
      }
      <div className="flex mt-5">
        <button
          onClick={resetTodo}
          className="border border-gray-500 px-4 py-1 rounded"
        >
          RESET
        </button>
        <button
          onClick={handleLogout}
          className="border border-gray-500 px-4 py-1 ml-3 rounded"
        >
          LOGOUT
        </button>

      </div>
    </>
  )
}

export default Todos
