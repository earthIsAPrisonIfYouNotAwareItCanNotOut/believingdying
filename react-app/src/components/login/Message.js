import React from 'react'
// 25. conenct Message to react-redux
import {connect} from 'react-redux'

// 23. create a component to display state message
// const Message = (props)
//   you can directly extracting message directly out of props
//   because `const {message} = this.props`
const Message = ({message}) => (
  message ? <span className="message">{message}</span> : null
)

// export default Message

// 25. connect message redux state to Message
export default connect(
  (state) => ({message: state.message})
)(Message)
