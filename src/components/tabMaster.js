import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './general-layout/home';
import Calendar from './general-layout/calendars';
import Settings from './general-layout/settings';


// type Props = {};
export default class TabMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

  render() {

    const AppTabNavigator = createMaterialTopTabNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-home" color={tintColor} size={24} />
                )
            }
        },
        Calendar: {
            screen: Calendar,
            navigationOptions: {
              tabBarLabel: 'Calendar',
              tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-calendar" color={tintColor} size={24} />
              )
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
              tabBarLabel: 'Settings',
              tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-settings" color={tintColor} size={24} />
              )
            }
        }
    },{
        initialRouteName: this.props.initialScreen,
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



    return (
        <SafeAreaView style={styles.container}>
            <AppTabNavigator />
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f2f2f2'
    }
});