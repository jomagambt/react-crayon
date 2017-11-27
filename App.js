import React from 'react';
import { AppRegistry, Platform, StatusBar, View, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';

// Globals
import styles from './Styles';
import locale from './Locale';

// Screens
import GradesScreen from './screens/GradesScreen';
import AveragesScreen from './screens/AveragesScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import BulletinsScreen from './screens/BulletinsScreen';
import ProfileManagementScreen from './screens/ProfileManagementScreen';
import SettingsScreen from './screens/SettingsScreen';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const COLOR_FOREGROUND = '#3030df';
const COLOR_APPBAR_BG = "#ffffff";
const COLOR_STATUSBAR_BG = "#aaaaaa";

const MainPageNav = TabNavigator({
    Grades: { screen: GradesScreen },
    Averages: { screen: AveragesScreen },
    Schedule: { screen: ScheduleScreen },
    Bulletins: { screen: BulletinsScreen },
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: COLOR_FOREGROUND,
        inactiveTintColor: '#CCCCCC',
        style: { backgroundColor: COLOR_APPBAR_BG },
    },
});

const HeaderNav = StackNavigator({
    Home: { screen: MainPageNav, navigationOptions: ({navigation}) => ({
        title: 'Crayon',
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image style={[styles.icons, { margin: 10, tintColor: COLOR_FOREGROUND }]}
              source={require('./assets/icons/ic_person.png')} />
          </TouchableOpacity>
        ),
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image style={[styles.icons, { margin: 10, tintColor: COLOR_FOREGROUND }]}
              source={require('./assets/icons/ic_settings.png')} />
          </TouchableOpacity>
        ),
        headerTitleStyle: { textAlign: 'center', alignSelf: 'stretch' },
    })},
    Profile: { screen: ProfileManagementScreen, navigationOptions: ({navigation}) => ({
        title: locale.manageProfiles,
    })},
    Settings: { screen: SettingsScreen, navigationOptions: ({navigation}) => ({
        title: locale.settings,
    })},
});

export default class App extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
                <View style={{ height: STATUSBAR_HEIGHT, backgroundColor: COLOR_STATUSBAR_BG }}>
                    <StatusBar translucent backgroundColor={COLOR_STATUSBAR_BG} barStyle="light-content" />
                </View>
                <HeaderNav navigation={this.props.navigation} />
            </View>
        );
    }
}
