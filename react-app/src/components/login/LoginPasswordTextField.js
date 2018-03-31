import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196F3'
    }
  }
})

const LoginPasswordTextField = (props) => {
  const { pwdHelper } = props
  return (
    <MuiThemeProvider theme={theme}>
      <TextField
        id="password"
        color="primary"
        label="Password"
        type="password"
        autoComplete="current-password"
        placeholder="Please Enter"
        margin="normal"
        helperText={pwdHelper}
        style={{ width: 300}}
        required
        />
    </MuiThemeProvider>
  )
}

// export default LoginPasswordTextField

// 7. connect redux to individual component
//    only render the pwdHelper of state for LoginPasswordTextField

// use the combineReducers
// we need refector our code state.pwdHelper => state.login.pwdHelper
export default connect(
  (state) => ({ pwdHelper: state.pwdHelper})
)(LoginPasswordTextField)
