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
        dLang:19.13566162451865
        
    };
  }


  //style={{height:this.state.heighta}}

  render() {
    return (
      <View style={styles.container} >

        <View style={{height:this.state.heighta}} >
        <GooglePlacesAutocomplete
              placeholder='Search'
              minLength={2} // minimum length of text to search
              autoFocus={false}
              returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
              listViewDisplayed='auto'    // true/false/undefined
              fetchDetails={true}
              renderDescription={row => row.description} // custom description render
              onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                //console.log(data, details);


              console.log('1st Input',data.geometry.location.lng)


                

                this.setState({uLang:data.geometry.location.lng,uLat:data.geometry.location.lat})

                this.setState({heighta:45 , heightb:'100%'})
              }}
              
              getDefaultValue={() => ''}
              
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw',
                language: 'en', // language of the results
                types: '(cities)' // default: 'geocode'
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
              
              nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
              GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
              }}
    
        
              filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
              predefinedPlaces={[CurrentPlace]}
        
              debounce={0} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.

            />


        </View>

       
        <View style={{height:this.state.heightb}} >
        <GooglePlacesAutocomplete
              placeholder='Search'
              minLength={2} // minimum length of text to search
              autoFocus={false}
              returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
              listViewDisplayed='auto'    // true/false/undefined
              fetchDetails={true}
              renderDescription={row => row.description} // custom description render
              onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                
                console.log('2st Input',details.geometry.location)

                this.setState({dLang:details.geometry.location.lng,dLat:details.geometry.location.lat})
                
                console.log("2nd stateasdff ",[details.geometry.location.lng,details.geometry.location.lat])

                console.log("state varibale",[this.state.dLang,this.state.dLat])

               //this.props.navigation.navigate('nearmelist',{abc:this.state.myStateFinale})}}
               this.props.navigation.navigate('navigateMaps',{abc:{uLat:this.state.uLat,
                                                  uLang:this.state.uLang,
                                                  dLat:this.state.dLat,
                                                  dLang:this.state.dLang}})
              }}
              
              getDefaultValue={() => ''}
              
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw',
                language: 'en', // language of the results
                types: '(cities)' // default: 'geocode'
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
              
              nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
              GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
              }}
    
        
              filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
              predefinedPlaces={[CurrentPlace]}
        
              debounce={0} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.

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