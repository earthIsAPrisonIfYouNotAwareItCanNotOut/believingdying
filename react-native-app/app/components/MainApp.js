import React, { Component } from 'react'
import { PermissionStack, MainBottomTab } from '../lib/navigation'
// import { PermissionStack } from './PermissionScreen'
// import { connect } from 'react-redux'

class MainApp extends Component {
  render() {
    return (
      <MainBottomTab />
    )
  }
}

export default MainApp

// export default connect(
  // (state) => ({tintColor: state.login.tintColor})
// )(MainApp)
