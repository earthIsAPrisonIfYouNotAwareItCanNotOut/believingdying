import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'antd'
import LoginHeader from './LoginHeader'
import LoginNameTextField from './LoginNameTextField'
import LoginPasswordTextField from './LoginPasswordTextField'
import LoginSubmitButton from './LoginSubmitButton'
import './loginForm.css'

// const server = 'http://116.62.161.217/member.ashx?op=login&key=hl_123&ucode=HuYX&pswd=123'

class LoginForm extends React.Component {
  render() {
    return (
      <div className="container">
          <LoginHeader />
          <form className="loginForm">
            <div>
              <LoginNameTextField />
            </div>
            <div>
              <LoginPasswordTextField />
            </div>
            <div className="loginButton" >
              <LoginSubmitButton htmltype="submit"/>
            </div>
          </form>
      </div>
    );
  }
}

export default LoginForm
