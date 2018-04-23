import { loginFetch } from '../lib/loginServices'

const initState = {
}

export const LOGIN_ACTION = 'LOGIN_ACTION'

export const loginActionCreate = (path) => ({type: LOGIN_ACTION, payload: path})

// 13. create login fetch action
export const loginFetchAction = (user) => {
  return(dispatch) => {
    loginFetch(user)
      .then(path => dispatch(loginActionCreate(path)))
  }
}

export default function (state = initState, action) {
  switch (action.type) {
  case LOGIN_ACTION:
    return {...state, ...action.payload}
  default:
    return state
  }
}
