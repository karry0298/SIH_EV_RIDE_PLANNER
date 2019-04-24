import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import SignIn from './SignIn';
import Register from './Register';
export default class Start
 extends Component {
  render() {
    return (
      <Container>
        <Header style={{ height:0}} hasTabs/>
        <Tabs tabBarUnderlineStyle={{ backgroundColor:'#62B1F6'}}> 
          <Tab activeTextStyle={{ color: '#fff', fontWeight: 'bold' }} textStyle={{ color: '#fff', fontSize: 12 }} tabStyle={{ backgroundColor: '#62B1F6',height:60 }} activeTabStyle={{ backgroundColor: '#62B1F6' ,height:60}} 
          heading="Sign in">
            <SignIn />
          </Tab>
          <Tab activeTextStyle={{ color: '#fff', fontWeight: 'bold' }} textStyle={{ color: '#fff', fontSize: 12 }} tabStyle={{ backgroundColor: '#62B1F6',height:60 }} activeTabStyle={{ backgroundColor: '#62B1F6',height:60 }} 
          heading="Register">
            <Register />
          </Tab>
          
         
        </Tabs>
      </Container>
    );
  }
}

const styles=StyleSheet.create({
    
  header:{
      
      
    },
    tab:{
      backgroundColor:'#3F51B5'
    },
    



})