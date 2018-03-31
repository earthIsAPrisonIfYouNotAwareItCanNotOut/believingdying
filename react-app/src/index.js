import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import { Provider } from 'react-redux'

// const loginSubmitHandler = (val) => store.dispatch(changePwdHelper(val))

// const actions = bindActionCreators({loginSubmitHandler: changePwdHelper}, store.dispatch)

// const render = () => {
// const state = store.getState()
// 1. Provider component take case of all state change and subscribing for us
// link store prop to Provider
// 2. get rid of state change
// nameHelper={state.nameHelper}
// pwdHelper={state.pwdHelper}
// 3. remove handle actions to App.js
// import { changePwdHelper } from './reducers/loginReducer'
// import { bindActionCreators } from 'redux'
// const actions = bindActionCreators({changePwdHelper}, store.dispatch)
// <App changePwdHelper={actions.changePwdHelper} />

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// }
// render()

// store.subscribe(render)

registerServiceWorker();
