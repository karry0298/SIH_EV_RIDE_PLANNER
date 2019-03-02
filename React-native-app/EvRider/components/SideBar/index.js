import React from "react";
import { AppRegistry, Image, StatusBar,Text } from "react-native";
import { Button,Container,List,ListItem,Content,Icon,Thumbnail} from "native-base";

//const routes = ["Cam", "Ram"];

const routes = [{title:"rout" , name:"Help Section" , icon:"user"},
                {title:"nearmelist" , name:"eCharging List", icon:"map-marked-alt"},
                {title:"nearmeMap",name:"Navigation Maps", icon:"user"},];

export default class SideBar extends React.Component {
  render() {
    
    return (    
      
      <Container>
        <Content>  
          
          <Text blurRadius={1} style={{color:'black' , left:19 ,right:2 , fontSize:17 , top:19, elevation:3}}>Welcome To Night Raid's Profile</Text>
        
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 35 }}
            renderRow={data => {
              return (
                <ListItem button onPress={() => this.props.navigation.navigate(data.title)}>
                  <Text blurRadius={1} style={{color:'black' , fontSize:25, paddingLeft:20 ,paddingRight:5, elevation:3,fontFamily:"courbd"}}>{data.name}</Text>
                </ListItem>
               
              );
            }}
          />
        </Content>
      </Container>

    );
  }
}