import React, { Component } from "react";
import { StyleSheet,ImageBackground,Image } from 'react-native'
import {
  Container,Header,Title,Content,Button,Item,Label,Input,Body,Left,Right,Icon,Form,
  Text,Tab,Tabs,DeckSwiper,Card,CardItem,View,Picker
} from "native-base";

import bgImage from './images/background.png';
import logo from './images/logo.png';


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          view:false,
          selected2: undefined
        };
      }
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
        buttonPress = () => {
        this.setState({view:true});
      }
     
      nextreg = () => {
          if(this.state.view){
              return(
               
                <ImageBackground source={bgImage} style={styles.backgroundContainer}>

        <Content>
          <Form style={{width:300,marginTop:100}}>
          <Item picker>
              <Picker
                mode="dropdown"
                //iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
            <Item floatingLabel>
            <Label>Mileage</Label>
            </Item>
            <Item floatingLabel>
            <Label>Estimated Mileage</Label>
             </Item>
             <Button rounded success block style={{ margin: 15, marginTop: 50}}>
            <Text>Submit</Text>
          </Button>
          </Form>
          
        </Content>
      </ImageBackground>
              );
          }
          else{
              return(
                <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                   <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo}></Image>
        <Text style={styles.logoText}>EV Router</Text>
      </View>
              {/* <Container style={styles.container}> */}
        <Content>
          <Form style={styles.item}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
            <Item floatingLabel>
              <Label>Confirm Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
          <Button rounded dark block style={{ margin: 15, marginTop: 50}} onPress={this.buttonPress}>
            <Text>Next</Text>
          </Button>
          
          </Content>
      {/* </Container> */}
      </ImageBackground>
      
              );
          }
      }

  render() {
    return (
        
        <Content>{this.nextreg()}</Content>
       );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex:1,
    width:null,
    height:700,
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
    // container: {
    //   backgroundColor: "#FFF"
    // },
    item: {
      
      width:300,
      
    },

  });

