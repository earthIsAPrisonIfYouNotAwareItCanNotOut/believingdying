import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import StockScreen from '../components//StockScreen'
import LoginScreen from '../components/LoginScreen'

export const StockStack = StackNavigator(
  {
    Stock: {
      screen: StockScreen
    }
  }
)

export const MainStack = TabNavigator(
  {
    Stock: {
      screen: StockStack,
      navigationOptions: {
        tabBarLabel: '权限',
        tabBarIcon: ({ tintColor }) => <Icon name="th" size={25} color={tintColor} />
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarLabel: '登陆',
        tabBarIcon: ({ tintColor }) => <Icon name="user" size={25} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#be2133',
      inactiveTintColor: 'gray'
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
)
