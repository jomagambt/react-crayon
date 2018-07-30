import React from 'react';
import { View, TextInput, FlatList, ActivityIndicator } from 'react-native';

import Extractor from '../extractor/Extractor';

export default class InstituteSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            query: '',
        }
    }

    componentWillMount() {
        Extractor.getInstitutes().then((inst) => {
            this.setState({ loading: false });
            console.log(inst);
        }).catch((e) => {
            alert(e);
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <ActivityIndicator />
            );
        } else {
            return (
                <View>
                    <TextInput onChangeText={(query) => this.setState({ query })} />
                    <FlatList />
                </View>
            );
        }
    }
}