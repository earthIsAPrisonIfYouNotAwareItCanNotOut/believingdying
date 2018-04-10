import { getStock } from '../lib/stockServices'

const initState = {
  activeColor: '#be2133',
  inactiveColor: 'gray'
}

export const STOCK_LOAD = 'STOCK_LOAD'

export const loadStock = (items) => ({type: STOCK_LOAD, payload: items})
export const fetchLoginList = () => {
  return (dispatch) => {
    getStock()
      .then(items => dispatch(loadStock(items)))
  }
}

export default function (state = initState, action) {
  switch (action.type) {
  case STOCK_LOAD:
    return {...state, items: action.payload}
  default:
    return state
  }
}
