import React, { Component } from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';
import NavigationBar from 'react-native-navigation-bar';

export default class Profile extends Component {
  static navigationOptions = { title: 'Profile' }

  render() {
    
    return (
      <View style={styles.container}>
        
        <NavigationBar 
          title={'this is a test'}
          height={44}
          titleColor={'#fff'}
          backgroundColor={'#149be0'}
          leftButtonIcon={}
          leftButtonTitle={'back'}
          onLeftButtonPress={()=>{}}
        />
        <SectionList
          sections={[
            { title: 'NAME', data: ['Innovation & Technology'] },
            { title: 'ESTABLISHED', data: ['5/4/2018'] },
            { title: 'PRESIDENT', data: ['Nguyen Huu Tri'] },
            { title: 'VICE PRESIDENT', data: ['Nguyen Huu Tri'] },
            { title: 'CHIEF OF FINANCE', data: ['Nguyen Huu Tri'] }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,

  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 12,
    color: 'gray',
    marginBottom: 4,
  },
  item: {
    paddingTop: 12,
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 12,
    fontSize: 14,
    backgroundColor: 'rgba(247,247,247,1.0)',
    marginBottom: 16,
  },
})