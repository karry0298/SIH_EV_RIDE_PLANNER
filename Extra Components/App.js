/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View,Text,Slider} from 'react-native';




export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = { rating1: 0,
                   rating2:0,
                  rating3:0 }
   } 
   getVal(val){
   console.warn(val);
   }    
  render() {
    return (
      <View style={styles.container}>
     <Text style={{fontSize:40, color:'black',textAlign:'center',padding:30,textDecorationLine:'underline',}}>Feedback Form</Text>
     
      <View style={{padding:30 }}>
      <Text style={{fontSize:25, color:'black',textAlign:'center',padding:5}}>Women Safety</Text>
    <Slider style={{ width: 300}} step={1}
         minimumValue={0}
         maximumValue={5}
        // minimumTrackTintColor = '#136EBE'

        //  thumbImage = {require('/slider.png')}
        //  thumbStyle = {{width:30 ,height:30}}

         value={this.state.rating1}
         onValueChange={val => this.setState({ rating1: val })}
         onSlidingComplete={ val => this.getVal(val)} />
         <Text style={styles.welcome}>
          {this.state.rating1}
        </Text>     
        </View>  

        <View style={{padding:30 }}>
        <Text style={{fontSize:25, color:'black',textAlign:'center',padding:5}}>User Friendly</Text>
        <Slider style={{ width: 300}} step={1}
         minimumValue={0}
         maximumValue={5}
        // minimumTrackTintColor = '#136EBE'
       
         value={this.state.rating2}
         onValueChange={val => this.setState({ rating2: val })}
         onSlidingComplete={ val => this.getVal(val)} />
         <Text style={styles.welcome}>
          {this.state.rating2}
        </Text>         
        </View>

        <View style={{padding:30 }}>
        <Text style={{fontSize:25, color:'black',textAlign:'center',padding:5}}>Charging Experience</Text>
        <Slider style={{ width: 300}} step={1}
         mimumValue={0}
         maximumValue={5}
        // minimumTrackTintColor = '#136EBE'
    
         value={this.state.rating3}
         onValueChange={val => this.setState({ rating3: val })}
         onSlidingComplete={ val => this.getVal(val)} />
         <Text style={styles.welcome}>
          {this.state.rating3}
        </Text>         
      </View>
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
    textAlign:'center',
    margin: 10,
    
  },
});
