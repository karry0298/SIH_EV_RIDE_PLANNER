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
    name: "Nissan",
    
    model: [{
        name: "Leaf",
        range: 10,
        efficiency:'23'
      },{
        name: "E-nv 200 Combi",
        rane:180,
        efficiency:"23"
      },{
        name: "E-NV 200 Van",
        range:170,
        efficiency:"23"
      },{
        name: "E-PD 350",
        range:155,
        efficiency:"29"
      },
    ]
  },
  {
    name: "Tesla",   
    model: [{
        name: "Model S",
        range: 10,
        efficiency:'23'
      },{
        name: "Model X",
        rane:180,
        efficiency:"23"
      },{
        name: "Model 3",
        range:170,
        efficiency:"23"
      },{
        name: "Roadster ",
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
            email:'',
            password:'',
            selectedItems: [],
        };
        this.submit=this.submit.bind(this);

    }
    submit(){
        //  console.warn("submitted data ",this.state);
        
          }
   

   
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
                            <Input  value={this.state.email} onChangeText={(email)=>{
                                this.setState({email})
                            }} block/>
                        </Item>
                        <Item block floatingLabel>
                            <Label block>Password</Label>
                            <Input value={this.state.password} onChangeText={(password)=>{
                                    this.setState({password})
                            }} block secureTextEntry/>
                        </Item>
                        <Item block floatingLabel>
                            <Label block>Confirm Password</Label>
                            <Input block secureTextEntry/>
                        </Item>
                        <Button rounded dark block style={{margin: 15, marginTop: 50}} onPress={()=>{
                        this.setState({view:true});
                    }}>
                        <Text>Next</Text>
                    </Button>
                    </Form>
                    

                </Content>
            </Container>
        );
    }
    else{
        return (<View style={styles.Container}>
        <SectionedMultiSelect
          items={cars}
          uniqueKey='name'
          subKey='model'
          selectText='Select your cars'
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          onConfirm={()=>{
              this.submit()
              this.props.navigation.navigate('prof',{data:this.data})
          }}
        />
  
      </View>
  
        );
    }
    }
}

const styles = StyleSheet.create({
    Container:{
        flex:1,

    },
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

