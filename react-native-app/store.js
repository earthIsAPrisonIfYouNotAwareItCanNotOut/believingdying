import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import stockReducer from './app/reducers/stock'

// 24. use multiple reducers in redux with combineReducers
const reducer = combineReducers({
  stock: stockReducer
})

// 10. dispatch asynchronous actions with redux thunk
// const store = createStore(loginReducer)

export default createStore(
  reducer,
  applyMiddleware(thunk)
)
