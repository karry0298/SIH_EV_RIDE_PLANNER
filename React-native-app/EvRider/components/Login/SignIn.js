import React, {Component} from "react";
import {StyleSheet, ImageBackground, Image, View, Dimensions} from 'react-native';
import {
    Container, Content, Button, Item, Label, Input, Form,
    Text, Icon
} from "native-base";

import logo from '../../assets/images/logo.png';

const {width: WIDTH} = Dimensions.get('window');
export default class SignIn extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            errorMessage: false
        }
    }
    authenticate(email, password)    {
        usersArray = {
            "edwin@gmail.com":"abc",
            "a@a":"ddde",
            "A@a":"ddde",
        };
        if(email in usersArray) {
            if( password === usersArray[email] )   {
                return true;
            }
        }
        return false;
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logo}/>
                        <Text style={styles.logoText}>EV Router</Text>
                    </View>
                    <View style={{paddingLeft: 20, paddingRight: 20}}>
                        {this.state.errorMessage &&
                        <View style={{border:"red", backgroundColor:"lightpink"}}>
                            <Text>{this.state.errorMessage}</Text>
                        </View> }
                        <Form block style={styles.item}>
                            <Item block floatingLabel>
                                <Label block style={{marginBottom: 20}}>Email</Label>
                                <Icon name='ios-mail'/>
                                <Input block
                                       onChangeText={(text) => this.setState({"formEmail":text})}
                                       value={this.state["formEmail"]} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input secureTextEntry
                                       onChangeText={(text) => this.setState({"formPassword":text})}
                                       value={this.state["formPassword"]}/>
                            </Item>
                        </Form>
                        <Button rounded info block style={{marginTop: 50}}
                                onPress={(e)=>{if (this.authenticate(this.state['formEmail'], this.state['formPassword'])) {
                                    this.props.successCallback();
                                }
                                else this.setState({errorMessage :"Wrong Username/Password"})}}>
                            <Text>Sign In</Text>
                        </Button>
                        <Button rounded info block style={{marginTop: 30, alignSelf: 'center'}}>
                            <Text>Forgot Password?</Text>
                        </Button>

                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
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
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.7,
    },
    item: {
        paddingTop: 30,
    },

});

// export default FloatingLabel;