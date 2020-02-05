import {
  ADD_TODO,
  RESET_TODOS,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from '../actionTypes'

const initialState = {
  data: [],
  loading: false,
  error: null
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS_START:
      return {
        ...state,
        loading: true
      }
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.todos
      }
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case ADD_TODO:
      return {
        ...state,
        data: [...state.data, action.todo]
      }
    case RESET_TODOS:
      return {
        ...state,
        data: []
      }
    default:
      return state
  }
}