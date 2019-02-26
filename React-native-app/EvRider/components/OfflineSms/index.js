import React, { Component} from 'react';
import {  Text,Platform,StyleSheet } from 'react-native';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import SendSMS from 'react-native-sms'
import SmsAndroid  from 'react-native-get-sms-android';
import AwesomeAlert from 'react-native-awesome-alerts';


class OfflineSms extends Component {
  constructor(props) {
    super(props)

    this.smsFunction=this.smsFunction.bind(this);
    this.state = {
      active: 'false',
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

  smsFunction() {
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
            body: 'LAPYT id=7945&coords='+latitude+','+longitude+"&rad="+radius,
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

      <Text style={styles.headline}>Help</Text>
      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight" 
         onPress={ () => this.setState({ active: !this.state.active })}
        >
        <Icon name="mail" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon type="FontAwesome"  name="truck" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon type="FontAwesome" name="battery-quarter" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
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
    fontSize: 18,
    marginTop: 10,


  
  },

});


export default OfflineSms;
