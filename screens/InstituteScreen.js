import React from 'react';
import { View, Text, TextInput, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Styles from '../global/Styles';
import Extractor from '../extractor/Extractor';
import Lang from '../lang/Router';

export default class InstituteSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            institutes: [],
            foundInstitutes: [],
        };
        this.doFilter.bind(this);
    }

    componentWillMount() {
        Extractor.getInstitutes().then((inst) => {
            this.setState({ loading: false, institutes: inst.data, foundInstitutes: inst.data.slice(0, 20) });
            console.log(inst.data.length + ' institutes loaded');
        }).catch((e) => {
            console.error(e);
            this.setState({ loading: false, error: true });
        });
    }

    doFilter(q) {
        let results = this.state.institutes.filter((val) => {
            // Taken from https://stackoverflow.com/a/9310752
            let query = q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
                .replace(/a/g, '[aá]')
                .replace(/e/g, '[eé]')
                .replace(/u/g, '[uúüű]')
                .replace(/o/g, '[oóöő]')
                .replace(/i/g, '[ií]');
            return new RegExp(query, 'gi').test(val.name);
        });
        this.setState({ foundInstitutes: results });
    }

    renderListItem(item) {
        return (
            <TouchableOpacity onPress={() => this.updateInstitute(item)}>
                <Text style={{ padding: 8 }}>{ item.name }</Text>
            </TouchableOpacity>
        );
    }

    updateInstitute(item) {
        this.props.navigation.getParam('onUpdate', () => {})(item);
        this.props.navigation.goBack();
    }

    render() {
        if (this.state.loading) {
            return (
                <ActivityIndicator style={{ padding: 16 }} />
            );
        } else {
            if (this.state.error) {
                return <Text>{Lang.networkError}</Text>;
            }
            return (
                <View style={[Styles.flexCol, { padding: 8 }]}>
                    <TextInput style={Styles.textInput} placeholder={Lang.filter} onChangeText={(q) => this.doFilter(q)} />
                    <FlatList data={this.state.foundInstitutes} renderItem={({ item }) => this.renderListItem(item)} keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={() => <View style={Styles.separator}></View>} />
                </View>
            );
        }
    }
}