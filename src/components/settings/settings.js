import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Alert
} from 'react-native'
import Touchable from './touchable'

export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onPress() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={{ marginTop: 120 }}>

        <View style={[styles.rowContainer,styles.bottomMargin]}>
          <Touchable bgColor={{ backgroundColor: 'powderblue' }} onPress={this.onPress} icon="ios-people" text="Profile" />
          <Touchable bgColor={{ backgroundColor: 'skyblue' }} onPress={this.onPress} icon="ios-notifications" text="Notification" />
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
  rowContainer:{
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
  },
  bottomMargin:{
    marginBottom: 180
  }
})