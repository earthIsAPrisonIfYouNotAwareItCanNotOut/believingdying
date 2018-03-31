import React, { Component } from 'react'

// 7. connect redux to individual component
import { connect } from 'react-redux'
import { changePwdHelper } from '../../reducers/login'

import Button from 'material-ui/Button'

const LoginSubmitButton = (props) => {
  const { changePwdHelper } = props
  const submitHandler = (val) => {
    val = 'submitButton'
    changePwdHelper(val)
  }
  return (
    <Button style={{ width: 300}} onClick={submitHandler}>submit</Button>
  )
}

// 7. connect redux to individual component
//    connect changePwdHelper dispatch to props for LoginSubmitButton
export default connect(
  () => ({}),
  {changePwdHelper}
)(LoginSubmitButton)

// export default LoginSubmitButton
