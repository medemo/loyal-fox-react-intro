import { createStore, applyMiddleware, compose } from 'redux'

import reducer from './reducers'
import { thunk } from './middlewares'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(thunk)
  )
);


export default store