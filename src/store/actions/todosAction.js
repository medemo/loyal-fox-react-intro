import { ADD_TODO, RESET_TODOS } from '../actionTypes'

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    todo: newTodo
  }
}

export const resetTodos = () => {
  return {
    type: RESET_TODOS,
  }
}