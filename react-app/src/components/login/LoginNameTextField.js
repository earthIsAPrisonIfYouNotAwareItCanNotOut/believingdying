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

const LoginNameTextField = () => (
  <MuiThemeProvider theme={theme}>
    <TextField
      color="primary"
      id="with-placeholder"
      label="User Name"
      placeholder="Please enter"
      margin="normal"
      helperText="default helper"
      style={{ width: 300}}
      required
      />
  </MuiThemeProvider>
)

export default LoginNameTextField
