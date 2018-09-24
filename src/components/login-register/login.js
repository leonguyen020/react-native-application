import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './loginForm';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../assets/images/appleicon.png')} />
            <Text style={styles.title}>
              A better way to manage your club.
            </Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm/>
          </View>
        {/* <Text> LoginPage </Text> */}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#FFF'
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent:'center'
    },
    logo:{
        width:100,
        height:100
    },
    formContainer:{

    },
    title:{
      color:"#FFF",
      marginTop: 10,
      width:160,
      textAlign:'center',
      opacity:0.9
    }
})
