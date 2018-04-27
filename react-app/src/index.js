import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from './reducers/reducers'
import { loadState, saveState } from './localStorage'

import IndexApp from './modules/IndexApp';
import LoginApp from './modules/LoginApp'
import MainApp from './modules/MainApp'

const persistedState = loadState()
const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={IndexApp}/>
          <Route path="/login" component={LoginApp}/>
          <Route path="/main" component={MainApp}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
