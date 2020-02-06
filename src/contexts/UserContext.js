import React, { useReducer, useContext, createContext } from 'react'

// State management without using third party library

const UserContext = createContext()

function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.user
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

export const UserProvider = (props) => {
  const [user, dispatch] = useReducer(userReducer, null)

  const login = user => {
    dispatch({
      type: 'LOGIN',
      user
    })
  }

  const logout = () => {
    dispatch({
      type: 'LOGOUT'
    })
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)