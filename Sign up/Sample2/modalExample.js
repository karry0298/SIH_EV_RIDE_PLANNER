/**
 * Example usage of react-native-modal
 * @format
 */
import React, { Component } from "react";
import { StyleSheet, Image,View} from 'react-native';
import {Button,Text,List,ListItem} from "native-base";
import Modal from "react-native-modal";
import axios from 'axios';
export default class Mod extends Component {
    state={
        modalVisible:false,
        carData:{},
        car:[],
        
      }
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    
    componentDidMount(){
    
      // axios.get("http://192.168.1.104:2454/users/cars")
      // .then(d=>{
      //   // console.log("DATA ",d);
      //   this.setState({carData:d})
      //   i=0;
      //   // console.log("car data    ",this.state.carData);  //data[0] car 1
      //   const car1=this.state.carData.data[0];
      //   car1.models.forEach((c)=>{
      //     this.state.car[i]=c;
      //     i+=1;
      //     console.log("one ", c);
      //   })
      //   console.log("car 1 details ",this.state.car)
      // })
      // .catch(e=>{
      //   console.log("fs ",e );
      // })
    
    }
    renderList(){
      return this.state.car.forEach((c=>{
      return (
        
        <List>
        <ListItem itemDivider>
          
        <Text key={c._id}>
          here {c.manufacturer}
        </Text>
        </ListItem>   
        </List>
        
     
      )
    }))
    }


    render() {
        return (


      <View style={{marginTop: 22}}>
      <Modal
            isVisible={this.state.modalVisible}
            onBackdropPress={() => this.setState({ modalVisible: false })}>
          <View style={styles.modalContent}>
        <Text>Hello!</Text>
        {this.renderList()}
  
        <Button onPress={()=>{
          this.setState({modalVisible:false})
        }} >
  
        <Text>SUbmit</Text></Button>
      </View>
          </Modal>
        <Button
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </Button>
      </View>
  
  

  
  
      );
    }
  }
  
  const styles= StyleSheet.create({
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "red",
      },
})
