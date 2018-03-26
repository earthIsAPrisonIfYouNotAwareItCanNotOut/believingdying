import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import MenusButton from './MenusButton'
import Drawer from 'material-ui/Drawer';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import MainDrawerList from './MainDrawerList'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196F3'
    }
  }
})

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  list: {
    width: 250
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class MainDrawerAndAppBar extends React.Component {
  state = {
    left: false
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <MainDrawerList />
      </div>
    )
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.toggleDrawer('left', true)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Title
              </Typography>
              <MenusButton/>
            </Toolbar>
          </AppBar>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
              >
              {sideList}
            </div>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}

MainDrawerAndAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MainDrawerAndAppBar)
