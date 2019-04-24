import React, { Component } from "react";
import { StyleSheet,ImageBackground ,Image,View,Dimensions} from 'react-native';
import {
  Container,Content,Button,Item,Label,Input,Form,
  Text,Icon
} from "native-base";

import bgImage from './images/background.png';
import logo from './images/logo.png';
const {width:WIDTH}=Dimensions.get('window')
export default class SignIn extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>

      
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo}></Image>
        <Text style={styles.logoText}>EV Router</Text>
      </View>
     
        <Content>
          <Form style={styles.item}>
            <Item floatingLabel>
              <Label style={{paddingLeft:15,marginBottom:30}}>Email</Label>
              <Icon name='ios-mail' />
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
          <Button rounded info block style={{ marginTop: 50}}>
            <Text>Sign In</Text>
          </Button>
          <Button transparent info style={{  marginTop: 30,alignSelf:'center'}}>
          <Text>Forgot Password?</Text>
          </Button>
          <Button rounded bordered info block style={{ marginTop: 40,alignItems:'center'}}>
            <Text>Without Sign In</Text>
          </Button>
          </Content>
          
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex:1,
    width:null,
    height:null,
    justifyContent:'center',
    alignItems:'center',

 },
 logoContainer: {
      alignItems:'center',
      marginTop:50
 },
 logo:{
   height:120,
   width:120,
 },
 logoText:{
    color:'white',
    fontSize:20,
    fontWeight:'500',
    marginTop:10,
    opacity:0.7,
 },
  item: {
    paddingTop:40,
    width:300
  },
 
});

// export default FloatingLabel;