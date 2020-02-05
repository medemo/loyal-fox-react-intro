import { createStore, combineReducers, applyMiddleware } from 'redux'
import todosReducer from './reducers/todosReducer'
import userReducer from './reducers/userReducer'
import { thunk } from './middlewares'

const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store