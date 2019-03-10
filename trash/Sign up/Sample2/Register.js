import React, { Component } from "react";
import { StyleSheet,ImageBackground,Image ,View} from 'react-native'
import { Container, Header, Content,Button, List, ListItem, Text, Left, Right, Icon } from 'native-base';


import bgImage from './images/background.png';
import logo from './images/logo.png';

import t from 'tcomb-form-native';
import axios from 'axios';
const ip="192.168.1.104";

const Form=t.form.Form;
var _ = require('lodash');

const sty = _.cloneDeep(t.form.Form.stylesheet);

sty.textbox.normal.borderBottomWidth=1;
sty.textbox.normal.borderWidth = 0;
sty.textbox.error.borderWidth=0;
sty.textbox.error.borderBottomWidth=0;


// stylesheet.formGroup.normal.flexDirection = 'row';
// stylesheet.formGroup.error.flexDirection = 'row';
// stylesheet.textboxView.normal.flex = 1;
// stylesheet.textboxView.error.flex = 1;

const User = t.struct({
  firstName:t.String,
  lastName:t.String,
  email: t.String,
  
  password: t.String,
});
const userInfo={
  stylesheet:sty,
  fields: {
    firstName:{
      label:"First name",
      placeholder:"first name",
      placeholderTextColor:'white',
      selectTextOnFocus:true
        },
    lastName:{
      label:"Last name",
      placeholder:'last name',
      placeholderTextColor:'white',
      selectTextOnFocus:true
    },
    email: {
      error: 'please enter an email',

      placeholder:"eg abc@gmail.com",
      placeholderTextColor:'white',
      selectTextOnFocus:true
    },
    password: {
      secureTextEntry:true,
      error: 'password is necessary',
      selectTextOnFocus:true
    },
   
  },
};
const value={
  firstName:"mark",
  lastName:'fulinsky',
  email:'mfk@gmail.com',
  password:"hsloh"
}
const carDetail=t.struct({
  carName:t.String,
  carModel:t.String

});
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          view:false,
          selected2: undefined,
          data:""
        };
        this.handleSubmit=this.handleSubmit.bind(this);
      }
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
        buttonPress = () => {
    
      }
     handleSubmit(){
      
      const value = this._form.getValue();
      if(value!=null)
      this.setState({view:true,data:value});
       console.log(value)
      
     }

     finalSubmit(){


      axios.post("http://"+ip+":2454/users/register",{data:value})
      .then(s=>{
         console.log("registered ",)
      })
      .catch(e=>{
         console.log("some errp ");
      } )
     }
    render(){
          if(this.state.view){
              return(
               
<ImageBackground source={bgImage} style={styles.backgroundContainer}>
   <View>
                    <List>
                      <ListItem selected>
                        <Left>
                          <Text>Simon Mignolet</Text>
                        </Left>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                      </ListItem>
                      <ListItem>
                       <Left>
                          <Text>Nathaniel Clyne</Text>
                        </Left>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                      </ListItem>
                      <ListItem>
                        <Left>
                          <Text>Dejan Lovren</Text>
                        </Left>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                      </ListItem>
                    </List>
                  </View>
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
              < Form ref={c => this._form = c} type={User} options ={userInfo} value={value}  />{/**/}
          <Button rounded danger onPress={this.handleSubmit} style={{fontSize:25,fontWeight:'bold',width:300,justifyContent:'center'}} ><Text>Sign  up</Text></Button>

          </Content>
      </ImageBackground>
      
        );
  }
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

