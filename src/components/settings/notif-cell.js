import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class NotificationCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.rowContainer}>
                <Icon name={this.props.type=='Event'?'ios-flame':'ios-chatbubbles'}
                    size={28}
                    style={styles.iconContainer}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.type}> {this.props.type} </Text>
                    <Text style={styles.desc}> {this.props.desc} </Text>
                    <Text style={styles.eventStartTime}> {this.props.eventStartTime} </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    rowContainer: {
        paddingTop: 10,
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
    },
    iconContainer: {
        width: 50,
        alignSelf: 'center',
        paddingHorizontal: 15,
        color: '#333'
    },
    textContainer: {
        flexGrow: 3,
        height: 70,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    type: {
        fontSize: 16,
        color: '#333'
    },
    desc: {
        fontSize: 12,
        color: '#555'
    },
    eventStartTime: {
        fontSize: 12,
        color: 'skyblue'
    }
})
