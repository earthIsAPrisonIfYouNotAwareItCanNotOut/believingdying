import React, { Component } from 'react'
import { View } from 'react-native'
import { IconToggle, ThemeProvider } from 'react-native-material-ui'

const uiTheme = {
  spacing: {
    height: 50,
    width: 10
  }
}
export default class LeftElement extends Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View>
          <IconToggle name="menu" color="white" />
        </View>
      </ThemeProvider>
    )
  }
}
