import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { NetInfo } from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    header: null,};

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
  
    NetInfo.isConnected.fetch().then(isConnected => {
      if(isConnected)
      {
        this.props.navigation.navigate('nearmeMap');
      }
      else{
        this.props.navigation.navigate('rout');
      }
    })
    //this.props.navigation.navigate('nearmeMap');
  }


  render() {
    return (
      <View style={{flex: 1,alignItems: 'center',textAlign: 'center'}}>
        <Text> Make loginPage here </Text>
        <Button style={{marginTop:20,marginLeft:50}} onPress={()=> this.switchMap()}><Text>                                          Map                                  </Text></Button>
        <Button style={{marginTop:20,marginLeft:50}} onPress={()=> this.switchFun()}><Text >                                           Login                                </Text></Button>
      </View>
    );
  }
}

// Login;