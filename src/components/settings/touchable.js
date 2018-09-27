import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity, Text } from 'react-native'

export default class Touchable extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity
                style={[ {width: 120, height: 120, borderRadius: 25, justifyContent: 'center'}, 
                this.props.bgColor]}
                onPress={this.props.onPress}
            >
                <Icon name={this.props.icon}
                    size={36}
                    style={{ alignSelf: 'center', marginBottom: 8 }}
                />
                <Text style={{ textAlign: 'center', fontSize: 18 }}> {this.props.text} </Text>
            </TouchableOpacity>
        );
    }
}


