import React, {Component} from "react";
import {StyleSheet, ImageBackground, Image, View, Dimensions} from 'react-native';
import {
    Container, Content, Button, Item, Label, Input, Form,
    Text, Icon
} from "native-base";
import Dialog, { DialogTitle,DialogContent,DialogFooter,DialogButton,SlideAnimation} from 'react-native-popup-dialog';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default class SignIn extends Component {
    constructor(props)  {
        super(props);
    }
  
// set state of Dialog battery this.props.setDialogBattery   --this.setState({ DialogBattery: false });
// prop for this.props.batteryValue   --this.state.DialogBattery
// prop for the visibility  this.props.dialogVisible   --this.state.DialogBattery
// prop this.props.borderColor this.state.borderColor
// prop this.props.colorText this.state.colorText
// statusMessage
    render ()   {
        return (
        <Dialog
            onDismiss={() => {this.props.setDialogBattery(false)}}
            width={0.75}
            visible={this.props.dialogVisible}
            rounded
            actionsBordered
            onTouchOutside  ={()=>{this.props.setDialogBattery(false)}}>
            <View style={{height:"65%",flexDirection:"column",justifyContent: "space-between",alignItems: "center", }} >
                <View style ={styles.DialogBContainer}>
                
                    <View style={[styles.CircleShapeView,{borderColor:this.props.borderColor}]}>
                        <Text style={{ paddingLeft:20, textAlign:'center', fontSize:45,fontWeight:'bold',color:'black',}} > {this.props.batteryValue}% </Text>
                    </View>
                </View>
                <View>
                    <Text style={[styles.status,{color:this.props.colorText}]} > Status:{this.props.statusMessage}</Text>
                </View>
                <View >
                    <Text style={{fontSize:22,fontWeight:'bold',color:'#000',marginTop:10}} > Estimated Range</Text>
                </View>

                <View style={{margin:10,marginTop:55}}>
                    <Button style={{paddingRight:22,backgroundColor:"#f1813b"}} rounded onPress={() => {this.props.setDialogBattery(false);}}>
                        <Text style={{fontSize:22}} > Set reminder </Text>
                        <FontAwesome5 name={"bell"} brand style={{paddingLeft:5 , fontSize: 20, color:'black'}} /> 
                    </Button>
                </View>

            </View>
        </Dialog>);
    }
}
var bord = 150


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    annotationContainer: {
      width: bord,
      height: bord,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'rgba(218, 82, 82, 0.25)',
      borderRadius: bord,
    },
    annotationFill: {
      width: 20,
      height: 20,
      borderRadius: 15,
      backgroundColor: '#f20000',
      transform: [{ scale: 0.6 }],
    },
    DialogBContainer:{
      
  backgroundColor:"#e0dcdb",    //grey
  width:"100%",
      justifyContent: 'center',
      alignItems:'center'
    },
    CircleShapeView: {
          marginTop:10,
          marginBottom:10,
      elevation:10,
      justifyContent:'center',
      alignItems:'center',
      width: 150,
      height: 150,
      borderRadius: 150/2,
      borderStyle:'solid',
      borderWidth:10,
      borderColor:'#ea5e33',
      backgroundColor: '#fff'
  },
  status:{fontSize:22,
    fontWeight:'bold',
    alignItems:'center' ,
    marginTop:10}
   
  
  });
  