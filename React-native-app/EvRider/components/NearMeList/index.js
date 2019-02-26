import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,FlatList} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import {Button,List} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { Rating} from 'react-native-elements';
import Dialog, { DialogTitle,DialogContent,DialogFooter,DialogButton,SlideAnimation} from 'react-native-popup-dialog';

Mapbox.setAccessToken('sk.eyJ1Ijoia2FycnkwMjk4IiwiYSI6ImNqcXVtcXJ3aTBrZHE0Mm55MjE1bm9xM28ifQ.B3V1a-Yd0Q1PS2GDjZ-_bg');

//"charge":["chademo","css_sae","J-1772","supercharge","Type2","wall"]

class NearMeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        latitude: 19.26196225,
        longitude: 72.86661427,
        Dialog:false,
        DialogTitle:"abcTitle",
        dialogC:[2,3,4],
        DialogCharge:["chademo","css_sae","J-1772","supercharge","Type2","wall"],
        DialogRating: 4,
        DialogMail:"abc@abc",
        DialogUri:'https://dqbasmyouzti2.cloudfront.net/assets/content/cache/made/content/images/articles/EV_ChargingII_XL_721_420_80_s_c1.jpg',
        DialogContact: 999233233,
        colorTags:["Turbo","Home","Mall","Public","Hotel"],
        colors:["blue","black","brown","red","#ddbc00"],
        prevLatLng: {},
        coordinate:{latitude: 19.26196225,longitude: 72.86661427},
        route:{
          "data": [
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.969491,
                          20.277924
                      ]
                  },
                  "name": "Sil EV Station",
                  "typeOfStation": "Turbo",
                  "rating": 3,
                  "slots": [],
                  "owner": "Sick Boi",
                  "imageUrl": "http://en.people.cn/NMediaFile/2017/0906/FOREIGN201709061717000312206109609.jpg",
                  "contactNo": 9762622540,
                  "_id": "5c6fc1cdb71efc1495fdc6c7",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["chademo","css_sae","Type2","wall"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.911043,
                          20.382136
                      ]
                  },
                  "name": "Sardar di Dhaba",
                  "typeOfStation": "Hotel",
                  "rating": 2.7,
                  "slots": [],
                  "owner": "manhaattteten",
                  "contactNo": 9762622540,
                  "_id": "5c6fc3c13714901fe1d11892",
                  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QaRL87xNoOcSkaBwcnezuGVYqUvZMa5IO6McfS8bYmjy6mh5",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["J-1772","supercharge","Type2","wall"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.951561,
                          20.955589
                      ]
                  },
                  "name": "End Point",
                  "typeOfStation": "Mall",
                  "rating": 4,
                  "slots": [],
                  "owner": "Facebbok",
                  "contactNo": 9762622540,
                  "_id": "5c6fc44eb34d192111a0603f",
                  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2kmRGWGmLpljck61aOIcsvhMtEbazb1l7JT_9_iMNr8wkxKxcfA",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["chademo","css_sae","J-1772","supercharge"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.959101,
                          21.181887
                      ]
                  },
                  "name": "Jio garden",
                  "typeOfStation": "Turbo",
                  "rating": 4.5,
                  "slots": [],
                  "owner": "Google",
                  "contactNo": 9762622540,
                  "_id": "5c6fc4a4b34d192111a06040",
                  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmT18idwcfIAjSLjmMSAF0wl-5pwcy3b0p_4eGS_Qqa9xRMeL3pw",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["wall"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.822887,
                          21.216358
                      ]
                  },
                  "name": "Pancham Statio0n",
                  "typeOfStation": "Public",
                  "rating": 4.7,
                  "slots": [],
                  "owner": "Pnachatantra",
                  "contactNo": 9762622540,
                  "_id": "5c6fc502b34d192111a06041",
                  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VR2VOGuKdsnp1vrg8qDSiZe3nnKhdDKcRbUdayAvEwQb3NFNPg",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["J-1772","wall"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.995101,
                          21.615807
                      ]
                  },
                  "name": "Power house",
                  "typeOfStation": "Public",
                  "rating": 3.5,
                  "slots": [],
                  "owner": "Vedant Thakur",
                  "contactNo": 9762622540,
                  "_id": "5c6fc563b34d192111a06042",
                  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGa-MH5rTbqFcWwTvJvH7abJI5s0FuRO-vs_eDWdqHZTLDSD0",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["J-1772","wall"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          73.706714,
                          24.652475
                      ]
                  },
                  "name": "Charge point",
                  "typeOfStation": "Home",
                  "rating": 4.4,
                  "slots": [],
                  "owner": "Money bhaii",
                  "contactNo": 9762622540,
                  "_id": "5c6fc74bb34d192111a06045",
                  "imageUrl": "https://thedriven.io/wp-content/uploads/2018/11/E-Tankstelle-Ausgsburg-ZussmarshausenJPG-800x450.jpg",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["chademo"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.886877,
                          19.347293
                      ]
                  },
                  "name": "Motor Station",
                  "typeOfStation": "Public",
                  "rating": 3,
                  "slots": [],
                  "owner": "",
                  "contactNo": 9762622540,
                  "_id": "5c6fc02fb71efc1495fdc6c4",
                  "imageUrl": "https://s3.paultan.org/image/fen-ev-02-630x430.jpg",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["chademo","supercharge","wall"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.969498,
                          19.189931
                      ]
                  },
                  "name": "Fiona EV station",
                  "typeOfStation": "Public",
                  "rating": 4.2,
                  "slots": [],
                  "owner": "Monkey D Luffy",
                  "contactNo": 9762622540,
                  "_id": "5c6fbfccb71efc1495fdc6c3",
                  "imageUrl": "https://dqbasmyouzti2.cloudfront.net/assets/content/cache/made/content/images/articles/EV_ChargingII_XL_721_420_80_s_c1.jpg",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["chademo","css_sae","J-1772","supercharge","Type2","wall"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.87369574834548,
                          19.130494867008238
                      ]
                  },
                  "name": "Mahakali Station",
                  "typeOfStation": "Public",
                  "rating": 4,
                  "slots": [],
                  "owner": "nCheck",
                  "imageUrl": "https://dqbasmyouzti2.cloudfront.net/assets/content/cache/made/content/images/articles/EV_ChargingII_XL_721_420_80_s_c1.jpg",
                  "contactNo": 8655513317,
                  "_id": "5c70fb9ba9afcd4aa3577277",
                  "__v": 0,
                  "email": "suyash.sreekumar@gmail.com",
                  "charge":["css_sae"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.84274669074892,
                          19.143631700867786
                      ]
                  },
                  "name": "Sweet Corner",
                  "typeOfStation": "Hotel",
                  "rating": 4,
                  "slots": [],
                  "owner": "Pulkit",
                  "contactNo": 9762622540,
                  "imageUrl": "http://en.people.cn/NMediaFile/2017/0906/FOREIGN201709061717000312206109609.jpg",
                  "_id": "5c70fc48a9afcd4aa3577279",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["chademo","css_sae","J-1772","supercharge","Type2","wall"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.88892,
                          19.476374
                      ]
                  },
                  "name": "Car Works",
                  "typeOfStation": "Turbo",
                  "rating": 3.6,
                  "slots": [],
                  "owner": "steph curry",
                  "contactNo": 9762622540,
                  "_id": "5c6fc0aeb71efc1495fdc6c5",
                  "imageUrl": "http://en.people.cn/NMediaFile/2017/0906/FOREIGN201709061717000312206109609.jpg",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["Type2","wall"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.922116,
                          19.131039
                      ]
                  },
                  "name": "Gia's EV Station",
                  "typeOfStation": "Hotel",
                  "rating": 4,
                  "slots": [],
                  "owner": "modi bhaii",
                  "contactNo": 9762622540,
                  "_id": "5c6fbec2b71efc1495fdc6c2",
                  "imageUrl": "https://goo.gl/RMnL53",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["chademo","supercharge"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.911043,
                          19.65206
                      ]
                  },
                  "name": "Warehouse EV Station",
                  "typeOfStation": "Mall",
                  "rating": 3.9,
                  "slots": [],
                  "owner": "Achhapu",
                  "imageUrl": "https://cdn.vox-cdn.com/thumbor/YW1yI-LX___TNp_DYKcM5-UyB1Q=/0x0:4032x2272/1200x800/filters:focal(1694x814:2338x1458)/cdn.vox-cdn.com/uploads/chorus_image/image/62681587/4737065_fastcharge_prototype_for_a_charging_station_jettingen_scheppach_2018_porsche_ag.0.jpg",
                  "contactNo": 9762622540,
                  "_id": "5c6fc13bb71efc1495fdc6c6",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["supercharge","wall"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          73.23543,
                          22.296221
                      ]
                  },
                  "name": "Dj House",
                  "typeOfStation": "Mall",
                  "rating": 3.8,
                  "slots": [],
                  "owner": "Suu Bhiya",
                  "contactNo": 9762622540,
                  "_id": "5c6fc63bb34d192111a06043",
                  "imageUrl": "https://cdn.vox-cdn.com/thumbor/YW1yI-LX___TNp_DYKcM5-UyB1Q=/0x0:4032x2272/1200x800/filters:focal(1694x814:2338x1458)/cdn.vox-cdn.com/uploads/chorus_image/image/62681587/4737065_fastcharge_prototype_for_a_charging_station_jettingen_scheppach_2018_porsche_ag.0.jpg",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["chademo","css_sae","J-1772","supercharge","Type2","wall"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.613221,
                          23.000643
                      ]
                  },
                  "name": "Qia Power",
                  "typeOfStation": "Turbo",
                  "rating": 3.8,
                  "slots": [],
                  "owner": "BakaMan",
                  "contactNo": 9762622540,
                  "_id": "5c6fc6b0b34d192111a06044",
                  "imageUrl": "https://cdn.vox-cdn.com/thumbor/YW1yI-LX___TNp_DYKcM5-UyB1Q=/0x0:4032x2272/1200x800/filters:focal(1694x814:2338x1458)/cdn.vox-cdn.com/uploads/chorus_image/image/62681587/4737065_fastcharge_prototype_for_a_charging_station_jettingen_scheppach_2018_porsche_ag.0.jpg",
                  "__v": 0,
                  "email": "elocievs@gmail.com",
                  "charge":["chademo","wall"]
              },
              {
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          72.86615463993508,
                          19.12864162451865
                      ]
                  },
                  "name": "HS Turbo",
                  "typeOfStation": "Turbo",
                  "rating": 4,
                  "slots": [],
                  "owner": "nCheck",
                  "imageUrl": "https://dqbasmyouzti2.cloudfront.net/assets/content/cache/made/content/images/articles/EV_ChargingII_XL_721_420_80_s_c1.jpg",
                  "contactNo": 9167211562,
                  "_id": "5c70fbeea9afcd4aa3577278",
                  "__v": 0,
                  "email": "kartick.hariharan@gmail.com",
                  "charge":["chademo"]
              }
          ]
      }
    };
  }

    
  renderAnnotations (a,b,k,colr,tite,imgPik,imgUri,email,contact) {
    //console.warn(imgPik)
      return (
        <Mapbox.PointAnnotation
          key={k}
          id={k}
          coordinate={[a,b]}>
                
              <FontAwesome5 name={"map-marker-alt"} brand style={{paddingLeft:15 , fontSize: 25, color:colr}}  
              onPress={() => { this.setState({Dialog: true , DialogTitle:tite , dialogC:imgPik ,DialogUri:imgUri ,DialogMail:email ,DialogContact:contact });
              }}
              />
    
          <Mapbox.Callout title={tite} />
        </Mapbox.PointAnnotation>
      )
   
    
  }

 

  render() {

    var cords = [];

    let rout = this.state.route.data
   // console.warn(rout)


    for(i=0 ; i<this.state.route.data.length ; i++){
       
        let long = rout[i].location.coordinates[0]
        let lat = rout[i].location.coordinates[1]
        let col = this.state.colors[this.state.colorTags.indexOf(rout[i].typeOfStation)]
        let title = rout[i].name
        let email = rout[i].email
        let contact = rout[i].contactNo
        let rating = rout[i].rating
        let owner = rout[i].owner
        let imgUri = rout[i].imageUrl
        let imgPik = rout[i].charge
        let img = [require("../../assets/images/chademo.png"),
            require("../../assets/images/css_sae.png"),
            require("../../assets/images/J-1772.png"),
            require("../../assets/images/supercharge.png"),
            require("../../assets/images/Type2.png"),
            require("../../assets/images/wall.png")]
        let FinImag = []

        for(j=0 ; j<imgPik.length;j++){
          let z = this.state.DialogCharge.indexOf(imgPik[j])
          //console.warn()
          FinImag.push(img[z])
        }

        //console.warn(FinImag)

        cords.push( this.renderAnnotations(long,lat,i.toString(),col,title,FinImag,imgUri,email,contact))
    }


    // for(i=1 ; i<10 ; i++)
    // {

    //   let long = this.state.route.features[i].geometry.coordinates[0]
    //   let lat = this.state.route.features[i].geometry.coordinates[1]
    //   let col = this.state.colorTags.indexOf(this.state.route.features[i].properties.type)
    //   let colr = this.state.colors[col]
    //   let title = this.state.route.features[i].properties.name
    //   let imgPik = this.state.route.features[i].properties.charge
    //   let img = [require("../../assets/images/chademo.png"),
    //              require("../../assets/images/css_sae.png"),
    //              require("../../assets/images/J-1772.png"),
    //              require("../../assets/images/supercharge.png"),
    //              require("../../assets/images/Type2.png"),
    //              require("../../assets/images/wall.png")]
    //   let FinImag = []

    //   for(j=0 ; j<imgPik.length;j++){
    //     let z = this.state.DialogCharge.indexOf(imgPik[j])
    //     //console.warn()
    //     FinImag.push(img[z])
    //   }

    //   cords.push( this.renderAnnotations(long,lat,i.toString(),colr,title,FinImag))

    // }

    return (


      <View style={styles.container}>
    

      <Mapbox.MapView styleURL={Mapbox.StyleURL.Street}
          zoomLevel={12}
          centerCoordinate={[72.872334,19.132236]}
          style={styles.container}
          showUserLocation={true}>

      {cords}
       
      </Mapbox.MapView> 




      <Dialog
            onDismiss={() => {
              this.setState({ Dialog: false });
            }}
            width={0.85}
            visible={this.state.Dialog}
            rounded
            actionsBordered

            >
            
       
            <View >
              <View style={{alignItems: "center"}}>
                <Text style={{fontSize:25}}>{this.state.DialogTitle}</Text>
              </View>
              <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center"}}>
                <Text style={{marginLeft:10,fontSize:15}} >{this.state.DialogMail}</Text>
                <Text style={{marginRight:10,fontSize:15}}>{this.state.DialogContact}</Text> 
              </View>
             
              <Image style={{width:"100%",height:200}} source={{uri:this.state.DialogUri}}></Image>

              <Rating
                  imageSize={30}
                  readonly
                  startingValue={4}
                  style={{marginTop:3}}
                />

            </View>

            <View >
              <FlatList 
                numColumns={3}
                data = {this.state.dialogC}
                renderItem={({item}) => {
                    //console.warn("baka    ",item)  
                    return (
                        <View style={{marginLeft:10}}><Image style={{width:78,height:78,margin:10}} source={item} ></Image></View>
                    )}}
              >
              </FlatList>

            </View>


            <Text style={{marginLeft:10}}>Descrpition abt the place will come here when nehal bhaiya sends the info</Text>

          <View style={{flexDirection:"row"}}>
            <Button light onPress={() => {this.setState({ Dialog: false });}}>
              <Text style={{fontSize:21}}>    Back </Text>
              <FontAwesome5 name={"reply"} brand style={{paddingLeft:5 , fontSize: 20, color:'black'}} />        
            </Button>

            <Button light onPress={() => {this.setState({ Dialog: false });}}>
              <Text style={{fontSize:21}} >          Fav </Text>
              <FontAwesome5 name={"star"} brand style={{paddingLeft:5 , fontSize: 20, color:'black'}} />        
            </Button>

            <Button light onPress={() => {this.setState({ Dialog: false });}}>
              <Text style={{fontSize:21}} >         Nav </Text>
              <FontAwesome5 name={"location-arrow"} brand style={{paddingLeft:5, marginRight:30 , fontSize: 20, color:'black'}} />        
            </Button>
          </View>

        </Dialog>


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
