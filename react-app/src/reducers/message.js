// 27
// 28
// 29-7
import {ITEM_ADD, ITEM_LOAD, ITEM_REPLACE, ITEM_REMOVE } from './login'
const MESSAGE_SHOW = 'MESSAGE_SHOW'

export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg})

export default function (state='', action) {
  switch(action.type) {
  case MESSAGE_SHOW:
    return action.payload
    // 27. when MESSAGE_SHOW is dispatched, the ITEM_ADD has been dispatched
    //     the 'Saving Todo' is shown by MESSAGE_SHOW
    //     and 'Saving Todo' is hidden by ITEM_ADD `return ''`
  case ITEM_ADD:
  case ITEM_LOAD:
  case ITEM_REPLACE:
    // 29-8
  case ITEM_REMOVE:
    return ''
  default:
    return state
  }
}
