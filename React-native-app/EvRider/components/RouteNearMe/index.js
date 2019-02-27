import React, { Component } from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import { Button } from 'native-base';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';


Mapbox.setAccessToken('sk.eyJ1Ijoia2FycnkwMjk4IiwiYSI6ImNqcXVtcXJ3aTBrZHE0Mm55MjE1bm9xM28ifQ.B3V1a-Yd0Q1PS2GDjZ-_bg');

//http://192.168.2.12:5003/route?slon=72.831353&slat=18.968835&elon=77.166284&elat=28.677697&range=300000

export default class RouteNearMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dLat:18.8282,
      dLon:72.8888,
      sLat:17.8888,
      sLon:73.8888,
      route :{
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
                ]
              ]
            }
          }
        ]
      }
    }  
  }


  renderAnnotations (a,b,title){
    //console.warn(imgPik)
      
    console.warn(title)
    return (    
        <Mapbox.PointAnnotation
          key={title}
          id={title}
          coordinate={[a,b]}>
                
              <FontAwesome5 name={"map-marker-alt"} brand style={{paddingLeft:15 , fontSize: 25, color:"red"}} />
    
          <Mapbox.Callout title={title} />
        </Mapbox.PointAnnotation>
      )  
  }

  componentDidMount(){
    const  {navigation}  = this.props;
    const uLong = navigation.getParam("uLongitude")
    const uLat = navigation.getParam("uLatitude")
    const pLat = navigation.getParam("pLatitude")
    const pLong = navigation.getParam("pLongitude")
 
    axios.post("http://192.168.2.12:5003/route?slon="+uLong+"&slat="+uLat+"&elon="+pLong+"&elat="+pLat+"&range=30000")
    .then(s=>{
        
       // console.log(s.data[0])
        let cooors = s.data[0]
        let coooords = []
        
        for (i = 0 ; i < s.data[0].locations.length ; i++ ){
            coooords.push([s.data[0].locations[i].lon , s.data[0].locations[i].lat])
        }

        let abc =[
          [
            72.86661427,
            19.26196225
          ],
          [
            70.86661427,
            23.26196225
          ]
        ]
    
        let rut = {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "properties": {},
              "geometry": {
                "type": "LineString",
                "coordinates": coooords
              }
            }
          ]
        }
    

        this.setState({sLon:uLong,
                        sLat:uLat,
                        dLon:pLong,
                        dLat:pLat,
                        route:rut})


    })
    .catch(e=>{
       console.log("some errp ",e);
    } )

 
    console.log("ababababbabababab", uLong)
  }


  render() {
  
    // const  {navigation}  = this.props;
    // const uLong = navigation.getParam("uLongitude")
    // const uLat = navigation.getParam("uLatitude")
    // const pLongitude = navigation.getParam("pLongitude")
    // const pLatitude = navigation.getParam("pLatitude")
    // const name = navigation.getParam("name") 
    // const distance = navigation.getParam("distance") 
    // const mail = navigation.getParam("mail") 
    // const contact = navigation.getParam("contact") 
    // const rate = navigation.getParam("rate")
    // const img = navigation.getParam("img")
    // const charge =  navigation.getParam("charge")
    // const type =  navigation.getParam("type")

    console.warn("abababababakkkkkkakakaakakak",this.state.route)

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
              ]
            ]
          }
        }
      ]
    }


//    this.state.route.features[0].geometry.coordinates.push([73.86661427,20.26196225])
   // console.warn([uLat,uLong,pLatitude,pLongitude,name,distance,mail,contact,rate,img,charge,type])

    return (
      <View style={styles.container}>

        <Mapbox.MapView styleURL={Mapbox.StyleURL.Street}
            zoomLevel={12}
            centerCoordinate={[72.86661427,19.26196225]}
            style={styles.container}>
            
         
          {this.renderAnnotations(this.state.dLon,this.state.dLat,"Destination")}

          {console.warn("ababbababa",[this.state.sLon,this.state.sLat])}

          {this.renderAnnotations(this.state.sLon,this.state.sLat,"Source")}


            <Mapbox.ShapeSource id='line1' shape={this.state.route} >
            {/* {console.log("ananananan",this.state.route.features[0].geometry.coordinates)}   */}
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
