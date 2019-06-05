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
import NavigateRouteInput from './components/NavigateRouteInput';
import NavRouteMaps from './components/NavRouteMaps';
import RouteNearMe from './components/RouteNearMe';
import filterScreen from './components/Filter';
import feedbackScreen from './components/Feedback'
import ChatScreen from './components/Chat'
import Start from './Start';
import Profile from './profile.js'
import Sort from './components/Sort'

//-----------------------Drawer navigation Bar ---------------------------------------

const Mdn = createDrawerNavigator({
  nearmeMap: {screen:NearMeMap},  
  nearmelist: {screen:NearMeList},
  nearmerout:{screen:RouteNearMe},
  filter : { screen : filterScreen },
  feedback : { screen : feedbackScreen },
  chat : { screen : ChatScreen},
  sort : {screen : Sort},
  prof : { screen : Profile }
},
{
  contentComponent: SideBar,
},
)

//-----------------------Main App navigation ---------------------------------------


const AppNavigator = createStackNavigator({
  login: { screen: Login }, 
  rout:{screen:OfflineSms},
  signup: { screen: SignUpPage },
  profile: Mdn,
  navigateRoute:{screen:NavigateRouteInput},
  navigateMaps:{screen:NavRouteMaps},
  filter : { screen : filterScreen },
  },
  {
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft:(
        <FontAwesome5 name={"bars"} brand style={{paddingLeft:15 , fontSize: 30, color:'white'}} onPress={() => navigation.toggleDrawer()}/>
      ),
      title:("EVAN "),
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize:30,
        paddingLeft:100,
        color: "white",
        
        alignSelf: 'center',
      },
      headerStyle: {
        borderBottomColor:"white",
        borderBottomWidth:1,
        backgroundColor: "#6200EE"
      }
    };
  }
});

export default createAppContainer(AppNavigator);
