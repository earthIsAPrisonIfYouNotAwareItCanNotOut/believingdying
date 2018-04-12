import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { IconToggle, COLOR } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 22
  }
})
export default class RightElement extends Component {
  render() {
    const { onSearchPress, onSearchClear, isSearchActive, searchValue } = this.props;

    if (isSearchActive && searchValue.length === 0) {
      return null;
    }

    const iconProps = {};

    if (isSearchActive && searchValue.length > 0) {
      iconProps.name = 'clear';
      iconProps.color = COLOR.grey600;
      iconProps.onPress = onSearchClear;
    } else {
      iconProps.name = 'search';
      iconProps.color = 'white';
      iconProps.onPress = onSearchPress;
    }

    return (
      <View style={styles.container}>
        <IconToggle {...iconProps} />
      </View>
    )
  }
}
