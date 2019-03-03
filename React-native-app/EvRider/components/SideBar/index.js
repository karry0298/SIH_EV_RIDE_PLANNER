import React from "react";
import { AppRegistry, Image, StatusBar,Text } from "react-native";
import { Button,Container,List,ListItem,Content,Icon,Thumbnail, View} from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


//const routes = ["Cam", "Ram"];

const routes = [
                {title:"prof",name:"Profile", icon:"user"},
                {title:"rout" , name:"Help Section" , icon:"question-circle"},
                {title:"filter",name:"Filter", icon:"filter"},
                {title:"feedback",name:"Feedback", icon:"comments"},
                {title:"chat",name:"Chatroom", icon:"comment-dots"}];

export default class SideBar extends React.Component {
  render() {
    
    return (    
      

    <Container style={{backgroundColor:"#6200EE"}}>
        <Content>  
    
        <List 
            dataArray={routes}
            // contentContainerStyle={{ marginTop: 35 }}
            renderRow={data => {
              return (
                <ListItem button onPress={() => this.props.navigation.navigate(data.title)} style={{marginLeft:0}}>
                  <FontAwesome5 name={data.icon} brand style={{paddingLeft:15 , fontSize: 28, color:'white'}} />
                  <Text blurRadius={1} style={{color:'white' , fontSize:25, paddingLeft:20 ,paddingRight:5, elevation:3,fontFamily:"courbd"}}>{data.name}</Text>
                </ListItem>
               
              );
            }}
          />
        </Content>
      </Container>


      
    );
  }
}