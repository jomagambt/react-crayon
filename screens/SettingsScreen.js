import React, { Component } from 'react';
import { AppRegistry, Text, Image } from 'react-native';
import styles from '../Styles';

export default class SettingsScreen extends Component {
    render() {
        return (
            <Text>Settingz!</Text>
        );
    }
}

AppRegistry.registerComponent('SettingsScreen', () => SettingsScreen);
