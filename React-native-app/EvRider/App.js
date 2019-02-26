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
import OfflineSms from './components/OfflineSms';
import SideBar from './components/SideBar';
import MyFavourite from './components/MyFavourite';
import NavigateRoute from './components/NavigateRoute';
import RouteNearMe from './components/RouteNearMe';
 

const Mdn = createDrawerNavigator({
  nearmeMap: {screen:NearMeMap},  
  nearmelist: {screen:NearMeList},
  nearmerout:{screen:RouteNearMe}
  // navigateRoute:{screen:NavigateRoute}
},
{
  contentComponent: SideBar,
  contentOptions:{activeTintColor:"red",}, 
},
{
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerRight:(
        <FontAwesome5 name={"bars"} brand style={{paddingLeft:15 , fontSize: 30, color:'black'}}/>
      )
    };
  }
}
)


const TabNavigator = createBottomTabNavigator({
  login: { screen: Login },
  signup: { screen: SignUpPage },
});

const switchNav = createSwitchNavigator({

  rout:{screen:OfflineSms},
},
{ headerMode: 'screen' });

const AppNavigator = createStackNavigator({
  login: { screen: Login }, 
  signup: { screen: SignUpPage },
  main:switchNav,
  profile: Mdn,
  navigateRoute:{screen:NavigateRoute}

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