import { loginFetch } from '../lib/Services'

const initState = {
  title: ''
}

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT'
export const commitLogin = (route) => ({type: LOGIN_SUBMIT, payload: route})
export const fetchLogin = (role) => {
  return(dispatch) => {
    loginFetch(role)
      .then(route => dispatch(commitLogin(route)))
  }
}

export const TITLE_CHANGE = 'TITLE_CHANGE'
export const changeTitle = (title) => ({type: TITLE_CHANGE, payload: title})
export const ROUTE_CHANGE = 'ROUTE_CHANGE'
export const changeRoute = (route) => ({type: ROUTE_CHANGE, payload: route})

const reducers = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return {...state, ...action.payload}
    case TITLE_CHANGE:
      return {...state, title: action.payload}
    case ROUTE_CHANGE:
      return {...state, route: action.payload}
    default:
      return state
  }
}
export default reducers
