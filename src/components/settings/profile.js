import React, { Component } from 'react';
import { 
  SectionList,
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import NavigationBar from 'react-native-navbar';

const {width,height} = Dimensions.get('screen');

export default class Profile extends Component {
  static navigationOptions = { title: 'Profile' }

  render() {
    const { navigate } = this.props.navigation;
    const leftButtonConfig = {
      title: 'Back',
      handler: () => navigate('SettingMenu'),
    };
    
    const titleConfig = {
      title: 'Profile',
      style:{paddingBottom:height/80}
    };
    return (
      <View style={styles.container}>
        <NavigationBar
          containerStyle={{backgroundColor:'#bdc3c7',height:height/9.5,marginBottom: height/30,}}
          style={{paddingBottom:height/80}}
          title={titleConfig}
          leftButton={leftButtonConfig}
        />
        <View >
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 22,

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