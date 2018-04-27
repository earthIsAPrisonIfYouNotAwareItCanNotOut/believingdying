import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { FlexContainerCenterColumn } from '../components/div/Container'
import MainNavigation from '../components/navigation/MainNavigation'

import StockApp from './StockApp'
import HomeApp from './HomeApp'

class MainApp extends Component {
  render() {
    return (
      <div>
        <MainNavigation />
        <FlexContainerCenterColumn>
          <Switch>
            <Route path='/main/home' component={HomeApp} />
            <Route path='/main/stock' component={StockApp} />
          </Switch>
        </FlexContainerCenterColumn>
      </div>
    )
  }
}

export default MainApp
