import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        abc:1
    };
  }

  render() {
    return (
      <View>
        <Text> Make loginPage here </Text>
      </View>
    );
  }
}
