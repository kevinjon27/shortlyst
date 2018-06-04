import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient';
import {
  Icon,
} from 'native-base';

export default class NavBar extends React.Component {

  _renderLeft() {
    return (
      <TouchableOpacity
        onPress={Actions.pop}
        elevation={5}
        style={[styles.navBarItem, { marginLeft: 10}]}>
          <Icon type='Ionicons' name='arrow-back'/>
      </TouchableOpacity>
    )
  }

  _renderMiddle() {
    return (
      <View style={[ styles.navBarItem, { alignItems: 'center' } ]}>
        <LinearGradient
          colors={['#2361eb', '#f7f7f7']}
              start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
              style={ styles.linearGradient}>
          <Text>
            <Text style={[styles.textTitle, styles.nameTitle]}>{ this.props.name } </Text>
              <Text style={styles.textTitle}>{ this.props.title }</Text>
          </Text>
        </LinearGradient>
      </View>

    )
  }

  _renderRight() {
    return (
      <View style={[styles.navBarItem, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
        <TouchableOpacity
          onPress={() => Actions.filter() }
          style={{flex: 3, justifyContent: 'center', alignItems:'flex-end', marginRight: 20}}>
          <Image
            resizeMode="contain"
            source={require('../../assets/more.png')}></Image>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    paddingTop: 20,
    backgroundColor: 'white'
  },
  navBarItem: {
    flex: 1,
    justifyContent: 'center'
  },
    linearGradient: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 25,
      borderColor: '#ebebeb',
      height: (Platform.OS === 'ios') ? 34 : 24,
      width: 200
    },
    nameTitle: {
      fontWeight: 'bold',
      width: 50
    },
    textTitle: {
      width: 100,
      fontSize: 12,
      color: '#ffffff',
      backgroundColor: 'transparent',
    }
})
