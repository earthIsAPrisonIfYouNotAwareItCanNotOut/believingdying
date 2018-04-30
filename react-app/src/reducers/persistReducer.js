import { oceanLightBlue } from '../components/color/color'

const initState = {
  backgroundColor: oceanLightBlue
}

export const TITLE_CHANGE = 'TITLE_CHANGE'
export const changeTitle = (title) => ({type: TITLE_CHANGE, payload: title})

export const ROUTE_CHANGE = 'ROUTE_CHANGE'
export const changeRoute = (route) => ({type: ROUTE_CHANGE, payload: route})

export const SEARCHBAR_TOGGLE = 'SEARCHBAR_TOGGLE'
export const toggleSearchBar = (toggle) => ({
  type: SEARCHBAR_TOGGLE, payload: toggle
})

const persistReducer = (state = initState, action) => {
  switch (action.type) {
    case TITLE_CHANGE:
      return {...state, title: action.payload}
    case ROUTE_CHANGE:
      return {...state, route: action.payload}
    case SEARCHBAR_TOGGLE:
      return {...state, searchBar: action.payload}
    default:
      return state
  }
}
export default persistReducer
