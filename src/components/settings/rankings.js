import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import RankingCell from './ranking-cell'

export default class Rankings extends Component {

    static navigationOptions = { title: 'Rankings' }

    constructor(props) {
        super(props);
        this.state = {
            clubs: [
                {
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
                },
                {
                    _id: '2',
                    id: 2,
                    name: 'Music Club',
                    established: '2010-05-04',
                    pres: 3689251, //Account ID
                    vice: 3689251, //Account ID
                    chief: 3689251, //Account ID
                    currentPoint: 50,
                    currentRank: 2,
                    prevRank: 1,
                    staffID: 1234567
                },
                {
                    _id: '3',
                    id: 3,
                    name: 'Accounting Club',
                    established: '2013-05-04',
                    pres: 3689251, //Account ID
                    vice: 3689251, //Account ID
                    chief: 3689251, //Account ID
                    currentPoint: 50,
                    currentRank: 3,
                    prevRank: 3,
                    staffID: 1234567
                },
                {
                    _id: '4',
                    id: 4,
                    name: 'Lorem Club',
                    established: '2013-05-04',
                    pres: 3689251, //Account ID
                    vice: 3689251, //Account ID
                    chief: 3689251, //Account ID
                    currentPoint: 50,
                    currentRank: 4,
                    prevRank: 5,
                    staffID: 1234567
                },
                {
                    _id: '5',
                    id: 5,
                    name: 'Ipsum Club',
                    established: '2013-05-04',
                    pres: 3689251, //Account ID
                    vice: 3689251, //Account ID
                    chief: 3689251, //Account ID
                    currentPoint: 50,
                    currentRank: 5,
                    prevRank: 4,
                    staffID: 1234567
                },
                {
                    _id: '6',
                    id: 6,
                    name: 'Gelato Club',
                    established: '2013-05-04',
                    pres: 3689251, //Account ID
                    vice: 3689251, //Account ID
                    chief: 3689251, //Account ID
                    currentPoint: 50,
                    currentRank: 6,
                    prevRank: 6,
                    staffID: 1234567
                },
            ]
        }
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.clubs}
                    renderItem={({ item }) => <RankingCell {...item} />}
                />
            </View>
        );
    }
}
