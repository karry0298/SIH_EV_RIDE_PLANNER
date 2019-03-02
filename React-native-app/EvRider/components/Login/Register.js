import React, {Component} from "react";
import {StyleSheet, ImageBackground, Image} from 'react-native'
import {
    Container, Header, Title, Content, Button, Item, Label, Input, Body, Left, Right, Icon, Form,
    Text, Tab, Tabs, DeckSwiper, Card, CardItem, View, Picker
} from "native-base";

import logo from '../../assets/images/logo.png';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: false,
            selected2: undefined
        };
    }

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    buttonPress = () => {
        this.setState({view: true});
    };

    render() {
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
                            <Input block/>
                        </Item>
                        <Item block floatingLabel>
                            <Label block>Password</Label>
                            <Input block secureTextEntry/>
                        </Item>
                        <Item block floatingLabel>
                            <Label block>Confirm Password</Label>
                            <Input block secureTextEntry/>
                        </Item>
                    </Form>
                    <Button rounded dark block style={{margin: 15, marginTop: 50}} onPress={this.buttonPress}>
                        <Text>Next</Text>
                    </Button>

                </Content>
            </Container>
        );
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

