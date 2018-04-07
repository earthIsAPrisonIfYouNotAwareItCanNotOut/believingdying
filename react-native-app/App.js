import React from 'react';
import { Provider } from 'react-redux'
import OpenApp from './app/components/OpenApp'
// import store from './app/store'

export default class App extends React.Component {
  render() {
    return (
      <OpenApp />
    )
  }
}
