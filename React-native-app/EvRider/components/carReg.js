import React, { Component } from 'react';
import {View,Text} from 'react-native';
import {Button } from 'native-base';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';


const cars = [
  {
    name: "Car1",
    
    model: [{
        name: "Google",
        range: 10,
        efficiency:'23'
      },{
        name: "Strawberry",
        rane:180,
        efficiency:"23"
      },{
        name: "Pineapple",
        range:170,
        efficiency:"23"
      },{
        name: "Banana",
        range:155,
        efficiency:"29"
      },
    ]
  },
  {
    name: "ok",   
    model: [{
        name: "Apple",
        range: 10,
        efficiency:'23'
      },{
        name: "Strawberry",
        rane:180,
        efficiency:"23"
      },{
        name: "Pineapple",
        range:170,
        efficiency:"23"
      },{
        name: "Banana",
        range:155,
        efficiency:"29"
      },
    ]
  },
]


export default class CarReg extends Component {
  constructor(){
    super()
    this.state = {
      selectedItems: [],
      
    }
  }

  submit(){

  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  }

  render() {
    return (
      <View>
        <Text>email is {this.props.email}</Text>
        <SectionedMultiSelect
          items={cars}
          uniqueKey='name'
          subKey='model'
          selectText='Choose some things...'
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
  
  <Button onPress={this.submit()} title="Submit"/>
      </View>
    );
  }
}