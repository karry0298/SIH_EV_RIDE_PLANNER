import React, {Component} from "react";
import {StyleSheet, ImageBackground, Image} from 'react-native'
import {
    Container, Header, Title, Content, Button, Item, Label, Input, Body, Left, Right, Icon, Form,
    Text, Tab, Tabs, DeckSwiper, Card, CardItem, View, Picker
} from "native-base";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import logo from '../../assets/images/logo.png';

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



export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: false,
            selected2: undefined,
            email:'',
            password:'',
            selectedItems: [],

        };
    }
    submit(){
         console.warn("submitted data ",this.state.selectedObject);
        
          }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    buttonPress = () => {
        this.setState({view: true});
        console.log(this.state.selectedObject);
    };

    onSelectedItemsChange = (selectedItems) => {
        this.setState({ selectedItems });
      }
    render() {
        if(!this.state.view){

        
        return (
            <Container >
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.logoText}>EV Router</Text>
                </View>
                <Content>
                    <Form block style={styles.item}>
                        <Item block floatingLabel>
                            <Label block>Email</Label>
                            <Input  value={this.state.email} onChange={(email)=>{
                                this.setState({email})
                            }} block/>
                        </Item>
                        <Item block floatingLabel>
                            <Label block>Password</Label>
                            <Input value={this.state.password} onChange={(password)=>{
                                    this.setState({password})
                            }} block secureTextEntry/>
                        </Item>
                        <Item block floatingLabel>
                            <Label block>Confirm Password</Label>
                            <Input block secureTextEntry/>
                        </Item>
                    </Form>
                    <Button rounded dark block style={{margin: 15, marginTop: 50}} onPress={()=>{
                        this.setState({view:true});
                    }}>
                        <Text>Next</Text>
                    </Button>

                </Content>
            </Container>
        );
    }
    else{
        return (<View>
        <Text>email is {this.state.email}</Text>
        <SectionedMultiSelect
          items={cars}
          uniqueKey='name'
          subKey='model'
          selectText='Select your cars'
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
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: 700,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    logo: {
        height: 120,
        width: 100,
        resizeMode: 'contain'
    },
    logoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.7,
    },
    item: {
        paddingLeft:20,
        paddingRight:20
    },
});

