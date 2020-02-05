import React from 'react'
import { Route, useLocation, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PrivateRoute(props) {
  const user = useSelector(state => state.user)
  const location = useLocation()

  return (
    <Route {...props}>
      {
        user
          ? props.children
          : <Redirect to={{
            pathname: "/login",
            state: { referrer: location.pathname }
          }}
          />
      }
    </Route>
  )
}