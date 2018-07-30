import React from 'react';
import { View, Text } from 'react-native';

import Styles from '../global/Styles';

export default class GradesScreen extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text>Grades!</Text>
            </View>
        );
    }
}