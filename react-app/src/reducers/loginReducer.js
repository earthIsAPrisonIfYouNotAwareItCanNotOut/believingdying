import { loginFetch } from '../lib/Services'

const initState = {
}

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT'
export const commitLogin = (route) => ({type: LOGIN_SUBMIT, payload: route})
export const fetchLogin = (role) => {
  return(dispatch) => {
    loginFetch(role)
      .then(route => dispatch(commitLogin(route)))
  }
}

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return {...state, ...action.payload}
    default:
      return state
  }
}
export default loginReducer
