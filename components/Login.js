import React from 'react';
import { View, TextInput } from 'react-native';

import InstituteSelector from './InstituteSelector';
import Styles from '../global/Styles';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            passwd: '',
        };
    }

    render() {
        return (
            <View style={[Styles.container, Styles.justifyCenter]}>
                <InstituteSelector />
                <TextInput onChangeText={(user) => this.setState({ user })} />
                <TextInput secureTextEntry={true} onChangeText={(passwd) => this.setState({ passwd })} />
            </View>
        );
    }
}