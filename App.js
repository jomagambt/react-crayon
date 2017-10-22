import React from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';
import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';
import GradesScreen from './GradesScreen';
import AveragesScreen from './AveragesScreen';

const MainPageNav = TabNavigator({
    Grades: { screen: GradesScreen },
    Averages: { screen: AveragesScreen },
}, {
    animationEnabled: true,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#111',
    },
});

const HeaderNav = StackNavigator({
    Home: { screen: MainPageNav, navigationOptions: ({navigation}) => ({
        title: 'Whatevear...',
    }) },
});

export default class App extends React.Component {
    render() {
        return(
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#444', height: 24 }} />
                <HeaderNav navigation={this.props.navigation} />
            </View>
        );
    }
}
