import { ADD_TODO, RESET_TODOS } from '../actionTypes'

const initialState = []

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    case RESET_TODOS:
      return []
    default:
      return state
  }
}