import React from 'react'
import { TouchableOpacity, View, Button, Text, FlatList } from 'react-native'
// import Toolbar from './toolbar/Toolbar'
// import Icon from 'react-native-vector-icons/Feather'

class StockScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
          />
      </View>
    );
  }
}

export default StockScreen
