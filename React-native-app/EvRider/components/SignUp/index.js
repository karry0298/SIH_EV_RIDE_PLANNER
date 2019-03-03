import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

class SignUpPage extends Component {
  static navigationOptions = {
    header: null,};

  constructor(props) {
    super(props);
    this.state = {
        abc:4
    };
  }

  switchFun(){
    this.props.navigation.navigate('login')
  }

  render() {
    return (
      <View>
        <Text> Make SignUpPage here </Text>
        {/* <Button onPress={()=> this.switchFun()}><Text>SignUp</Text></Button> */}
      </View>
    );
  }
}

export default SignUpPage;