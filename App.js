import React from 'react';
import { AppRegistry, Platform, StatusBar, View, Text, Image } from 'react-native';
import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';
import GradesScreen from './screens/GradesScreen';
import AveragesScreen from './screens/AveragesScreen';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const APPBAR_BG = "#ffffff";
const STATUSBAR_BG = APPBAR_BG;

const MainPageNav = TabNavigator({
    Grades: { screen: GradesScreen },
    Averages: { screen: AveragesScreen },
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#3030df',
        inactiveTintColor: '#CCCCCC',
        style: { backgroundColor: APPBAR_BG },
    },
});

const HeaderNav = StackNavigator({
    Home: { screen: MainPageNav, navigationOptions: ({navigation}) => ({
        title: 'Whatevear...',
    }) },
}, { headerMode: 'none' });

export default class App extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
                <View style={{ height: STATUSBAR_HEIGHT, backgroundColor: STATUSBAR_BG }}>
                    <StatusBar translucent backgroundColor={STATUSBAR_BG} barStyle="light-content" />
                </View>
                <View style={{ height: APPBAR_HEIGHT, backgroundColor: APPBAR_BG, justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ color: "black", textAlign: 'center', fontSize: 20 }}>Whatevear..</Text>
                </View>
                <HeaderNav navigation={this.props.navigation} />
            </View>
        );
    }
}
