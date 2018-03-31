import React, {Component} from 'react'
import {connect} from 'react-redux'
// 28-8
// 29-9
// 30-4
import {
  fetchLoginList,
  toggleItem,
  deleteItem,
  getVisibleItem } from '../../reducers/login'

// if you get Item checkbox error message:
// Warning: A component is changing a controlled input of type checkbox to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component
// it means the isComplete is not always true or flase
// but rather true or undefined
// make sure it's always boolean

// 21. add LoginList
// 28-10. control the checked value through the onChange handle
// 29-12
const Item = ({id, name, isComplete, toggleItem, deleteItem}) => (
  <li>
    <span className="delete-item">
      <button onClick={() => deleteItem(id)}>x</button>
    </span>
    <input
      type="checkbox"
      value=""
      checked={isComplete}
      onChange={() => toggleItem(id)}/>
      {name}
  </li>
)

class LoginList extends Component {
  componentDidMount() {
    this.props.fetchLoginList()
  }

  // 22. if you get a error message
  //     'TypeError: undefined is not an object (evaluating 'this.props.items.map)'
  //     see the loginReducer resoluton
  // 28-9. pass into component as a prop
  // 29-11
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map(
            item =>
              <Item
                  key={item.id}
                  toggleItem={this.props.toggleItem}
                  deleteItem={this.props.deleteItem}
                  {...item}/>
          )}
      </ul>
    </div>
    )
  }}

// 28-7 connect component to redux
// 29-10
// 30-4. use ownProps to give us the props that the instance of our component
export default connect(
  (state, ownProps) => ({items: getVisibleItem(state.login.items, ownProps.filter)}),
  {fetchLoginList, toggleItem, deleteItem}
)(LoginList)
