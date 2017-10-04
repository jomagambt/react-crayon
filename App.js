import React from 'react';
import { Platform, StyleSheet, Button, ToolbarAndroid, Alert, Text, View } from 'react-native';
var Consts = require('./Consts.js');

function monikashow() {
  Alert.alert("LULZ");
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
		{ Platform.OS === 'android' && Platform.Version >= 20 ?
          <View style={styles.bgBar}></View> : null }
        <ToolbarAndroid style={{height: 58, elevation: 4, backgroundColor: Consts.toolbarBg}}
          navIcon={require('./menu_black.svg.png')} titleColor='black' title="Cheeze!" subtitle="Cheezez are good!" />
        <View style={styles.base}>
			<Text>MOONIKA!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgBar: {
	backgroundColor: Consts.statusBarColor,
    height: 24,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  base: {
	backgroundColor: '#EEE',
	padding: 8,
  },
});
