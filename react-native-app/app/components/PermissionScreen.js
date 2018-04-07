import React from 'react';
import { View, Text, Button } from 'react-native';

class PermissionScreen extends React.Component {
  static navigationOptions = {
    title: '权限'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Detail')}
          />
      </View>
    );
  }
}

export default PermissionScreen
