import React, { Component } from 'react';
import {
  SectionList,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import NavigationBar from 'react-native-navbar';

const { width, height } = Dimensions.get('screen');

export default class Profile extends Component {
  static navigationOptions = { title: 'Profile' }

  constructor(props) {
    super(props);
    this.state = {
      club : {
        _id: '1',
        id: 1,
        name: 'Innovation & Technology',
        established: '2018-05-04',
        pres: 3689251, //Account ID
        vice: 3689251, //Account ID
        chief: 3689251, //Account ID
        currentPoint: 50,
        currentRank: 1,
        prevRank: 2,
        staffID: 1234567
      }
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const leftButtonConfig = {
      title: 'Back',
      handler: () => navigate('SettingMenu'),
    };

    const titleConfig = {
      title: 'Profile',
      style: { paddingBottom: height / 80 }
    };

    return (
      <View style={styles.container}>
        {/* <NavigationBar
          containerStyle={{ backgroundColor: '#bdc3c7', height: height / 9.5, marginBottom: height / 30, }}
          style={{ paddingBottom: height / 80 }}
          title={titleConfig}
          leftButton={leftButtonConfig}
        /> */}
        <View >
          <SectionList
            sections={[
              { title: 'NAME', data: [this.state.club.name] },
              { title: 'ESTABLISHED', data: [this.state.club.established] },
              { title: 'PRESIDENT', data: [this.state.club.pres] },
              { title: 'VICE PRESIDENT', data: [this.state.club.vice] },
              { title: 'CHIEF OF FINANCE', data: [this.state.club.chief] }
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
    paddingTop: 22,

  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 20,
    paddingRight: 10,
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
  },
  item: {
    paddingTop: 12,
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 12,
    fontSize: 16,
    marginBottom: 16,
    marginHorizontal: -1,
    color: '#333',
    borderColor: '#ccc',
    borderWidth: 0.5,
  },
})