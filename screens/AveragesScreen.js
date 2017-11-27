import React, { Component } from 'react';
import { AppRegistry, Text, Image } from 'react-native';
import styles from '../Styles';
import locale from '../Locale';

export default class AveragesScreen extends Component {
    static navigationOptions = {
        tabBarLabel: locale.averagesTab,
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

AppRegistry.registerComponent('AveragesScreen', () => AveragesScreen);
