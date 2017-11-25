import React, { Component } from 'react';
import { AppRegistry, Text, Image } from 'react-native';
import styles from '../Styles';

export default class ProfileManagementScreen extends Component {
    render() {
        return (
            <Text>Profilez!</Text>
        );
    }
}

AppRegistry.registerComponent('ProfileManagementScreen', () => ProfileManagementScreen);
