import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { COLOR } from 'react-native-material-ui';
import LeftElement from './LeftElement';
import CenterElement from './CenterElement';
import RightElement from './RightElement';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: COLOR.green500,
    elevation: 4,
  },
  statusBar: {
    height: 24,
  },
  toolbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    height: 56,
    flex: 1,
  },
});

export default class Toolbar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { isSearchActive: false, searchValue: '' };
  }
  onSearchPressed = () => {
    this.setState({ isSearchActive: true });
  }
  onSearchTextChanged = (searchValue) => {
    this.setState({ searchValue });
  }
  onSearchClearPressed = () => {
    this.onSearchTextChanged('');
  }
  onSearchClosed = () => {
    this.setState({ isSearchActive: false, searchValue: '' });
  }
  render() {
    const { isSearchActive, searchValue } = this.state;

    return (
      <View style={[styles.container, isSearchActive && { backgroundColor: 'white' }]}>
        <View style={styles.statusBar} />
        <View style={styles.toolbarContainer}>
          <LeftElement
            isSearchActive={isSearchActive}
            onSearchClose={this.onSearchClosed}
            />
          <CenterElement
            title="Animation"
            isSearchActive={isSearchActive}
            onSearchTextChange={this.onSearchTextChanged}
            searchValue={searchValue}
            />
          <RightElement
            isSearchActive={isSearchActive}
            onSearchPress={this.onSearchPressed}
            searchValue={searchValue}
            onSearchClear={this.onSearchClearPressed}
            />
        </View>
      </View>
    )
  }
}
