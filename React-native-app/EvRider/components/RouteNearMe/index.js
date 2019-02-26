import React, { Component } from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import { Button } from 'native-base';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


Mapbox.setAccessToken('sk.eyJ1Ijoia2FycnkwMjk4IiwiYSI6ImNqcXVtcXJ3aTBrZHE0Mm55MjE1bm9xM28ifQ.B3V1a-Yd0Q1PS2GDjZ-_bg');


export default class RouteNearMe extends Component {
  constructor(props) {
    super(props);
  }



  renderAnnotations (a,b,title){
    //console.warn(imgPik)
      return (
        <Mapbox.PointAnnotation
          key={"azwlqrrycaawdkq"}
          id={"azwlqrrycaawdkq"}
          coordinate={[a,b]}>
                
              <FontAwesome5 name={"map-marker-alt"} brand style={{paddingLeft:15 , fontSize: 25, color:"red"}} />
    
          <Mapbox.Callout title={title} />
        </Mapbox.PointAnnotation>
      )  
  }
  
  

  render() {
  
    const  {navigation}  = this.props;
    const uLong = navigation.getParam("uLongitude")
    const uLat = navigation.getParam("uLatitude")
    const pLongitude = navigation.getParam("pLongitude")
    const pLatitude = navigation.getParam("pLatitude")
    const name = navigation.getParam("name") 
    const distance = navigation.getParam("distance") 
    const mail = navigation.getParam("mail") 
    const contact = navigation.getParam("contact") 
    const rate = navigation.getParam("rate")
    const img = navigation.getParam("img")
    const charge =  navigation.getParam("charge")
    const type =  navigation.getParam("type")

    const route = {
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
        }
      ]
    }

    route.features[0].geometry.coordinates.push([pLongitude,pLatitude])
   // console.warn([uLat,uLong,pLatitude,pLongitude,name,distance,mail,contact,rate,img,charge,type])

    return (
      <View style={styles.container}>

        <Mapbox.MapView styleURL={Mapbox.StyleURL.Street}
            showUserLocation={true}
            zoomLevel={12}
            centerCoordinate={[uLong,uLat]}
            style={styles.container}>
            
          {this.renderAnnotations(pLongitude,pLatitude,name)}

            <Mapbox.ShapeSource id='line1' shape={route} >
            {/* {console.log("ananananan",this.state.route.features[0].geometry.coordinates)}            */}
              <Mapbox.LineLayer id='linelayer1' style={{lineColor:'red'}}>
    
              </Mapbox.LineLayer> 
              
            </Mapbox.ShapeSource>

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
