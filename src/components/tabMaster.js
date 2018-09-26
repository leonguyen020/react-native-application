import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from './general-layout/home';
import CalendarsScreen from './general-layout/calendars';
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
            )
        }
    },
    Calendar: {
        screen: CalendarsScreen,
        navigationOptions: {
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-calendar" color={tintColor} size={24} />
          )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
          tabBarLabel: 'Settings',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-settings" color={tintColor} size={24} />
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
            borderTopColor: 'grey',
            fontSize: 5,
        },
        indicatorStyle: {
            height: 0,
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