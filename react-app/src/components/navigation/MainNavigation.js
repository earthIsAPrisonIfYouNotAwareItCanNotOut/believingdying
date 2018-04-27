import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import { changeTitle, changeRoute } from '../../reducers/reducers'

import { AppBarContainer } from '../div/Container'
import { NavigationTitleWrapper } from '../div/Wrapper'
import { MenuIconButton } from '../button/Icon'
import { NavigationTitle } from '../text/Text'

import SideList from '../list/SideList'

const MainAppBar = styled(AppBar)`
  display: flex;
  flexDirection: row;
`

class MainNavigation extends Component {
  state = {
    left: false
  }
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }
  render() {
    const { title } = this.props
    return (
      <div>
        <MainAppBar position="static" style={{backgroundColor: '#2196F3'}}>
          <Toolbar>
            <MenuIconButton onClick={this.toggleDrawer('left', true)} />
            <NavigationTitleWrapper>
              <NavigationTitle variant="title" color="inherit">
                {title}
              </NavigationTitle>
            </NavigationTitleWrapper>
          </Toolbar>
        </MainAppBar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
            >
            <SideList />
          </div>
        </Drawer>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    title: state.title
  }),
  {}
)(MainNavigation)
