import React, { Component } from 'react';
import { StyleSheet,NetInfo } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import SignIn from './SignIn';
import Register from './Register';
import Mod from './modalExample';
import Offline from './components/Offline'
export default class TabsAdvancedExample extends Component {

constructor(props){
  super(props);
  this.state={
    connectionStatus:true
  }
}
  
handleConnectivityChange=(connection)=>{
  var connectionStatus=connection;
  console.log("Connecion status",connectionStatus);
  this.setState({connectionStatus})
}
componentDidMount(){
  NetInfo.isConnected.fetch().then((connection)=>{
    var c=connection?'online':'offline';
    console.log(c);
  })
NetInfo.isConnected.addEventListener('connectionChange',this.handleConnectivityChange)

}
componentWillUnmount(){
  NetInfo.removeEventListener('connectionChange',this.handleConnectivityChange);
  console.log("removed");
}

render() {
  if(this.state.connectionStatus){
    return (
      <Container>
        <Header style={{ height:0}} hasTabs/>
        <Tabs tabBarUnderlineStyle={{ backgroundColor:'#62B1F6'}}> 
          <Tab activeTextStyle={{ color: '#fff', fontWeight: 'bold' }} textStyle={{ color: '#fff', fontSize: 12 }} tabStyle={{ backgroundColor: '#62B1F6',height:60 }} activeTabStyle={{ backgroundColor: '#62B1F6' ,height:60}} 
          heading="Sign in">
            <Mod />
          </Tab>
          <Tab activeTextStyle={{ color: '#fff', fontWeight: 'bold' }} textStyle={{ color: '#fff', fontSize: 12 }} tabStyle={{ backgroundColor: '#62B1F6',height:60 }} activeTabStyle={{ backgroundColor: '#62B1F6',height:60 }} 
          heading="Register">
            <Register />
          </Tab>
          
         
        </Tabs>
      </Container>
    );
  }
  else{
    return(
      <Offline/>
    )
  }

  }
}

const styles=StyleSheet.create({
    
  header:{
      
      
    },
    tab:{
      backgroundColor:'#3F51B5'
    },
    



})