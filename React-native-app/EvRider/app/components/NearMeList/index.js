import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import {Button,List} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

Mapbox.setAccessToken('sk.eyJ1Ijoia2FycnkwMjk4IiwiYSI6ImNqcXVtcXJ3aTBrZHE0Mm55MjE1bm9xM28ifQ.B3V1a-Yd0Q1PS2GDjZ-_bg');

class NearMeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        latitude: 19.26196225,
        longitude: 72.86661427,
        addCoordinates: [],
        distanceTravelled: 0,
        colorTags:["EVStation","Home","Mall","Point"],
        colors:["blue","black","brown","red"],
        prevLatLng: {},
        coordinate:{latitude: 19.26196225,longitude: 72.86661427},
        route:{
          "features": [
            {
              "type": "Feature",
              "properties": {
                "loc": "MahGoa"
              },
              "geometry": {
                "coordinates": [
                  [
                    [
                      72.242444,
                      20.932074
                    ],
                    [
                      74.471853,
                      22.336408
                    ],
                    [
                      80.826947,
                      21.647858
                    ],
                    [
                      80.647569,
                      18.594556
                    ],
                    [
                      73.65184,
                      14.346713
                    ],
                    [
                      72.242444,
                      20.932074
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "id": "3905c87bd8765ca46884663f76de8e9a"
            },
            {
              "type": "Feature",
              "properties": {                
                "name": "Toko Toko",
                "temp": 5222,
                "type": "EVStation"},
              "geometry": {
                "coordinates": [
                  72.857882,	
                  19.405384
                ],
                "type": "Point"
              },
              "id": "474d6dd85bdc37b087f7e0a13bd3c984"
            },
            {
              "type": "Feature",
              "properties": {
                "name": "Dabby EV",
                "temp": 5141,
                "type": "EVStation"
              },
              "geometry": {
                "coordinates": [
                  72.910258,
                  19.120522
                ],
                "type": "Point"
              },
              "id": "4f661e571b61712e838490bc5409f273"
            },
            {
              "type": "Feature",
              "properties": {
                "name": "Suy Chuy",
                "temp": 521,
                "type": "EVStation"
              },
              "geometry": {
                "coordinates": [
                  72.84798,
                  19.229251
                ],
                "type": "Point"
              },
              "id": "51b11728fc576272383b9a5c20be98ba"
            },
            {
              "type": "Feature",
              "properties": {
                "name": "Joogy",
                "type": "Home"
              },
              "geometry": {
                "coordinates": [
                  72.863947,
                  19.139643
                ],
                "type": "Point"
              },
              "id": "89c7fe304002fbe8c2a7e32424d03799"
            },
            {
              "type": "Feature",
              "properties": {
                "name": "Gtorlu",
                "type": "Mall"
              },
              "geometry": {
                "coordinates": [
                  72.872334,
                  19.132236
                ],
                "type": "Point"
              },
              "id": "9def482ed57a107e132868787c8ed62f"
            },
            {
              "type": "Feature",
              "properties": {
                "name": "Potkol",
                "type": "Mall"
              },
              "geometry": {
                "coordinates": [
                  72.885097,
                  19.128619
                ],
                "type": "Point"
              },
              "id": "a6a404bad6f69c87b7583d96948625ab"
            },
            {
              "type": "Feature",
              "properties": {
                "name": "Rocket",
                "type": "Point"
              },
              "geometry": {
                "coordinates": [
                  72.861212,
                  19.13103
                ],
                "type": "Point"
              },
              "id": "bceb2f04b22003a8d4dabb16956569b3"
            },
            {
              "type": "Feature",
              "properties": {
                "name": "Ash Chaz",
                "temp": 520,
                "type": "EVStation"
              },
              "geometry": {
                "coordinates": [
                  72.855258,
                  19.11646
                ],
                "type": "Point"
              },
              "id": "f58c175dcaca3c6b578caed3b56c8663"
            },
            {
              "type": "Feature",
              "properties": {
                "name": "Agnel Works",
                "temp": 524,
                "type": "EVStation"
              },
              "geometry": {
                "coordinates": [
                  72.840152,
                  19.055065
                ],
                "type": "Point"
              },
              "id": "f907328aeb68665a11836bfa461f1634"
            }
          ],
          "type": "FeatureCollection"
        }
    };
  }

  addCordinates(){
    for (i = 1; i < this.state.route.features.length; i++) {
      this.state.addCoordinates.push(this.state.route.features[i])
    }
  }

  // renderCord(){
  //   for (i = 0; i < this.state.addCoordinates.length; i++) {
  //   }
  // }
  
   renderAnnotations (a,b,k,colr,tite) {

    //console.warn([a,b,k,colr]);

      return (
        <Mapbox.PointAnnotation
        key={k}
        id={k}
        coordinate={[a,b]}>
              
            <FontAwesome5 name={"map-marker-alt"} brand style={{paddingLeft:15 , fontSize: 25, color:colr}} />
  
        <Mapbox.Callout title={tite} />
      </Mapbox.PointAnnotation>
      )
   
    
  }

  // getCords(){
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })
  // }
 

  render() {
    
    
    this.addCordinates()
    var cords = [];


    for(i=1 ; i<10 ; i++)
    {

      let long = this.state.route.features[i].geometry.coordinates[0]
      let lat = this.state.route.features[i].geometry.coordinates[1]
      let col = this.state.colorTags.indexOf(this.state.route.features[i].properties.type)
      let colr = this.state.colors[col]
      let title = this.state.route.features[i].properties.name

       cords.push( this.renderAnnotations(long,lat,i.toString(),colr,title))
    }

    return (


      <View style={styles.container}>
      <View style={{flex:0.1,flexDirection:"row"}}>
          <Button light><Text> Navigate </Text></Button>
          <Button light><Text> List </Text></Button>
      </View>
      
     
   


      <Mapbox.MapView styleURL={Mapbox.StyleURL.Street}
          zoomLevel={12}
          centerCoordinate={[72.872334,19.132236]}
          style={styles.container}>


      {this.renderAnnotations(72.872334,19.132236,'abc',"orange","hahahah")}

        
      {cords}
       
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