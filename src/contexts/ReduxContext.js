import React, { createContext, useContext, useEffect, useState } from 'react'
import store from '../store'

// using redux without react-redux

const ReduxContext = createContext()

export const useCustomSelector = (selector) => {
  const store = useContext(ReduxContext)
  const [value, setValue] = useState(selector(store.getState()))

  useEffect(() => {
    store.subscribe(() => {
      const storeValue = selector(store.getState())
      setValue(value => {
        if (value !== storeValue) {
          return storeValue
        }
        return value
      })
    }, [store, selector])
  })

  return value
}

export const useCustomDispatch = () => {
  const store = useContext(ReduxContext)
  return store.dispatch
}

export const ReduxProvider = (props) => {
  return (
    <ReduxContext.Provider value={store}>
      {props.children}
    </ReduxContext.Provider>
  )
}


/*

in App.js use:


<ReduxProvider>
  ...
  ...
</ReduxProvider>

*/
