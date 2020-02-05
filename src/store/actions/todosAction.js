import {
  ADD_TODO,
  RESET_TODOS,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from '../actionTypes'
import uuid from 'uuid/v1'

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    todo: {
      id: uuid(),
      title: newTodo,
      completed: false,
    }
  }
}

export const resetTodos = () => {
  return {
    type: RESET_TODOS,
  }
}

export const fetchTodos = userId => (dispatch, getState) => {
  dispatch({
    type: FETCH_TODOS_START
  })
  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then(res => res.json())
    .then(todos => {
      dispatch({
        type: FETCH_TODOS_SUCCESS,
        todos
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_TODOS_FAILURE,
        error: err
      })
    })
}