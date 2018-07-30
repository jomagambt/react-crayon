import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Styles from './global/Styles';
import Profileman from './profileman/Profileman';
import Login from './components/Login';

// Screen
import MasterScreen from './screens/MasterScreen';

const StackNav = createStackNavigator({
  Master: MasterScreen,
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, hasProfiles: false };
  }

  componentWillMount() {
    Profileman.setup().then(() => {
      return Profileman.getProfiles();
    }).then((res) => {
      if (res.length > 0) {
        this.setState({ loading: false, hasProfiles: true });
      } else {
        this.setState({ loading: false });
      }
    }).catch((msg) => {
      alert(msg);
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={[Styles.container, Styles.justifyCenter]}>
          <ActivityIndicator />
        </View>
      );
    } else {
      if (this.state.hasProfiles) {
        return <StackNav />;
      } else {
        return <Login />;
      }
    }
  }
}
