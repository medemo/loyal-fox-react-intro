import React, { useEffect } from 'react'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import { addTodo, resetTodos } from '../store/actions/todosAction'
import { logout } from '../store/actions/userAction'
import { fetchTodos } from '../store/actions/todosAction'

import { useDispatch, useSelector } from 'react-redux'


function Todos(props) {
  const todos = useSelector(state => state.todos)
  const user = useSelector(state => state.user)
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

  useEffect(() => {
    dispatch(fetchTodos(user.id))
  }, [dispatch, user.id])

  const renderTodos = () => {
    if (todos.loading)
      return <p>Loading</p>
    else if (todos.error)
      return <p>something wrong</p>
    else if (todos.data.length > 0)
      return <TodoList data-testid="todos-list" todos={todos.data} />
    else
      return <p>No todos</p>
  }

  return (
    <>
      <AddTodo addNewTodo={addNewTodo} />
      <div className="my-5">
        {renderTodos()}
      </div>
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
