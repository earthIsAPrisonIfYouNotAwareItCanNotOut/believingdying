import React, { Component } from 'react'
import styled from 'styled-components'
import { withStyles } from 'material-ui/styles'
import { withRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { changePage } from '../reducers/reducers'
import StockApp from './StockApp'
import IndexApp from './IndexApp'

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const HeaderContainer = styled.div`
`

const styles = {
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItem: 'center'
  },
  title: {
    flex: 1,
    marginBottom: 4
  },
  menuButton: {
    marginRight: 20
  },
  list: {
    width: 150,
  }
}

class MainApp extends Component {
  state = {
    left: false
  }
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }
  render() {
    const { classes, history } = this.props
    const sideList = (
      <div className={classes.list}>
        <div component="nav">
          <ListItem button onClick={() => history.push('/main/index')}>
            <ListItemText primary="主页" />
          </ListItem>
        </div>
        <div component="nav">
          <ListItem button onClick={() => history.push('/main/stock')}>
            <ListItemText primary="库存" />
          </ListItem>
        </div>
      </div>
    )
    return (
      <div>
        <HeaderContainer>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar style={{backGroundColor: 'red'}}>
              <div
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.toggleDrawer('left', true)}>
                <MenuIcon />
              </div>
              <Typography variant="title" color="inherit" className={classes.title}>
                主页
              </Typography>
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
        </HeaderContainer>
        <BodyContainer>
          <Switch>
            <Route path='/main/index' component={IndexApp} />
            <Route path='/main/stock' component={StockApp} />
          </Switch>
        </BodyContainer>
      </div>
    )
  }
}

export default withRouter(connect(
  (state) => ({}),
  {}
)(withStyles(styles)(MainApp)))
