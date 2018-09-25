import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import TabMaster from './src/components/tabMaster';
import LoginPage from './src/components/login/login';

import BookingPage from './src/components/booking/booking';

// type Props = {};
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <TabMaster/> */}
        {/* <LoginPage/> */}
        <BookingPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#3498db',
  }
});
