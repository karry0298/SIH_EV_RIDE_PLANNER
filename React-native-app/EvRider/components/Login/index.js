import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Header, Tab, Tabs, Button, TabHeading, Icon} from 'native-base';
import SignIn from './SignIn';
import Register from './Register';

import {NetInfo} from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            abc: 1,
        };
    }


    switchFun() {
        this.props.navigation.navigate('signup')
    }

    switchMap() {

        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                this.props.navigation.navigate('nearmeMap');
            } else {
                this.props.navigation.navigate('rout');
            }
        })
    }

    render() {
        return (
            <Container>
                <Header style={{height: 0}} hasTabs/>
                <Tabs tabBarUnderlineStyle={{backgroundColor: '#5291F6', opacity:0}} >
                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: '#fff', fontSize: 12}}
                         tabStyle={{backgroundColor: '#62B1F6', height: 60}}
                         activeTabStyle={{backgroundColor: '#5291F6', height: 60}}
                         heading="Sign in">
                        <SignIn successCallback={() => this.switchMap()}/>
                    </Tab>
                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: '#fff', fontSize: 12}}
                         tabStyle={{backgroundColor: '#62B1F6', height: 60}}
                         activeTabStyle={{backgroundColor: '#5291F6', height: 60}}
                         heading="Register">
                        <Register navigation={this.props.navigation}/>
                    </Tab>
                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: '#fff', fontSize: 12}}
                         tabStyle={{backgroundColor: '#62B1F6', height: 60}}
                         activeTabStyle={{backgroundColor: '#5291F6', height: 60}}
                         heading="Debug">
                        <View style={{
                            flex: 1, alignItems: 'center', textAlign: 'center',
                            paddingLeft: 20, paddingRight: 20
                        }}><Text>Make loginPage here</Text><Button block style={{marginBottom: 20}}
                                                                   onPress={() => this.switchMap()}><Text
                            style={{color: "white"}}> Map </Text></Button>
                        </View></Tab>
                </Tabs>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {},
    tab: {
        backgroundColor: '#3F51B5'
    }

})