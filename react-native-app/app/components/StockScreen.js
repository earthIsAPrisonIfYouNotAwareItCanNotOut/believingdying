import React from 'react'
import { TouchableOpacity, View, Button, Text, SectionList } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

class StockScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      title: '库存',
      headerRight: (
        <TouchableOpacity
          backgroundColor="rgba(0, 0, 0, 0)"
          onPress={() => params.handleSearch()} >
          <Icon name="search" style={{marginRight: 10}} size={20} color="gray"/>
        </TouchableOpacity>
      )
    }
  }

  _searchDetails() {
    alert("search");
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleSearch: this._searchDetails })
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

export default StockScreen
