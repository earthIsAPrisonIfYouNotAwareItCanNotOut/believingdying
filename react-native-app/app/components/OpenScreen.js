import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class OpenScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.version}>版本信息</Text>
        </View>
        <View style={styles.textWrap}>
          <View>
            <Text style={styles.logo}>温州鸿联建材</Text>
          </View>
          <View>
            <Text style={styles.caption}>by unknown people</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textWrap: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#b80000'
  },
  caption: {
    fontSize: 10,
    color: '#b80000'
  },
  version: {
    fontSize: 20,
    color: '#b80000',
    marginVertical: 25
  }
})
