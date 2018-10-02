import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class RankingCell extends Component {
  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.rank}> {this.props.currentRank} </Text>
        {this.props.currentRank < this.props.prevRank ?
          <Icon name='md-arrow-dropup' size={24} style={[styles.icon, styles.arrowUp]} />
          : (this.props.currentRank > this.props.prevRank ?
            <Icon name='md-arrow-dropdown' size={24} style={[styles.icon, styles.arrowDown]} />
            : <Icon name='md-remove' size={16} style={[styles.icon, styles.remove]} />
          )}
        <Text style={styles.name}> {this.props.name} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '80%',
    alignSelf: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
  },
  rank: {
    width: '10%',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333'
  },
  icon: {
    width: '10%',
    textAlign: 'center',

  },
  arrowUp: {
    color: 'green',
  },
  arrowDown: {
    color: 'red'
  },
  remove: {
    color: '#ccc'
  },
  name: {
    fontSize: 16,
    color: '#333',
  }
})
