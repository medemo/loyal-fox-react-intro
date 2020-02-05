import { LOGIN, LOGOUT } from '../actionTypes'
export const login = user => {
  return {
    type: LOGIN,
    user
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}