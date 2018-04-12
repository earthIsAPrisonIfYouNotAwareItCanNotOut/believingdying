import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { COLOR } from 'react-native-material-ui'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 22,
  },
  text: {
    fontWeight: '500',
    fontSize: 20,
    color: 'white',
  }
});

export default class CenterElement extends Component {
  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    )
  }
}
