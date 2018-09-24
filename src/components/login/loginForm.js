import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
            placeholder="Your email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            style={styles.input}
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType='email-address'
            autoCapitalize="none"
            autoCorrect={false}
        />

        <TextInput 
            placeholder="Your password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            secureTextEntry
            returnKeyType="go"
            style={styles.input}
            ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
                Login
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color:"#FFF",
        paddingHorizontal: 10,
    },
    buttonContainer:{
        backgroundColor:"#2980b9",
        paddingVertical: 15,
    },
    buttonText:{
        textAlign:'center',
        color:'#FFF',
        fontWeight: '700',
        fontSize: 15,
    }
})
