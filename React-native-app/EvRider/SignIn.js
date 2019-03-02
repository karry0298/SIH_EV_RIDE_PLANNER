/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {

  StyleSheet,
  TouchableHighlight,
  View,
  ImageBackground ,Image,Dimensions
} from 'react-native';

import {
  Container,Content,Button,Item,Label,Input,Form,
  Text,Icon
} from "native-base";


import bgImage from './images/background.png';
import logo from './images/logo.png';
const {width:WIDTH}=Dimensions.get('window')
import * as Keychain from 'react-native-keychain';


export default class SignIn extends Component {
state={
  email: '',
  password: '',
  status: '',
}

async save() {
  try {
    await Keychain.setGenericPassword(
      this.state.email,
      this.state.password,
    );
    console.log("data saved",this.state );
    this.setState({ email: '', password: '', status: 'Credentials saved!' });
 
  } catch (err) {
    this.setState({ status: 'Could not save credentials, ' + err });
  }
}

async load() {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (this.state.email==credentials.username&&this.state.password==credentials.password) {
    
      this.setState({ ...credentials, status: 'Valid credentials... User authenticated' });
    } else {
      this.setState({ status: 'No such user' });
    }
  } catch (err) {
    this.setState({ status: 'Could not load credentials. ' + err });
  }
}

render() {
  return (
    

   
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>

      
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo}></Image>
        <Text style={styles.logoText}>EV Router</Text>
      </View>
      {!!this.state.status && (
            <Text style={styles.status}>{this.state.status}</Text>
          )}


        <Content>
          <Form style={styles.item}>
            <Item floatingLabel>
              <Label style={{paddingLeft:15,marginBottom:30}}>Email</Label>
              <Icon name='ios-mail' />
              <Input  value={this.state.email}
              onChange={event =>
                this.setState({ email: event.nativeEvent.text })} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry value={this.state.password}
              onChange={event =>
                this.setState({ password: event.nativeEvent.text })} />
            </Item>

            <Button rounded info block   onPress={() => this.load()}
  style={{ marginTop: 50}}>
            <Text>Login</Text>
          </Button>
          </Form>
         
          <Button transparent info style={{  marginTop: 30,alignSelf:'center'}}>
          <Text>Forgot Password?</Text>
          </Button>
          <Button rounded bordered info block style={{ marginTop: 40,alignItems:'center'}}>
            <Text>Without Sign In</Text>
          </Button>
          <TouchableHighlight
    onPress={() => this.load()}
    style={styles.button}
  >
    <View style={styles.load}>
      <Text style={styles.buttonText}>Login</Text>
    </View>
  </TouchableHighlight>

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
container: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#F5FCFF',
},
content: {
  marginHorizontal: 20,
},
title: {
  fontSize: 28,
  fontWeight: '200',
  textAlign: 'center',
  marginBottom: 20,
},
field: {
  marginVertical: 5,
},
label: {
  fontWeight: '500',
  fontSize: 15,
  marginBottom: 5,
},
input: {
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: '#ccc',
  backgroundColor: 'white',
  height: 32,
  fontSize: 14,
  padding: 8,
},
status: {
  color: '#333',
  fontSize: 12,
  marginTop: 15,
},
biometryType: {
  color: '#333',
  fontSize: 12,
  marginTop: 15,
},
buttons: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 20,
},
button: {
  borderRadius: 3,
  overflow: 'hidden',
},
save: {
  backgroundColor: '#0c0',
},
load: {
  backgroundColor: '#333',
},
reset: {
  backgroundColor: '#c00',
},
buttonText: {
  color: 'white',
  fontSize: 14,
  paddingHorizontal: 16,
  paddingVertical: 8,
},
});