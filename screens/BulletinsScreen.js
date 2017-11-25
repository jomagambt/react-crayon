import React, { Component } from 'react';
import { AppRegistry, Text, Image } from 'react-native';
import styles from '../Styles';

export default class BulletinsScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Bulletins',
        tabBarIcon: ({tintColor}) => (
            <Image source={require('../assets/icons/ic_alert.png')}
              style={[styles.icons, {tintColor: tintColor}]} />
        ),
    };

    render() {
        return (
            <Text>Hello you 2!</Text>
        );
    }
}

AppRegistry.registerComponent('BulletinsScreen', () => BulletinsScreen);
