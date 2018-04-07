import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import thunk from 'redux-thunk'
import loginReducer from './reducers/login'
import generalReducer from './reducers/general'

const reducer = combineReducers({
  login: loginReducer,
  general: generalReducer
})

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
