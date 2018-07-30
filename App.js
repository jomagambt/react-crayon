import React from 'react';
import { createStackNavigator } from 'react-navigation';

// Screen
import MasterScreen from './screens/MasterScreen';

const StackNav = createStackNavigator({
  Master: MasterScreen,
});

export default class App extends React.Component {
  render() {
    return <StackNav />;
  }
}
