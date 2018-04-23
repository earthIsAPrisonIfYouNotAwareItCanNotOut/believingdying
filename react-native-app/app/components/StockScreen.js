import React from 'react'
import {
  TouchableOpacity,
  TextInput,
  View,
  Button,
  Text,
  FlatList,
  Animated,
  Easing
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

class StockScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params
    return {
      title: '库存',
      headerStyle: {
        backgroundColor: 'rgb(162,33,40)'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20
      },
      headerRight: (
        <Animated.View >
          <TouchableOpacity onPress={() => params.handleSearch()}>
            <Icon name="search" size={25} color="#fff" style={{marginRight: 10}}/>
          </TouchableOpacity>
        </Animated.View>
      ),
      headerLeft: (
        <Animated.View style={[{marginLeft: 10}, params.animatedStyle]}>
          <TouchableOpacity>
            <Icon name="menu" size={25} color="#fff"/>
          </TouchableOpacity>
        </Animated.View>
      )
    }
  }

  showSearchBar() {
    alert('show search bar')
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
    this.props.navigation.setParams({
      handleSearch: this.showSearchBar,
      animatedStyle: this.animatedStyle
    })
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1500
    }).start()
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation }
      ]
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Animated.View style={[{marginLeft: 10}, animatedStyle]}>
          <TouchableOpacity>
            <Icon name="menu" size={25}/>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

export default StockScreen
