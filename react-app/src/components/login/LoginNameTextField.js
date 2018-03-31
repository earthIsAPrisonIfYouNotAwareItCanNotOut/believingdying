import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
// 14. mount login fetch action for LoginNametextfield component
import { fetchLogin } from '../../reducers/login'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196F3'
    }
  }
})

class LoginNameTextField extends React.Component {
  // 14. mount login fetch action for LoginNametextfield component
  componentDidMount() {
    this.props.fetchLogin()
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TextField
          color="primary"
          id="with-placeholder"
          label="User Name"
          placeholder="Please Enter"
          margin="normal"
          helperText={this.props.nameHelper}
          style={{ width: 300}}
          required
          />
      </MuiThemeProvider>
    )
  }
}

// export default LoginNameTextField

// 7. connect redux to individual component
//    only render the nameHelper of state for LoginNameTextField
// 14. mount login fetch action for LoginNametextfield component

// use the combineReducers
// we need refector our code state.nameHelper => state.login.nameHelper
export default connect(
  (state) => ({ nameHelper: state.login.nameHelper}),
  {fetchLogin}
)(LoginNameTextField)
