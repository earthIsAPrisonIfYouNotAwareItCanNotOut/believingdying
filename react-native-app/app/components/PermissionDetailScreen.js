import React from 'react'
import { Button, View, Text } from 'react-native'

class PermissionDetailScreen extends React.Component {
  static navigationOptions = {
    title: '权限详情'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Detail')}
          />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
          />
      </View>
    );
  }
}

export default PermissionDetailScreen
