import React, { Component } from 'react';
import {
  View
} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const items = [
  {
    name: "Car1",
    id: 0,
    icon:{ uri: "https://cdn4.iconfinder.com/data/icons/free-crystal-icons/512/Gemstone.png" } ,
        children: [{
        name: "Apple",
        id: 10,
      },{
        name: "Strawberry",
        id: 17,
      },{
        name: "Pineapple",
        id: 13,
      },{
        name: "Banana",
        id: 14,
      },{
        name: "Watermelon",
        id: 15,
      },{
        name: "Kiwi fruit",
        id: 16,
      }]
  },
  {
    name: "Car2",
    id: 1,
    icon: { uri: "https://cdn4.iconfinder.com/data/icons/free-crystal-icons/512/Gemstone.png" } ,// web uri
    children: [{
        name: "Quartz",
        id: 20,
      },{
        name: "Zircon",
        id: 21,
      },{
        name: "Sapphire",
        id: 22,
      },{
        name: "Topaz",
        id: 23,
      }]
  },
  {
    name: "Car3",
    id: 2,
    iconName: 'md-settings', // material icons icon name
    children: [{
        name: "Mother In Law\'s Tongue",
        id: 30,
      },{
        name: "Yucca",
        id: 31,
      },{
        name: "Monsteria",
        id: 32,
      },{
        name: "Palm",
        id: 33,
      }]
  },
]

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      selectedItems: [],
    }
  }
  componentDidMount(){
    axios.get('http://192.168.2.14:2454/api/cars').then(c=>{
console.warn("gere ",c.data[0].manufacturer);

    })
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  }

  render() {
    return (
      <View>
        
        <SectionedMultiSelect
          items={items}
          uniqueKey='id'
          subKey='children'
          iconKey='icon'
          selectText='Select car and your car model...'
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />

      </View>
    );
  }
}