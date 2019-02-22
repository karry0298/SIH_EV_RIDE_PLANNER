import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        abc:1
    };
  }

  switchFun(){
        this.props.navigation.navigate('signup')
    }

  switchMap(){
    this.props.navigation.navigate('cam');
  }


  render() {
    return (
      <View style={{flex: 1,alignItems: 'center',textAlign: 'center'}}>
        <Text> Make loginPage here </Text>
        <Button onPress={()=> this.switchMap()}><Text>Map</Text></Button>
        <Button onPress={()=> this.switchFun()}><Text>Login</Text></Button>
      </View>
    );
  }
}

// Login;