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
import geolib from 'geolib';
import axios from 'axios';
// import NotificationPopup from 'react-native-push-notification-popup';

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
      prevLoc : {
        lat : '',
        lon : '',
        time : ''
      },
      started : false,
      distanceTravelled : 0
    }
    this.tracker = this.tracker.bind(this);
    this.callServer = this.callServer.bind(this);
  }

  callServer(lat,lon,range,options){

    axios.post(' http://192.168.43.141:2454/range/checkWarning', {
      lat : lat,
      lon : lon,
      range : range,
      options : options
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log("Called")
  }

  tracker(nlat, nlon, time = Date.now()){
    console.log("location changed")
    console.log("prev lat lon: ", this.state.prevLoc.lat, this.state.prevLoc.lon,this.state.prevLoc.time)
    console.log("new lat lon: ", nlat, nlon,time)
    var speed = geolib.getSpeed(
      { lat :  this.state.prevLoc.lat , lng :  this.state.prevLoc.lon, time : this.state.prevLoc.time},
      {lat : nlat, lng : nlon , time: time},
      { unit : 'mph'})
      geolib.getDistance(
        {latitude: 51.5103, longitude: 7.49347},
        {latitude: "51° 31' N", longitude: "7° 28' E"}
    );

    var dist = geolib.getDistance(
      { lat :  this.state.prevLoc.lat , lng :  this.state.prevLoc.lon},
      {lat : nlat, lng : nlon}
  );

  this.setState({ distanceTravelled : dist });

  if ( dist > 200 ){
    var range = 1000, options = ['css_sae', 'chademo'];
    this.callServer( nlat, nlon, range, options );
  }
  

  console.log("Speed and Distance", speed , dist);


  }

  componentDidMount()
  {  

     console.log("Did Mount ",AppState.currentState)
    this.watchID = navigator.geolocation.watchPosition(
      position => {

        const { latitude, longitude } = position.coords;  
        this.state.lat = latitude
        this.state.lng = longitude

      //  console.log([latitude,longitude])    
        var status = this.state.started;
        if ( !status ){
          this.setState({ started : true,
          prevLoc : {
            lat : latitude,
            lon : longitude,
            time : Date.now()
          } });
        }
        if ( latitude != undefined ){
          this.tracker(latitude, longitude)
        }
        
    },
    (error) => alert(error.message),
    { enableHighAccuracy: true, maximumAge: 500 })




      
    console.log("entered Mount")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions} onPress={()=>this.callServer()} > Click </Text>
        {/* <NotificationPopup ref={ref => this.popup = ref} /> */}
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
