const initState = {
  title: ''
}

export const TITLE_CHANGE = 'TITLE_CHANGE'
export const changeTitle = (title) => ({type: TITLE_CHANGE, payload: title})
export const ROUTE_CHANGE = 'ROUTE_CHANGE'
export const changeRoute = (route) => ({type: ROUTE_CHANGE, payload: route})

const persistReducer = (state = initState, action) => {
  switch (action.type) {
    case TITLE_CHANGE:
      return {...state, title: action.payload}
    case ROUTE_CHANGE:
      return {...state, route: action.payload}
    default:
      return state
  }
}
export default persistReducer
