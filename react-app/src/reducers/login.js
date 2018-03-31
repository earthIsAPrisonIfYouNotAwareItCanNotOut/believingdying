// 11. add login fetch services
// 19. createLogin
// 21
// 28-1
// 29-2
import {
  getLogin,
  createItem,
  getLoginList,
  updateItem,
  destroyItem } from '../lib/loginServices'
// 26. use combine message with login reducer
import {showMessage} from './message'

// 12. init state by fetch url
// nameHelper: 'please enter name',
// pwdHelper: 'no submitClick'

// 22. if you get a error message
//     'TypeError: undefined is not an object (evaluating 'this.props.items.map)'
//     it should be init items in initState
const initState = {
  nameHelper: '',
  pwdHelper: '',
  items: [],
  currentItem: ''
}

// 27. when a action is dispatched, all the reducers will receive this action
//     so you can response to a single action in multiple reducers
//     we need export action between each reducer
// hidde MESSAGE_SHOW
export const ITEM_ADD = 'ITEM_ADD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'
const LOGIN_SUBMIT = 'LOGIN_SUBMIT'
const LOGIN_LOAD = 'LOGIN_LOAD'
// 27. show MESSAGE_SHOW
export const ITEM_LOAD = 'ITEM_LOAD'
// 28-3. update item action
// const ITEM_REPLACE = 'ITEM_REPLACE'
// 28-6. export replace action
//       because when item replace is done
//       I want to clear the message in the message reducer
export const ITEM_REPLACE = 'ITEM_REPLACE'
// 29-4. define delete item action
export const ITEM_REMOVE = 'ITEM_REMOVE'

export const changePwdHelper = (val) => ({type: LOGIN_SUBMIT, payload: val})
// 22. update item
export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val})
// 15. create load login action creator
export const loadLogin = (loginItem) => ({type: LOGIN_LOAD, payload: loginItem})
// 18. add login save action creator
export const addItem = (item) => ({type: ITEM_ADD, payload: item})
// 28-4. update action creator
export const replaceItem = (item) => ({type: ITEM_REPLACE, payload: item})
// 29-5. define delete item action object
export const removeItem = (id) => ({type: ITEM_REMOVE, payload: id})
// 19. add login save action (note the save property name)
export const saveItem = (name) => {
  return (dispatch) => {
    // 26
    dispatch(showMessage('Saving Item'))
    createItem(name)
      .then(res => dispatch(addItem(res)))
  }
}
// 13. create login fetch action
export const fetchLogin = () => {
  return(dispatch) => {
    getLogin()
      .then(items => dispatch(loadLogin(items)))
  }
}

// 21
export const loadLoginList = (items) => ({type: ITEM_LOAD, payload: items})
export const fetchLoginList = () => {
  return (dispatch) => {
    // 27. show 'Loading Todos'
    dispatch(showMessage('Loading Items'))
    getLoginList()
      .then(items => dispatch(loadLoginList(items)))
  }
}

// 28-2. lean on the second argument getState
//       that will give back the entire state object
export const toggleItem = (id) => {
  return (dispatch, getState) => {
    dispatch(showMessage('Update Item'))
    // we use the login reducer namespace as login
    // getState().login will return all of the state
    // that my login reducer is connected with
    // and that contain the items array
    const {items} = getState().login
    // return the match item
    const item = items.find(i => i.id === id)
    // spread item and set the name with 'sb' based on match item
    const toggled = {...item, isComplete: !item.isComplete}
    // console.log(toggled)

    // pass in toggled and response with a then result
    // the result will pass back item
    // we want to replace the item and going to pass in that response
    // then I will dispatch the replaceItem a new action creator

    // console.log(updateItem(toggled))
    updateItem(toggled)
      .then(res => dispatch(replaceItem(res)))
    // .then(res => console.log(res))
  }
}

// 29-3. create an async action creator for deleting a item
export const deleteItem = (id) => {
  return (dispatch) => {
    dispatch(showMessage('Removing Item'))
    destroyItem(id)
      .then(() => dispatch(removeItem(id)))
  }
}

// 30-2. selector function
export const getVisibleItem = (items, filter) => {
  switch(filter) {
  case 'active':
    return items.filter(i => !i.isComplete)
  case 'completed':
    return items.filter(i => i.isComplete)
  default:
    return items
  }
}
export default function (state = initState, action) {
  switch (action.type) {
  case ITEM_ADD:
    return {...state, currentItem: '', items: state.items.concat(action.payload)}
  case ITEM_LOAD:
    return {...state, items: action.payload}
  case LOGIN_SUBMIT:
    return {...state, pwdHelper: action.payload}
  case LOGIN_LOAD:
    return {...state, ...action.payload}
  case CURRENT_UPDATE:
    return {...state, currentItem: action.payload}
    // 28-5 update item reducer
    //      create new items by calling state.items.map
    //      pass in the existing item
    //      if the item's id matches the action's id
    //      return action's payload
  case ITEM_REPLACE:
    return {
      ...state,
      items: state.items
        .map(
          i => i.id === action.payload.id ? action.payload : i
        )
    }
    // 29-6. define delete item reducer
  case ITEM_REMOVE:
    return {...state,
            items: state.items.filter(i => i.id !== action.payload)}
  default:
    return state
  }
}
