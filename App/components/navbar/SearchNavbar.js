import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Actions } from 'react-native-router-flux';
import {
  Icon,
  Right,
  Content,
  Item,
  Input,
  Button
} from 'native-base';

export default class SearchNavbar extends React.Component {

  _renderLeft() {
    return (
      <TouchableOpacity
        onPress={Actions.pop}
        elevation={5}
        style={[{ marginLeft: 15, width: 40}]}>
          <Icon type='Ionicons' name='arrow-back'/>
      </TouchableOpacity>
    )
  }

  _renderMiddle() {
    return (
      <Content>
        <Item style={[styles.searchBar, {width:250}]}>
          <Input placeholder="Search" style={styles.searchBox} />
        </Item>
      </Content>
    )
  }
  _renderRight() {
    return (
      <TouchableOpacity
        onPress={Actions.pop}
        elevation={5}
        style={[styles.navBarReset, { width: 50}]}>
          <Right style= {{ marginRight: 15 }}>
            <Text>Done</Text>
          </Right>
      </TouchableOpacity>

    )
  }

  render() {
    let dinamicStyle = {}

    dinamicStyle = { backgroundColor: '#fff'}

    return (
        <View style={[styles.container, dinamicStyle]}>
          { this._renderLeft() }
          { this._renderMiddle() }
          { this._renderRight() }
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    height: (Platform.OS === 'ios') ? 64 : 54,
    paddingTop: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#dddddd'
  },
  navBarTitle: {
    fontSize: 18,
  },
  navBarReset:{
    marginTop: 10
  },
  searchBar: {
    borderBottomColor:'transparent'
  }
})
