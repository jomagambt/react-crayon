import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';

import Lang from '../lang/Router';
import InstituteScreen from '../screens/InstituteScreen';
import Styles from '../global/Styles';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            institute: null,
            user: '',
            passwd: '',
        };
    }

    updateInstitute(institute) {
        this.setState({ institute });
    }

    render() {
        return (
            <View style={[Styles.container, Styles.justifyCenter, { padding: 24 }]}>
                <Text style={[Styles.fieldTitle, {paddingLeft: 4}]}>{Lang.institute}</Text>
                <View style={[Styles.flexRow, { alignItems: 'center', padding: 4 }]}>
                    <Text style={{ flex: 1 }}>{this.state.institute === null ? Lang.noInstituteSelected : this.state.institute.name}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Institutes', { onUpdate: this.updateInstitute.bind(this) })}>
                        <Ionicons name="ios-create" size={32} />
                    </TouchableOpacity>
                </View>
                <TextInput style={Styles.textInput} placeholder={Lang.username} onChangeText={(user) => this.setState({ user })} />
                <TextInput style={Styles.textInput} placeholder={Lang.password} secureTextEntry={true} onChangeText={(passwd) => this.setState({ passwd })} />
            </View>
        );
    }
}

export default createStackNavigator({
    Login: LoginScreen,
    Institutes: InstituteScreen,
}, {
    navigationOptions: ({ navigation }) => {
        return {
            title: navigation.state.routeName,
        };
    },
});