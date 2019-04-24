import React, {Component} from 'react';
import {Platform, StyleSheet, View,Slider, Text } from 'react-native';
import { Container, Content, Footer,Button } from 'native-base';
import axios from 'axios'
import { IP } from '../../utils/constants'
// import nb from 'native-base';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


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






   }
   
  render() {
    return (

      <Container>

        <Content>

        <View style={styles.container}>
     <Text style={{fontSize:40, color:'black',textAlign:'center',padding:30,textDecorationLine:'underline',}}>Feedback Form</Text>
     
      <View style={{padding:30 }}>
      <Text style={{fontSize:25, color:'black',textAlign:'center',padding:5}}>Women Safety</Text>
    {/* <Slider style={{ width: 300}} step={1}
         minimumValue={0}
         maximumValue={5}

         value={this.state.rating1}
         onValueChange={val => this.setState({ rating1: val })}
         /> */}
<View style={{alignItems:'center'}}>
  <Stars
    default={2.5}
    count={5}
    half={true}
    starSize={50}
    fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
    emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
    halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
  />
</View>
{/* 
         <Text style={styles.welcome}>
          {this.state.rating1}
        </Text>      */}
        </View>  

        <View style={{padding:30 }}>
         <Text style={{fontSize:25, color:'black',textAlign:'center',padding:5}}>User Friendly</Text> 
        {/* <Slider style={{ width: 300}} step={1}
         minimumValue={0}
         maximumValue={5}
        // minimumTrackTintColor = '#136EBE'
       
         value={this.state.rating2}
         onValueChange={val => this.setState({ rating2: val })}
          />  */}
            
<View style={{alignItems:'center'}}>
  <Stars
    default={2.5}
    count={5}
    half={true}
    starSize={50}
    fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
    emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
    halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
  />
</View>
         {/* <Text style={styles.welcome}>
          {this.state.rating2}
        </Text>          */}
        </View>

        <View style={{padding:30 }}>
        <Text style={{fontSize:25, color:'black',textAlign:'center',padding:5}}>Charging Experience</Text>
        {/* <Slider style={{ width: 300}} step={1}
         mimumValue={0}
         maximumValue={5}
        // minimumTrackTintColor = '#136EBE'
    
         value={this.state.rating3}
         onValueChange={val => this.setState({ rating3: val })}
         /> */}

  
<View style={{alignItems:'center'}}>
  <Stars
    default={2.5}
    count={5}
    half={true}
    starSize={50}
    fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
    emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
    halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
  />
</View>
         {/* <Text style={styles.welcome}>
          {this.state.rating3}
        </Text>          */}
      </View>
     </View> 

        </Content>

    <Footer style={{backgroundColor:"#6200EE"}}>
        
        <Button block full onPress={ () => this.handleSubmit() } ><Text style={styles.text} > Submit </Text></Button>

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
    fontWeight: 'bold',
    color:"white",
    backgroundColor:"#6200EE"
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    fontSize:40,
  },
  myEmptyStarStyle: {
    color: 'white',
  }
}); 
