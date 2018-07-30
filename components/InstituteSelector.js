import React from 'react';
import { View, Text, TextInput, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

import Styles from '../global/Styles';
import Extractor from '../extractor/Extractor';
import Lang from '../lang/Router';

export default class InstituteSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            query: '',
            institutes: [],
            foundInstitutes: [],
        }
    }

    componentWillMount() {
        Extractor.getInstitutes().then((inst) => {
            this.setState({ loading: false, institutes: inst.data, foundInstitutes: inst.data.slice(0, 50) });
            console.log(inst.data.length + ' institutes loaded');
        }).catch((e) => {
            console.error(e);
            this.setState({ loading: false, error: true });
        });
    }

    renderListItem(item) {
        return (
            <TouchableOpacity onPress={() => alert('pressed')}>
                <Text style={{ padding: 8 }}>{ item.name }</Text>
            </TouchableOpacity>
        );
    }

    render() {
        if (this.state.loading) {
            return (
                <ActivityIndicator />
            );
        } else {
            if (this.state.error) {
                return <Text>{Lang.networkError}</Text>;
            }
            return (
                <View>
                    <TextInput style={Styles.textInput} onChangeText={(query) => this.setState({ query })} />
                    <FlatList data={this.state.foundInstitutes} keyExtractor={(item, _) => item.id} ItemSeparatorComponent={() => <View style={Styles.separator} />}
                        renderItem={({ item }) => this.renderListItem(item)} style={{ maxHeight: 200, width: '100%' }} />
                </View>
            );
        }
    }
}