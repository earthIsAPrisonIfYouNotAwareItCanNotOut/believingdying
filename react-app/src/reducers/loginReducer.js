const initState = {
  nameHelper: 'please enter name'
}

const loginReducer = (state = initState, action) => {
  switch (action.type) {
  case 'TODO_ADD':
    return {...state, todos: state.todos.concat(action.payload)}
  default:
    return state
  }
}

export default loginReducer
