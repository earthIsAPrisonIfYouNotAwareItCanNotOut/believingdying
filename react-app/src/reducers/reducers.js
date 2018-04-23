import { loginFetch } from '../lib/loginServices'

const initState = {
}

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT'
export const loginSubmit = (payload) => ({type: LOGIN_SUBMIT, payload: payload})

export const SIDELIST_ONCLICK = 'SIDELIST_ONCLICK'
export const sideListOnclick = (page) => ({tyle: SIDELIST_ONCLICK, page: page})
export const changePage = (page) => {
  return (dispatch) => {
    dispatch(sideListOnclick(page))
  }
}

// 13. create login fetch action
export const loginFetchSubmit = (user) => {
  return(dispatch) => {
    loginFetch(user)
      .then(path => dispatch(loginSubmit(path)))
  }
}

export default function (state = initState, action) {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return {...state, ...action.payload}
    case SIDELIST_ONCLICK:
      return {...state, title: action.page.title}
    default:
      return state
  }
}
