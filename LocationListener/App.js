/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {AppState,Platform, StyleSheet, Text, View,AppRegistry} from 'react-native';

console.warn("bakayaro")

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

console.warn("bakayaro")


const LogLocation = async (data) => {
  console.warn("bakayo")
  navigator.geolocation.getCurrentPosition((position) => {
   console.warn(position.coords);
   console.log(position.coords);
  });
}

console.warn("entering LOG")

AppRegistry.registerHeadlessTask('LogLocation', () => LogLocation);

console.warn("bakayaro")

export default class App extends Component{
  

  componentDidMount() {


    setInterval(()=>{
      console.log("Did Mount ",AppState.currentState)
    }, 1000)
  }

  componentWillUnmount() {
    console.log("Didnt Mount ",AppState.currentState)
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
