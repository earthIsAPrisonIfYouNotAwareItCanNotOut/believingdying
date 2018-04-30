import React, { Component } from 'react'
import { SearchTextField } from '../components/textField/TextField'

class HomeApp extends Component {
  render() {
    return (
      <div>
        <SearchTextField/>
        <h1>主页</h1>
      </div>
    )
  }
}

export default HomeApp
