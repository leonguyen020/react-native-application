import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Settings from '../settings/settings';

export default class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Settings />
      </View>
    );
  }
}
