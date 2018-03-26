import React from 'react'
import LoginForm from './LoginForm'
import LoginHeader from './LoginHeader'
import './Login.css'

class Login extends React.Component {
  redner() {
    return (
      <div className="loginBackground">
        <LoginHeader />
        <LoginForm />
      </div>
    )
  }
}

export default Login
