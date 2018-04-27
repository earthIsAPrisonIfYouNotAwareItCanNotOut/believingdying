import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { changeTitle, changeRoute } from '../../reducers/persistReducer'

import List, { ListItem, ListItemText } from 'material-ui/List'
import { ListWrapper } from '../div/Wrapper'

class SideList extends Component {
  handleSideList(title, route) {
    this.props.changeTitle(title)
    this.props.changeRoute(route)
    this.props.history.push('/main/' + route)
  }
  render() {
    return (
      <ListWrapper>
        <List>
          <ListItem
            button
            onClick={() => this.handleSideList('主页', 'home')}>
            <ListItemText primary="主页" />
          </ListItem>
          <ListItem
            button
            onClick={() => this.handleSideList('库存', 'stock')}>
            <ListItemText primary="库存" />
          </ListItem>
        </List>
      </ListWrapper>
    )
  }
}

export default connect(
  null,
  {changeTitle, changeRoute}
)(withRouter(SideList))
