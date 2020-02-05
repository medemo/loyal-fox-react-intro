import { createStore, combineReducers } from 'redux'
import todosReducer from './reducers/todosReducer'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store