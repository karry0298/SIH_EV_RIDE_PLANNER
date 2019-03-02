import React, {Component} from 'react';
import {Platform, StyleSheet, View,Slider, Text } from 'react-native';
import { Container, Content, Footer,Button } from 'native-base';
import axios from 'axios'
import { IP } from '../../utils/constants'
// import nb from 'native-base';



export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = { rating1: 0,
                   rating2:0,
                  rating3:0,
                  stationId : '5c7a7973ed66b6234ee83227'
                 }
                
    this.handleSubmit = this.handleSubmit.bind(this);
   }
   

   async handleSubmit() {
       var value = {
           women : this.state.rating1,
           userFriendly : this.state.rating2,
           chargingExp : this.state.rating3,
           id : this.state.stationId
       }

       console.log(value, "handling")

    //    await axios.post(IP + '/api/uploadRecord', {
    //        ...data
    //    }).then(res => {
    //        console.log(res.data)
    //    }).catch(err => {
    //        console.log("Error", err)
    //    })





   }
   
  render() {
    return (

      <Container>

        <Content>

        <View style={styles.container}>
     <Text style={{fontSize:40, color:'black',textAlign:'center',padding:30,textDecorationLine:'underline',}}>Feedback Form</Text>
     
      <View style={{padding:30 }}>
      <Text style={{fontSize:25, color:'black',textAlign:'center',padding:5}}>Women Safety</Text>
    <Slider style={{ width: 300}} step={1}
         minimumValue={0}
         maximumValue={5}
        // minimumTrackTintColor = '#136EBE'

        //  thumbImage = {require('/slider.png')}
        //  thumbStyle = {{width:30 ,height:30}}

         value={this.state.rating1}
         onValueChange={val => this.setState({ rating1: val })}
         />
         <Text style={styles.welcome}>
          {this.state.rating1}
        </Text>     
        </View>  

        <View style={{padding:30 }}>
        <Text style={{fontSize:25, color:'black',textAlign:'center',padding:5}}>User Friendly</Text>
        <Slider style={{ width: 300}} step={1}
         minimumValue={0}
         maximumValue={5}
        // minimumTrackTintColor = '#136EBE'
       
         value={this.state.rating2}
         onValueChange={val => this.setState({ rating2: val })}
          />
         <Text style={styles.welcome}>
          {this.state.rating2}
        </Text>         
        </View>

        <View style={{padding:30 }}>
        <Text style={{fontSize:25, color:'black',textAlign:'center',padding:5}}>Charging Experience</Text>
        <Slider style={{ width: 300}} step={1}
         mimumValue={0}
         maximumValue={5}
        // minimumTrackTintColor = '#136EBE'
    
         value={this.state.rating3}
         onValueChange={val => this.setState({ rating3: val })}
         />
         <Text style={styles.welcome}>
          {this.state.rating3}
        </Text>         
      </View>
     </View> 

        </Content>

    <Footer>
        
        <Button full onPress={ () => this.handleSubmit() } ><Text style={styles.text} > Submit </Text></Button>

    </Footer>

      </Container> 


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign:'center',
    margin: 10,
    
  },
  text : {
    fontSize : 25,
    fontWeight: 'bold'
  }
});
