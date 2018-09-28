import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Touchable from './touchable'
import {
  createStackNavigator,
} from 'react-navigation';

export default class Menu extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ marginTop: 120 }}>

        <View style={[styles.rowContainer, styles.bottomMargin]}>
          <Touchable
            bgColor={{ backgroundColor: 'powderblue' }}
            onPress={() => navigate('Profile')}
            icon="ios-people" text="Profile" />
          
          <Touchable 
            bgColor={{ backgroundColor: 'skyblue' }} 
            onPress={() => navigate('Notifications')} icon="ios-notifications" 
            text="Notifications" />
        </View>

        <View style={styles.rowContainer}>
          <Touchable bgColor={{ backgroundColor: 'steelblue' }} onPress={this.onPress} icon="ios-mail" text="Mail" />
          <Touchable bgColor={{ backgroundColor: 'lightsteelblue' }} onPress={this.onPress} icon="ios-trophy" text="Rankings" />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottomMargin: {
    marginBottom: 160
  }
}) 
