import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import {Button} from 'native-base';

Mapbox.setAccessToken('sk.eyJ1Ijoia2FycnkwMjk4IiwiYSI6ImNqcXVtcXJ3aTBrZHE0Mm55MjE1bm9xM28ifQ.B3V1a-Yd0Q1PS2GDjZ-_bg');

class NearMeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        latitude: 19.26196225,
        longitude: 72.86661427,
        routeCoordinates: [],
        distanceTravelled: 0,
        prevLatLng: {},
        coordinate:{latitude: 19.26196225,longitude: 72.86661427},
        route:{
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  72.86661427,
                  19.26196225
                ],
                [
                  73.86661427,
                  20.26196225                
                ]
              ]
            }
          }]
        },
      }
   };

   renderAnnotations () {
    {console.log("entered Annotation")}
    return (
      <Mapbox.PointAnnotation
        key='pointAnnotation'
        id='pointAnnotation'
        coordinate={[this.state.longitude,this.state.latitude]}>
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <Mapbox.Callout title='Look! An annotation!' />
      </Mapbox.PointAnnotation>
    )
  }


  render() {
    return (
      <View style={styles.container}>
      <View style={{flex:0.1,flexDirection:"row"}}>
          <Button light><Text> Navigate </Text></Button>
          <Button light><Text> List </Text></Button>
      </View>

      <Mapbox.MapView styleURL={Mapbox.StyleURL.Street}
          zoomLevel={8}
          centerCoordinate={[72.86661427,19.26196225]}
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

export default NearMeList;