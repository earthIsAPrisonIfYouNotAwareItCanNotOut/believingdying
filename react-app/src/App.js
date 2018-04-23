import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import LoginApp from './components/LoginApp'
import MainApp from './components/MainApp'
import StockApp from './components/StockApp'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(43, 152, 240)'
    }
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={LoginApp}/>
          <Route path="/main" component={MainApp}/>
        </Switch>
      </MuiThemeProvider>
    )
  }
}

export default App;
