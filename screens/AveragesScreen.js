import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import styles from '../Styles';

export default class AveragesScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Averages',
        tabBarIcon: ({tintColor}) => (
            <Image source={require('../assets/icons/ic_averages.png')} style={[styles.icons, {tintColor: tintColor}]} />
        ),
    };

    render() {
        return (
            <Text>Hello you 2!</Text>
        );
    }
}
