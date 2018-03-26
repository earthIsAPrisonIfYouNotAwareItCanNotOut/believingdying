import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'antd'
import LoginTextField from './LoginTextField'
import LoginSubmitButton from './LoginSubmitButton'

// const server = 'http://116.62.161.217/member.ashx?op=login&key=hl_123&ucode=HuYX&pswd=123'

const LoginForm = () => (
  <form className="loginForm">
    <LoginTextField />
    <div className="loginButton" >
      <LoginSubmitButton htmltype="submit"/>
    </div>
  </form>
)

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm
