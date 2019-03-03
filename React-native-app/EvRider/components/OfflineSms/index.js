import React, { Component} from 'react';
import {  Text,Platform,StyleSheet } from 'react-native';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import SendSMS from 'react-native-sms'
import SmsAndroid  from 'react-native-get-sms-android';
import AwesomeAlert from 'react-native-awesome-alerts';


class OfflineSms extends Component {
  static navigationOptions = {
    header: null,};

  constructor(props) {
    super(props)

    this.smsFunction=this.smsFunction.bind(this);
    this.state = {
      active: false,
      showAlert: false,
      lat:null,
      lon:null,
      errorMessage:"Location not found"
    };

  }



  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
 
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  // componentDidMount() {
  //   this.watchID = navigator.geolocation.watchPosition((position) => {
  //     // Create the object to update this.state.mapRegion through the onRegionChange function

  //       latitude:       position.coords.latitude;
  //       longitude:      position.coords.longitude;
  //       console.log(latitude);
      

  //   }, (error)=>console.log(error));
  // }
  // locationFunction(){

  // }

  smsFunction(e,typeSMS) {
    console.log(typeSMS)
  smsFunction(typeSms,e) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
          // let latitude = JSON.stringify(position.coords.latitude);
          let latitude = 19.13111;
          let longitude = 72.8684;
          // let longitude = JSON.stringify(position.coords.longitude);
          let radius = 100
          // console.log(latitude);
          // this.setState({lat:latitude,lon:longitude});
          // console.log(this.state.lat);
          SendSMS.send({
            body: 'LAPYT type='+typeSMS+'&id=7945&coords='+latitude+','+longitude+"&rad="+radius,
            body: 'LAPYT type='+typeSms+'&id=7945&coords='+latitude+','+longitude+"&rad="+radius,
            recipients: ['+919220592205'],
            successTypes: ['sent', 'queued'],
            allowAndroidSendWithoutReadPermission: true
        }, (completed, cancelled, error) => {
     
            console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
     
        });
      },
      (error) =>{
        console.log(JSON.stringify(error.message));
        this.setState({
          showAlert: true
        });
      },
      {enableHighAccuracy: Platform.OS != 'android', timeout: 2000}
  );


}










  render() {
    const {showAlert} = this.state;
    return (
      <View style={{ flex: 1 }}>

      <Text style={styles.headline}>Help Section</Text>
      <Text style={[styles.mainbody,{marginBottom:10}]}>Welcome to Help Section. We provide services namely Towing, NearBy Charging Stations and Remote Charging Facilities.These Facilities are available to you offline via SMS </Text>
     
      <View style={{flexDirection:'row',}}><View style={[styles.circle ,{ backgroundColor: '#DD5144',marginLeft:10,marginBottom:15 }]} ><Icon type="FontAwesome" style={{marginLeft:9,marginTop:9}} name="truck" /></View><Text style={{marginLeft:9,marginTop:9,fontSize:17}} >Towing service </Text></View> 
      <View style={{flexDirection:'row',}}><View style={[styles.circle ,{ backgroundColor: '#3B5998',marginLeft:10,marginBottom:15 }]} ><Icon type="FontAwesome" style={{marginLeft:9,marginTop:9}} name="battery-quarter" /></View><Text style={{marginLeft:9,marginTop:9,fontSize:17}} >Remote charging facilities</Text></View>
      <View style={{flexDirection:'row',}}><View style={[styles.circle ,{ backgroundColor: '#34A34F',marginLeft:10,marginBottom:5 }]} ><Icon type="FontAwesome" style={{marginLeft:9,marginTop:9}} name="institution" /></View><Text style={{marginLeft:9,marginTop:9,fontSize:17}} >Nearby charging stations </Text></View>
      {/* <View style={[styles.circle ,{ backgroundColor: '#3B5998',marginLeft:10,marginBottom:5 }]} ><Icon type="FontAwesome" style={{marginLeft:9,marginTop:9}} name="battery-quarter" /></View>
      <View style={[styles.circle ,{ backgroundColor: '#34A34F',marginLeft:10,marginBottom:5 }]} ><Icon type="FontAwesome" style={{marginLeft:9,marginTop:9}} name="institution" /></View> */}
      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight" 
         onPress={ () => this.setState({ active: !this.state.active })}
        >
        <Icon name="mail" />
            <Button onPress={(e) => this.smsFunction("tow", e)} style={{ backgroundColor: '#34A34F' }}>
              <Icon  type="FontAwesome"  name="truck" />
            </Button>
            <Button onPress={(e) => this.smsFunction("batteryDead", e)} style={{ backgroundColor: '#3B5998' }}>
              <Icon type="FontAwesome" name="battery-quarter" />
            </Button>
            <Button onPress={(e) => this.smsFunction("nearbyCharging", e)} style={{ backgroundColor: '#DD5144' }}>
              <Icon type="FontAwesome" name="institution" />
            </Button>
      </Fab>
      <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="No Location"
          message="Turn On Location Services"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          // showConfirmButton={true}
          cancelText="Cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
    </View>
    );
  }

  
}


const styles = StyleSheet.create({
  headline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 21,
    marginTop: 10,  
  },
  mainbody: {
    textAlign: 'left', // <-- the magic
    fontWeight: '100',
    marginLeft:19,
    fontSize: 18,
    marginTop: 10,  
  },
  circle: {
    width: 50,
    height:50,
    borderRadius: 50/2
}

});


export default OfflineSms;
