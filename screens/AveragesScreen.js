import React from 'react';
import { View, Text } from 'react-native';

import Styles from '../global/Styles';

export default class AveragesScreen extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text>Averages!</Text>
            </View>
        );
    }
}