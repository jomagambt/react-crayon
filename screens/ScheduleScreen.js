import React, { Component } from 'react';
import { AppRegistry, Text, Image } from 'react-native';
import styles from '../Styles';
import locale from '../Locale';

export default class ScheduleScreen extends Component {
    static navigationOptions = {
        tabBarLabel: locale.scheduleTab,
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

AppRegistry.registerComponent('ScheduleScreen', () => ScheduleScreen);
