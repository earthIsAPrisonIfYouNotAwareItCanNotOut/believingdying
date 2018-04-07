import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import PermissionScreen from '../components//PermissionScreen'
import PermissionDetailScreen from '../components/PermissionDetailScreen'
import LoginScreen from '../components/LoginScreen'

export const PermissionStack = StackNavigator(
  {
    Permission: {
      screen: PermissionScreen
    },
    Detail: {
      screen: PermissionDetailScreen
    }
  },
  {
    initialRouteName: 'Permission'
  }
)

export const MainBottomTab = TabNavigator(
  {
    Permission: {
      screen: PermissionStack,
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
    tabBarPosition: 'bottom'
  }
)

export const Root = StackNavigator({
  Tab: {
    screen: MainBottomTab
  },
  Permission: {
    screen: PermissionScreen
  }
})
