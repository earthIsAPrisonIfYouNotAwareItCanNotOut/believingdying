import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { changeTitle } from '../reducers/persistReducer'

import { FlexContainerCenterColumn } from '../components/div/Container'
import { LoginTextField } from '../components/textField/TextField'
import { SubmitButton } from '../components/button/FlatButton'

class LoginApp extends Component {
  handleLogin() {
    this.props.changeTitle('主页')
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
  {changeTitle}
)(withRouter(LoginApp))
