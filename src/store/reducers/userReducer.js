import { LOGIN, LOGOUT } from '../actionTypes'

const initialState = null

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return action.user
    case LOGOUT:
      return null
    default:
      return state
  }
}