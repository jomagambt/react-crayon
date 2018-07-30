import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';

// Screens
import GradesScreen from './GradesScreen';
import AveragesScreen from './AveragesScreen';

const TabNav = createBottomTabNavigator({
    Grades: GradesScreen,
    Averages: AveragesScreen,
}, {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;

            let iconName;
            if (routeName === 'Grades') {
                iconName = 'ios-paper';
            } else if (routeName === 'Averages') {
                iconName = 'ios-stats';
            }
            iconName += focused ? '' : '-outline';

            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});

export default class MasterScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Grades'),
        };
    };

    constructor(props) {
        super(props);
        this.updateNavTitle.bind(this);
    }

    updateNavTitle(state) {
        this.props.navigation.setParams({ title: state.routes[state.index].routeName });
    }

    render() {
        return <TabNav onNavigationStateChange={(prevState, newState) => this.updateNavTitle(newState)} />;
    }
}