import React, { Component } from 'react';
import { AppRegistry, Text, Image } from 'react-native';
import styles from '../Styles';
import locale from '../Locale';

export default class GradesScreen extends Component {
    static navigationOptions = {
        tabBarLabel: locale.gradesTab,
        tabBarIcon: ({tintColor}) => (
            <Image source={require('../assets/icons/ic_grades.png')} style={[styles.icons, {tintColor: tintColor}]} />
        ),
    };

    render() {
        return (
            <Text>Hello!</Text>
        );
    }
}

AppRegistry.registerComponent('GradesScreen', () => GradesScreen);
