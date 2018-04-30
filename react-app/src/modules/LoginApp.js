import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { changeTitle, changeRoute, toggleSearchBar } from '../reducers/persistReducer'
import { toggleClearIconButton } from '../reducers/stockReducer'

import { FlexContainerCenterColumn } from '../components/div/Container'
import { LoginTextField } from '../components/textField/TextField'
import { SubmitButton } from '../components/button/FlatButton'

class LoginApp extends Component {
  handleLogin() {
    this.props.changeTitle('主页')
    this.props.changeRoute('home')
    this.props.toggleSearchBar(false)
    this.props.toggleClearIconButton(false)
    this.props.history.push('/main/home')
  }
  render() {
    return (
      <FlexContainerCenterColumn>
        <LoginTextField
          id="with-placeholder"
          label="Name"
          placeholder="user name"
          margin="normal">
        </LoginTextField>
        <LoginTextField
          id="password-input"
          label="password"
          placeholder="password"
          autoComplete="current-password"
          margin="normal">
        </LoginTextField>
        <SubmitButton onClick={() => this.handleLogin()}>登陆</SubmitButton>
      </FlexContainerCenterColumn>
    );
  }
}

export default connect(
  null,
  {changeTitle, changeRoute, toggleSearchBar, toggleClearIconButton}
)(withRouter(LoginApp))
