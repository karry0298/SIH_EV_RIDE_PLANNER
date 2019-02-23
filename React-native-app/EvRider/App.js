/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button, Item, Input, Icon } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator, createAppContainer,  createDrawerNavigator, createSwitchNavigator ,createBottomTabNavigator } from "react-navigation";
import Login from './components/Login';
import SignUpPage from './components/SignUp';
import NearMeList from './components/NearMeList';
import NearMeMap from './components/NearMeMap';
import RoutePlanning from './components/RoutePlanning';
import SideBar from './components/SideBar';




const Mdn = createDrawerNavigator({
  cam: {screen:NearMeList},
  ram: {screen:NearMeMap},
  rout:{screen:RoutePlanning}
},
{
  contentComponent: SideBar,
  contentOptions:{
    activeTintColor:"red",
  }
})


const TabNavigator = createBottomTabNavigator({
  login: { screen: Login },
  signup: { screen: SignUpPage },
});

const switchNav = createSwitchNavigator({
  login: { screen: Login },
  signup: { screen: SignUpPage },
});

const AppNavigator = createStackNavigator({

  main:switchNav,
  profile: Mdn,
},
{
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft:(
        <FontAwesome5 name={"bars"} brand style={{paddingLeft:15 , fontSize: 30, color:'black'}} onPress={() => navigation.toggleDrawer()}/>
      )
    };
  }
});

export default createAppContainer(AppNavigator);