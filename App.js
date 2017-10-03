import React from 'react';
import { StyleSheet, Button, Alert, Text, View } from 'react-native';

function monikashow() {
    Alert.alert('Monikashow!', 'You pressed MonikaShow!');
}

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.fgtext}>Tezst.</Text>
	<Button title="MonikaShow!!!" onPress={monikashow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    padding: 24,
    margin: 4,
  },
  fgtext: {
    color: '#FFF',
    margin: 4,
  },
});
