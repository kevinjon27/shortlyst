import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Actions } from 'react-native-router-flux';
import {
  Right, Icon
} from 'native-base';


export default class ModalNavBar extends React.Component {

  _renderLeft() {
    return (
      <TouchableOpacity
        onPress={Actions.pop}
        elevation={5}
        style={[{ marginLeft: 15, width: 40}]}>
        <Icon type='Ionicons' name='close'/>
      </TouchableOpacity>
    )
  }

  _renderMiddle() {
    return (
      <Text style={ styles.navBarTitle }>{ this.props.title }</Text>

    )
  }
  _renderRight() {
    return (
      <Right style= {{ marginRight: 15 }}>
        <Text style= {{ color: '#a2a2a2' }}>Reset</Text>
      </Right>
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
    justifyContent: 'flex-end',
  }
})
