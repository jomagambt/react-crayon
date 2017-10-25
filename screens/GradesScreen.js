import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import styles from '../Styles';

export default class GradesScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Grades',
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
