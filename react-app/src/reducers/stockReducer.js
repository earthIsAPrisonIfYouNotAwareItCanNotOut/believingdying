const initState = {
}

export const CLEARICONBUTTON_TOGGLE = 'CLEARICONBUTTON_TOGGLE'
export const toggleClearIconButton = (toggle) => ({
  type: CLEARICONBUTTON_TOGGLE, payload: toggle
})

const stockReducer = (state = initState, action) => {
  switch (action.type) {
    case CLEARICONBUTTON_TOGGLE:
      return {...state, clearIconButton: action.payload}
    default:
      return state
  }
}
export default stockReducer
