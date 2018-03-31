// 24
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import loginReducer from './reducers/login'
import messageReducer from './reducers/message'

// 24. use multiple reducers in redux with combineReducers
const reducer = combineReducers({
  login: loginReducer,
  message: messageReducer
})

// 10. dispatch asynchronous actions with redux thunk
// const store = createStore(loginReducer)

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
