import React, { Component } from 'react';
import { AppRegistry, Text, Image } from 'react-native';
import styles from '../Styles';

export default class AveragesScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Schedule',
        tabBarIcon: ({tintColor}) => (
            <Image source={require('../assets/icons/ic_calendar.png')}
              style={[styles.icons, {tintColor: tintColor}]} />
        ),
    };

    render() {
        return (
            <Text>Hello you 2!</Text>
        );
    }
}

AppRegistry.registerComponent('AveragesScreen', () => AveragesScreen);
