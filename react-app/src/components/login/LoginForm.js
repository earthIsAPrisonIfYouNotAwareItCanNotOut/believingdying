import React, {Component} from 'react'
import {connect} from 'react-redux'
import { saveItem, updateCurrent } from '../../reducers/login'

// 20. add login form for saveLogin reducer
class LoginForm extends Component {
  handleInputChange = (evt) => {
    const val = evt.target.value
    // console.log(val)
    this.props.updateCurrent(val)
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.saveItem(this.props.currentItem)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               onChange={this.handleInputChange}
               value={this.props.currentItem}/>
      </form>
    )
  }
}

// mapStateToProps is a function get store's state and return specific props
//   (state) => state
// mapDispatchtoProps automaticly dispatch action
//   {action}

// use the combineReducers
// we need refector our code state.currentItem => state.login.currentItem
export default connect(
  (state) => ({currentItem: state.login.currentItem}),
  {updateCurrent, saveItem}
)(LoginForm)
