import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
// import FontAwesome, { Icons } from 'react-native-fontawesome';

import HomeScreen from './general-layout/home';
import SettingsScreen from './general-layout/settings';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <AppTabNavigator />
        </SafeAreaView>
    );
  }
}

const AppTabNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" color={tintColor} size={24} />
            // <FontAwesome color={tintColor} size={24}>
            //     {Icons.home}
            // </FontAwesome>
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
          tabBarLabel: 'Settings',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-settings" color={tintColor} size={24} />
            // <FontAwesome color={tintColor} size={24}>
            //     {Icons.Settings}
            // </FontAwesome>
          )
        }
    }
},{
    initialRouteName: 'Home',
    // order: ['Settings', 'Home'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
        activeTintColor: 'orange',
        inactiveTintColor: 'grey',
        style: {
            backgroundColor: '#f2f2f2',
            borderTopWidth: 0.5,
            borderTopColor: 'grey'
        },
        indicatorStyle: {
            height: 0
        },
        showIcon: true
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f2f2f2'
    }
});