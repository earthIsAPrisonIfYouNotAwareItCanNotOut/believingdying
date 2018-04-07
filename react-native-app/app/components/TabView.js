import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'

const Dimensions = require('Dimensions')
const ScreenWidth = Dimensions.get('window').width

class TabTopView extends Component {
  render() {
    return (
      <ScrollableTabView
        style={styles.container}
        renderTabBar={() => <ScrollableTabBar />}
        tabBarUnderlineStyle={styles.lineStyle} >
        <Text style={styles.textStyle} tabLabel='通用'>通用</Text>
        <Text style={styles.textStyle} tabLabel='权限1'>权限1</Text>
        <Text style={styles.textStyle} tabLabel='权限2'>权限2</Text>
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  lineStyle: {
    width: ScreenWidth/4,
    height: 2,
    backgroundColor: '#b12133'
  },
  textStyle: {
    flex: 1,
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center'
  }
})

export default TabTopView
