import React, { Component } from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import { Button } from 'native-base';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('sk.eyJ1Ijoia2FycnkwMjk4IiwiYSI6ImNqcXVtcXJ3aTBrZHE0Mm55MjE1bm9xM28ifQ.B3V1a-Yd0Q1PS2GDjZ-_bg');

const CurrentPlace = { description: 'Current Location', geometry: { location: { lat: 18.968835, lng: 72.831353 } }};
 

export default class NavigateRoute extends Component {
  static navigationOptions = {
    header: null,};

  constructor(props) {
    super(props);
    this.state = {
        heighta : '100%',
        heightb : '0%',
        uLat:19.13566162451865,
        uLang:19.13566162451865,
        dLat:19.13566162451865,
        dLang:19.13566162451865,
        rout:{}
        
    };
  }

  componentDidMount(){
    const  {navigation}  = this.props;
    let route = navigation.getParam("abc")
    this.setState({rout:route})

  }

  render() {

    return (
      <View style={styles.container} >

        <View style={{height:this.state.heighta}} >
        {/* --------------------------------------------------------Source Input---------------------------------------------------------- */}
        <GooglePlacesAutocomplete
              placeholder='Search'
              minLength={2} 
              autoFocus={false}
              returnKeyType={'search'} 
              listViewDisplayed='auto' 
              fetchDetails={true}
              renderDescription={row => row.description} 
              onPress={(data, details = null) => { 

                this.setState({uLang:data.geometry.location.lng,uLat:data.geometry.location.lat})
                this.setState({heighta:45 , heightb:'100%'})

              }}
              
              getDefaultValue={() => ''}
              
              query={{
                key: 'AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw',
                language: 'en',
                types: '(cities)'
              }}
              
              styles={{ 

                textInputContainer: {
                  width: '100%'
                },
                description: {
                  fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                  color: '#1faadb'
                }
              }}
              
              nearbyPlacesAPI='GooglePlacesSearch'  
        
              filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} 
              predefinedPlaces={[CurrentPlace]}
        
              debounce={0} 

            />


        </View>

       
        <View style={{height:this.state.heightb}} >

        {/* --------------------------------------------------------destination input---------------------------------------------------------- */}
        <GooglePlacesAutocomplete
              placeholder='Search'
              minLength={2}
              autoFocus={false}
              returnKeyType={'search'} 
              listViewDisplayed='auto' 
              fetchDetails={true}
              renderDescription={row => row.description} 
              onPress={(data, details = null) => {

                this.setState({dLang:details.geometry.location.lng,dLat:details.geometry.location.lat})
                
                this.props.navigation.navigate('navigateMaps',{abc:{uLat:this.state.uLat,
                                                  uLang:this.state.uLang,
                                                  dLat:this.state.dLat,
                                                  dLang:this.state.dLang,
                                                  route:this.state.rout}})
              }}
              
              getDefaultValue={() => ''}
              
              query={{
                key: 'AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw',
                language: 'en', 
                types: '(cities)' 
              }}
              
              styles={{ 

                textInputContainer: {
                  width: '100%'
                },
                description: {
                  fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                  color: '#1faadb'
                }
              }}
              
              nearbyPlacesAPI='GooglePlacesSearch' 
        
              filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} 
              predefinedPlaces={[CurrentPlace]}
        
              debounce={0} 

            />

        </View>
    </View>
    );
  }
}


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
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  }
});
// Login;