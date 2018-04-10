import React from 'react';
import { Provider } from 'react-redux'
import OpenApp from './app/components/OpenApp'
import store from './store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <OpenApp />
      </Provider>
    )
  }
}
