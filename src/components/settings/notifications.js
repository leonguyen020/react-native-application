import React, { Component } from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';

export default class Notifications extends Component {
  static navigationOptions = { title: 'Notifications' }

  render() {
    return (
      <View style={styles.container}>
      
        <Text>Notifications</Text>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,

  },
})