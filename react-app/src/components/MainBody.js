import React, { Component } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import StockApp from './StockApp'
import IndexApp from './IndexApp'

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class MainBody extends Component {
  render() {
    return (
      <BodyContainer>
      </BodyContainer>
    )
  }
}

export default MainBody
