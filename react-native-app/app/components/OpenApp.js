import React, { Component } from 'react';
import MainApp from './MainApp'
import OpenScreen from './OpenScreen'

export default class OpenApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      component : <OpenScreen />
    }
  }

  componentDidMount(){
    this.timeoutHandle = setTimeout(() => {
      this.setState({ component: <MainApp /> })
    }, 1000)
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return (
      this.state.component
    );
  }
}
