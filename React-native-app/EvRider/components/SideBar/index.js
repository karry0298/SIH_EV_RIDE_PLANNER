import React from "react";
import { AppRegistry, Image, StatusBar,Text } from "react-native";
import { Button,Container,List,ListItem,Content,Icon,Thumbnail, View} from "native-base";


//const routes = ["Cam", "Ram"];

const routes = [{title:"rout" , name:"Help Section" , icon:"user"},
                {title:"nearmelist" , name:"eCharging List", icon:"map-marked-alt"},
                {title:"nearmeMap",name:"Navigation Maps", icon:"user"},
                {title:"filter",name:"Filter", icon:"user"},
                {title:"feedback",name:"Feedback", icon:"user"},
                {title:"chat",name:"Chatroom", icon:"user"}];

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
                <ListItem button onPress={() => this.props.navigation.navigate(data.title)}>
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