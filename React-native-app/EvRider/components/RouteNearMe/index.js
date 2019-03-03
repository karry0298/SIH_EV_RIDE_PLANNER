import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Row } from 'native-base';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';


Mapbox.setAccessToken('sk.eyJ1Ijoia2FycnkwMjk4IiwiYSI6ImNqcXVtcXJ3aTBrZHE0Mm55MjE1bm9xM28ifQ.B3V1a-Yd0Q1PS2GDjZ-_bg');

//http://192.168.2.12:5003/route?slon=72.831353&slat=18.968835&elon=77.166284&elat=28.677697&range=300000

export default class RouteNearMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dLat: 18.8282,
      dLon: 72.8888,
      sLat: 17.8888,
      sLon: 73.8888,
      routea: {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
              ]
            }
          }
        ]
      },
      routeb: {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
              ]
            }
          }
        ]
      }

    }
  }


  renderAnnotations(a, b, title) {
    //console.warn(imgPik)

    console.warn(title)
    return (
      <Mapbox.PointAnnotation
        key={title}
        id={title}
        coordinate={[a, b]}>

        <FontAwesome5 name={"map-marker-alt"} brand style={{ paddingLeft: 15, fontSize: 25, color: "red" }} />

        <Mapbox.Callout title={title} />
      </Mapbox.PointAnnotation>
    )
  }

  componentDidMount() {
    const { navigation } = this.props;
    const uLong = navigation.getParam("uLongitude")
    const uLat = navigation.getParam("uLatitude")
    const pLat = navigation.getParam("pLatitude")
    const pLong = navigation.getParam("pLongitude")


    //http://192.168.2.12:5003/route?slon="+uLong+"&slat="+uLat+"&elon="+pLong+"&elat="+pLat+"&range=30000

    //http://192.168.2.12:5003/route?slon=72.831353&slat=18.968835&elon=77.166284&elat=28.677697&range=30000

    //192.168.43.204:5003/route?slon=72.831353&slat=18.968835&elon=72.5714&elat=23.0225&range=30000

    //http://192.168.43.204:5003/route?slon="+uLong+"&slat="+uLat+"&elon="+pLong+"&elat="+pLat+"&range=30000

    axios.post("http://192.168.43.229:5003/route?slon=" + uLong + "&slat=" + uLat + "&elon=" + pLong + "&elat=" + pLat + "&range=30000")
      .then(s => {

        // console.log("ahhhhhhhhhhhhh",[s.data[0][0].lon , s.data[0][0].lat])
        // // let cooors = s.data[0]
        let FinCoooords = []
        let routFin = []
        let coooords = []

        // console.log(s.data.length)

        for (i = 0; i < s.data.length; i++) {

          coooords = []
          for (j = 0; j < s.data[i].length; j++) {
            coooords.push([parseFloat(s.data[i][j].lon), parseFloat(s.data[i][j].lat)])
          }

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

          console.warn(i + "      ", coooords)

          routFin.push(rut)


        }

        console.log("lrngth", routFin.length)

        this.setState({
          sLon: uLong,
          sLat: uLat,
          dLon: pLong,
          dLat: pLat,
          routea: routFin[0],
          routeb: routFin[1]
        })

      })
      .catch(e => {
        console.log("some errp ", e);
      })

  }


  render() {

    let colorss = ["red", "blue", "brown"]

    //console.log("ahahaahha",FinCoooords)
    console.warn("abababababakkkkkkakakaakakak", this.state.routea)

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
    const { navigation } = this.props;
    const imgURL = navigation.getParam('img')

    return (
      <View style={styles.container}>
        <Image style={{ width: "100%", height: 200 }}
          source={{ uri: imgURL }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 25, marginTop: 10, color: 'black' }}>{navigation.getParam('name')}</Text>
          <View style={{ backgroundColor: "green", marginRight: 15, width: 50, borderRadius: 12, marginTop: 10, height: 30 }}><Text style={{ textAlign: 'center', fontSize: 19, color: 'white' }}>{parseFloat(navigation.getParam('rate'))}</Text></View>

        </View>
        <Text style={{ marginLeft: 25, marginRight: 100, marginTop: 5 }}>{navigation.getParam('description')}</Text>
        <Text style={{ marginLeft: 25, marginRight: 25, marginTop: 5, color: '#000011' }}>Address: Nagpada,Mumbai Central,Mumbai</Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginLeft:20,
            marginRight:20
          }}
        />
        <View style={{backgroundColor:'#e84c4c',marginLeft:20,marginRight:20}}>
        <Text style={{fontSize:20 }}>Promotions:</Text>
        <Text>50% Off between 1 AM to 6 AM </Text>
        </View>
          
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginLeft:20,
            marginRight:20
          }}
        />


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
