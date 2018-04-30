import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import { toggleSearchBar } from '../../reducers/persistReducer'
import { toggleClearIconButton } from '../../reducers/stockReducer'

import { AppBarContainer } from '../div/Container'
import {
  MenuIconButtonWrapper, NavigationTitleWrapper,
  SearchIconButtonWrapper, SearchTextFieldWrapper
} from '../div/Wrapper'
import {
  MenuIconButton, SearchIconButton, KeyboardBackspaceIconButton, ClearIconButton
} from '../button/Icon'
import { NavigationTitle } from '../text/Text'
import { oceanLightBlue } from '../color/color'
import { SearchTextField } from '../textField/TextField'

import SideList from '../list/SideList'

const MainAppBar = styled(AppBar).attrs({
  backgroundColor: props => props.backgroundColor
})`
  && {
    display: flex;
    flexDirection: row;
    background-color: ${props => props.backgroundColor};
  }
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
  toggleSearchBar(toggle) {
    this.props.toggleClearIconButton(false)
    this.props.toggleSearchBar(toggle)
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    })
    this.state.inputValue === ''
      ? this.props.toggleClearIconButton(false)
      : this.props.toggleClearIconButton(true)
  }
  clearSearchBarValue() {
    this.setState({
      inputValue: ''
    })
    this.props.toggleClearIconButton(false)
  }
  render() {
    const { title, searchBar, clearIconButton } = this.props
    return (
      <div>
        <MainAppBar
          position="static"
          backgroundColor={ searchBar ? 'white' : oceanLightBlue}>
          <Toolbar>
            <MenuIconButtonWrapper>
              { searchBar
                ? <KeyboardBackspaceIconButton
                      onClick={() => this.toggleSearchBar(false)}/>
                : <MenuIconButton onClick={this.toggleDrawer('left', true)}/>
              }
            </MenuIconButtonWrapper>
            <NavigationTitleWrapper>
              {
                searchBar
                ? <SearchTextFieldWrapper>
                    <SearchTextField
                        value={this.state.inputValue}
                        placeholder="请输入产品编码"
                        onChange={evt => this.updateInputValue(evt)}/>
                  </SearchTextFieldWrapper>
                : <NavigationTitle variant="title" color="inherit">
                    {title}
                  </NavigationTitle>
              }
            </NavigationTitleWrapper>
            <SearchIconButtonWrapper>
              {
                searchBar
                  ? ''
                  : <SearchIconButton
                        onClick={() => this.toggleSearchBar(true)}/>
              }
              {
                clearIconButton && <ClearIconButton
                                       onClick={() => this.clearSearchBarValue()}/>
              }
            </SearchIconButtonWrapper>
          </Toolbar>
        </MainAppBar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
            >
            <SideList/>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    title: state.persist.title,
    searchBar: state.persist.searchBar,
    clearIconButton: state.stock.clearIconButton
  }),
  {toggleSearchBar, toggleClearIconButton}
)(MainNavigation)
