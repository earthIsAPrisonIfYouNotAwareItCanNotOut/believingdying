import React, { Component } from 'react'
import styled from 'styled-components'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { withRouter } from 'react-router-dom'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LoginLogo = styled.h2`
  padding-top: 30px;
  font-size: 30px;
`
const LoginSubtitle = styled.p`
  margin-top: -15px;
  font-size: 16px;
  color: #9e9e9e;
`
const LoginTextField = styled(TextField)`
  width: 300px;
`
const SubmitButton = styled(Button)`
  top: 30px;
  width: 300px;
  height: 48px;
`

class LoginApp extends Component {
  handleLogin() {
    this.props.history.push('/main')
  }
  render() {
    return (
      <FormContainer>
        <LoginLogo>鸿联建材</LoginLogo>
        <LoginSubtitle>WhenZhouHongLianJianCaiLianSuo</LoginSubtitle>
        <LoginTextField
          id="with-placeholder"
          label="Name"
          placeholder="user name"
          margin="normal">
          123
        </LoginTextField>
        <LoginTextField
          id="password-input"
          label="password"
          placeholder="password"
          autoComplete="current-password"
          margin="normal">
          123
        </LoginTextField>
        <SubmitButton onClick={() => this.handleLogin()}>登陆</SubmitButton>
      </FormContainer>
    );
  }
}

export default withRouter(LoginApp);
