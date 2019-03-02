import React, {Component} from "react";
import {StyleSheet, ImageBackground, Image, View, Dimensions} from 'react-native';
import {
    Container, Content, Button, Item, Label, Input, Form,
    Text, Icon
} from "native-base";

import logo from '../../assets/images/logo.png';

const {width: WIDTH} = Dimensions.get('window');
export default class SignIn extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logo}/>
                        <Text style={styles.logoText}>EV Router</Text>
                    </View>
                    <View style={{paddingLeft: 20, paddingRight: 20}}>
                        <Form block style={styles.item}>
                            <Item block floatingLabel>
                                <Label block style={{ marginBottom: 20}}>Email</Label>
                                <Icon  name='ios-mail'/>
                                <Input block />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input secureTextEntry/>
                            </Item>
                        </Form>
                        <Button rounded info block style={{marginTop: 50}}>
                            <Text>Sign In</Text>
                        </Button>
                        <Button rounded info block style={{marginTop: 30, alignSelf: 'center'}}>
                            <Text>Forgot Password?</Text>
                        </Button>
                            <Button rounded bordered  info block style={{marginTop: 40, alignItems: 'center'}}>
                            <Text>Register</Text>
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