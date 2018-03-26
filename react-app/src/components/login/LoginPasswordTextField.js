import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196F3'
    }
  }
})

const LoginPasswordTextField = () => (
  <MuiThemeProvider theme={theme}>
      <TextField
        id="password"
        color="primary"
        label="Password"
        type="password"
        autoComplete="current-password"
        placeholder="Please Enter"
        margin="normal"
        helperText="default helper"
        style={{ width: 300}}
        required
        />
  </MuiThemeProvider>
)

export default LoginPasswordTextField
