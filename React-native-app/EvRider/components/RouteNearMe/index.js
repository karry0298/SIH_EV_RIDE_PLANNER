import React, { Component } from 'react';
import { View, Text, StyleSheet, Image ,ScrollView, } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { Container, Header, Row, Button, Icon, Fab, Content } from 'native-base';


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
      colorArr:['white','white','white','white','white'],
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

//   colorHex = () => {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
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
  colorBox(num){
    let arr=[]
    for (i = 0; i < 5; i++) { 
     arr[i]='white'
    }
    arr[num]='#ffe502'
    this.setState({colorArr:arr})
    console.log('hio')
  }

  componentDidMount() {
    const { navigation } = this.props;
    const uLong = navigation.getParam("uLongitude")
    const uLat = navigation.getParam("uLatitude")
    const pLat = navigation.getParam("pLatitude")
    const pLong = navigation.getParam("pLongitude")

    axios.post("http://192.168.43.229:5003/route?slon=" + uLong + "&slat=" + uLat + "&elon=" + pLong + "&elat=" + pLat + "&range=30000")
      .then(s => {

        let FinCoooords = []
        let routFin = []
        let coooords = []

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

          routFin.push(rut)
        }

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

        <Container>
          <Content>
            <View style={styles.container}>

            <ScrollView>
              <Image style={{ width: "100%", height: 200 }}
                source={{ uri: imgURL }}
              />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 25, marginTop: 10, color: 'black' }}>{navigation.getParam('name')}</Text>
                <View style={{ backgroundColor: "green", marginRight: 15, width: 50, borderRadius: 12, marginTop: 10, height: 30 }}><Text style={{ textAlign: 'center', fontSize: 19, color: 'white' }}>{parseFloat(navigation.getParam('rate'))}</Text></View>

              </View>
              <Text style={{ marginLeft: 25, marginRight: 100, marginTop: 5 }}>{navigation.getParam('description')}</Text>
              <Text style={{ marginLeft: 25, marginRight: 25, marginTop: 5, color: '#000011' }}>Address: Nagpada,Mumbai Central,Mumbai</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:25}}>
              <Text style={{fontSize:16,color:'black'}}>Prices: {navigation.getParam('price')}</Text>
              <Text style={{fontSize:16, marginRight:25,color:'black'}}> WaitTime :50 Min</Text>
              </View>
              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10
                }}
              />
              <View style={{ backgroundColor: '#FFFFFF', marginLeft: 20, marginRight: 20 }}>
                <Text style={{ fontSize: 23, color: '#4cb8ce', fontWeight: '200' }}>Rate this station</Text>
                <View style={{ flexDirection: 'row' }}>
                <Button onPress={(e) => this.colorBox(0) } transparent><View  style={[styles.ratebox,{backgroundColor:this.state.colorArr[0]}] }><View style={{ flexDirection: 'row' }}><Text style={styles.innerText}>1</Text><Icon type="FontAwesome" style={styles.iconStar} name="star-o" /></View></View></Button>
                <Button onPress={(e) => this.colorBox(1) } transparent ><View style={[styles.ratebox,{backgroundColor:this.state.colorArr[1]}]}><View style={{ flexDirection: 'row' }}><Text style={styles.innerText} >2</Text><Icon type="FontAwesome" style={styles.iconStar} name="star-o" /></View></View></Button>
                <Button onPress={(e) => this.colorBox(2) } transparent ><View style={[styles.ratebox,{backgroundColor:this.state.colorArr[2]}]}><View style={{ flexDirection: 'row' }}><Text style={styles.innerText} >3</Text><Icon type="FontAwesome" style={styles.iconStar} name="star-o" /></View></View></Button>
                <Button onPress={(e) => this.colorBox(3) } transparent ><View style={[styles.ratebox,{backgroundColor:this.state.colorArr[3]}]}><View style={{ flexDirection: 'row' }}><Text style={styles.innerText}>4</Text><Icon type="FontAwesome" style={styles.iconStar} name="star-o" /></View></View></Button>
                <Button onPress={(e) => this.colorBox(4) } transparent ><View style={[styles.ratebox,{backgroundColor:this.state.colorArr[4]}]}><View style={{ flexDirection: 'row' }}><Text style={styles.innerText} >5</Text><Icon type="FontAwesome" style={styles.iconStar} name="star-o" /></View></View></Button>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10
                }}
              />
              <View style={{ backgroundColor: '#FFFFFF', marginLeft: 20, marginRight: 20, marginTop: 5 }}>
                <Text style={{ fontSize:18, color: '#4cb8ce', fontWeight: '200' }}>Women Friendliness: <Text style={{color:'black'}}>4/5</Text></Text>
                <Text style={{ fontSize:18, color: '#4cb8ce', fontWeight: '200' }}>Charging Experience: <Text style={{color:'black'}}>3/5</Text> </Text>
              </View>

              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10
                }}
              />

              <View style={{ backgroundColor: '#FFFFFF', marginLeft: 20, marginRight: 20, marginTop: 5 }}>
                <Text style={{ fontSize: 22, color: '#4cb8ce', fontWeight: '200' }}>Promotions:</Text>
                <Text>25% Off between 1 AM to 6 AM </Text>
              </View>

              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10
                }}
              />

              <View style={{marginLeft: 20, marginRight: 20, marginTop: 5}}>
                  <Text style={{fontSize: 22, color: '#4cb8ce', fontWeight: '200'}}>Reviews</Text>              
              </View>


              <View style={{marginLeft: 20, marginRight: 20, marginTop: 5 , marginBottom:25}}> 
                  <Text style={{fontSize: 17, color: 'black', fontWeight: '200' ,  borderBottomColor: 'black',borderBottomWidth: 1, }}>This was a nice place</Text>              
                </View>

                <View style={{marginLeft: 20, marginRight: 20, marginTop: 5 , marginBottom:25}}> 
                  <Text style={{fontSize: 17, color: 'black', fontWeight: '200' ,  borderBottomColor: 'black',borderBottomWidth: 1, }}>Great Place for Charging</Text>              
                </View>

                <View style={{marginLeft: 20, marginRight: 20, marginTop: 5 , marginBottom:25}}> 
                  <Text style={{fontSize: 17, color: 'black', fontWeight: '200' ,  borderBottomColor: 'black',borderBottomWidth: 1, }}>Prices are reasonable</Text>              
                </View>

                <View style={{marginLeft: 20, marginRight: 20, marginTop: 5 , marginBottom:25}}> 
                  <Text style={{fontSize: 17, color: 'black', fontWeight: '200' ,  borderBottomColor: 'black',borderBottomWidth: 1, }}>Charging is slow</Text>              
                </View>

              </ScrollView>
            </View>
          </Content>
        </Container>


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
  ratebox: {
    borderColor: 'black', borderWidth: 1, marginRight: 15, width: 50, borderRadius: 12, marginTop: 10, height: 30
  },
  annotationContainer: {
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  innerText: {
    marginLeft: 10, marginTop: 3,color:'black'
  },
  iconStar: {
    color: 'black', marginTop: 3, marginLeft: 2, marginRight: 20, fontSize: 20
  },
  annotationFill: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  }
});
