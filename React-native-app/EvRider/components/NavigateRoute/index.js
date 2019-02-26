import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import {Button,List} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

Mapbox.setAccessToken('sk.eyJ1Ijoia2FycnkwMjk4IiwiYSI6ImNqcXVtcXJ3aTBrZHE0Mm55MjE1bm9xM28ifQ.B3V1a-Yd0Q1PS2GDjZ-_bg');

export default class NavigateRoute extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
        abc:1
    };
  }

  renderAnnotations () {

      return (
        <Mapbox.PointAnnotation
        key={"sdgdf"}
        id={"dfhdghgh"}
        coordinate={[72.872334,19.132236]}>
              
            <FontAwesome5 name={"map-marker-alt"} brand style={{paddingLeft:15 , fontSize: 25, color:"red"}} />
  
        <Mapbox.Callout title={"ajsjnnkdnf"} />
      </Mapbox.PointAnnotation>
      )
   
    
  }

  render() {
    return (

      <View>

        <GooglePlacesAutocomplete
          placeholder='Enter The Source'
          minLength={1} // minimum length of text to search
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            console.log("data",data);
            console.log("details",details);
          }}
          
          getDefaultValue={() => {
            return ''; // text input default value
          }}
          
          query={{
            key: 'AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw',
            language: 'en', // language of the results
            types: '(cities)', // default: 'geocode'
          }}

          styles={{description: {fontWeight: 'bold',},
          
          predefinedPlacesDescription: {color: '#1faadb',},
          }}                  
        />


      <Mapbox.MapView styleURL={Mapbox.StyleURL.Street}
        zoomLevel={12}
        centerCoordinate={[72.872334,19.132236]}
        style={styles.container}>

        {this.renderAnnotations()}

      </Mapbox.MapView> 


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
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 153, 153, 0.4)',
    borderRadius: 20,
  },
  annotationFill: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#f20000',
    transform: [{ scale: 0.6 }],
  }
});

// Login;