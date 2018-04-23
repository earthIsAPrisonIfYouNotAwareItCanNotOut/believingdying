import React, { Component } from 'react'
import { MainStack } from '../lib/navigation'
import { View, StatusBar } from 'react-native'

class MainApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle={'light-content'}/>
        <MainStack />
      </View>
    )
  }
}

export default MainApp
