/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {AppState,Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      lat:124,
      lng:123
    }
    this.abc = this.abc.bind(this)
  }


  abc(){
    console.log("location changed")
  }

  componentDidMount()
  {  

     console.log("Did Mount ",AppState.currentState)
    this.watchID = navigator.geolocation.watchPosition(
      position => {

        const { latitude, longitude } = position.coords;  
        this.state.lat = latitude
        this.state.lng = longitude

       console.log([latitude,longitude])    

        this.abc()
    },
    (error) => alert(error.message),
    { enableHighAccuracy: true, maximumAge: 500 })

      
    console.log("entered Mount")
  }

  render() {
    return (
      <View style={styles.container}>
        {this.abc()}
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
