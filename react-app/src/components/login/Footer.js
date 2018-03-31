import React from 'react'
import { Link } from 'react-router-dom'

// 30-1. use react-router
export default (props) => (
  <div>
    <Link to='/'>All</Link>
    <Link to='/active'>Active</Link>
    <Link to='/completed'>Completed</Link>
  </div>
)
