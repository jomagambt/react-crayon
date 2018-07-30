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
            <View style={[Styles.container, Styles.justifyCenter, { padding: 24 }]}>
                <InstituteSelector />
                <TextInput style={Styles.textInput} onChangeText={(user) => this.setState({ user })} />
                <TextInput style={Styles.textInput} secureTextEntry={true} onChangeText={(passwd) => this.setState({ passwd })} />
            </View>
        );
    }
}