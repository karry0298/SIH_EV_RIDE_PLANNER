import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList,ScrollView,Image} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { Rating} from 'react-native-elements';
import {Button,ListItem,List, Container, Header, Content, Card, CardItem, Body ,Left,Thumbnail, Item } from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

//http://192.168.2.13:2454/api/findStation

Mapbox.setAccessToken('sk.eyJ1Ijoia2FycnkwMjk4IiwiYSI6ImNqcXVtcXJ3aTBrZHE0Mm55MjE1bm9xM28ifQ.B3V1a-Yd0Q1PS2GDjZ-_bg');

class NearMeList extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            latitude: 19.13566162451865,
            longitude: 72.86615863993508,
            DialogCard: [],
            battery:60,
            dialogC:[2,3,4],
            DialogDist:20,
            Dialog:false,
            DialogTitle:"abcTitle",
            dialogC:[2,3,4],
            DialogRating: 4,
            finCoord:[],
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
                      "charge":["chademo","css_sae","type2","wall"]
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
                      "charge":["j-1772","supercharger","type2","wall"]
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
                      "charge":["chademo","css_sae","j-1772","supercharger"]
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
                      "charge":["j-1772","wall"]
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
                      "charge":["j-1772","wall"]
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
                      "charge":["chademo","supercharger","wall"]
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
                      "charge":["chademo","css_sae","j-1772","supercharger","type2","wall"]
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
                      "charge":["chademo","css_sae","j-1772","supercharger","type2","wall"]
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
                      "charge":["type2","wall"]
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
                      "charge":["chademo","supercharger"]
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
                      "charge":["supercharger","wall"]
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
                      "charge":["chademo","css_sae","j-1772","supercharger","type2","wall"]
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

      deg2rad(deg) {
        return deg * (Math.PI/180)
      }

     getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km

        return d;
      }


    // componentDidMount(){

    // }


    //  this.props.navigation.navigate('nearmerout',item)

    routeFun(item){
        console.log("Entered")

        var cooors = []
      
        axios.post("http://192.168.2.12:5003/route?slon=72.831353&slat=18.968835&elon=77.166284&elat=28.677697&range=30000")
        .then(s=>{
            
            console.log(s.data[0])
            cooors = s.data[0]
            // this.setState({finCoord:s.data[0]})
        })
        .catch(e=>{
           console.log("some errp ",e);
        } )

        console.log("ababa",cooors)
        console.log("Exit")
    }
      
  render() {

        
    // let rout = this.state.route.data
   // console.log("ba",this.state.finCoord)

    const  {navigation}  = this.props;
    //console.log("abcbaskj",navigation.getParam("abc"))

    let rout = navigation.getParam("abc")

    var cords = []


    for(i=0 ; i<rout.length ; i++){
       
        let colors=["blue","black","brown","red","#ddbc00"]
        let DialogCharge=["chademo","css_sae","j-1772","supercharger","type2","wall"]
        let colorTags=["Turbo","Home","Mall","Public","Hotel"]
  
          let long = rout[i].location.coordinates[0]
          let lat = rout[i].location.coordinates[1]
          let col = colors[colorTags.indexOf(rout[i].typeOfStation)]
          let title = rout[i].name
          let email = rout[i].email
          let contact = rout[i].contactNo
          let rating = rout[i].rating
          let owner = rout[i].owner
          let imgUri = rout[i].imageUrl
          let imgPk = rout[i].slots
          let icoList = ["bolt","house-damage","city","street-view","hotel"]
          let img = [require("../../assets/images/chademo.png"),
              require("../../assets/images/css_sae.png"),
              require("../../assets/images/j-1772.png"),
              require("../../assets/images/supercharger.png"),
              require("../../assets/images/type2.png"),
              require("../../assets/images/wall.png")]
          let FinImag = []
    
       // console.warn(rout[i].slots[0].connector)

       // console.warn("main FinImg",FinImag)  
  
        for(j=0 ; j<imgPk.length;j++){
            let z = DialogCharge.indexOf(imgPk[j].connector)
            //console.warn(i , imgPk[j].connector)
            FinImag.push(img[z])
          }

       console.warn("main FinImg",FinImag)  

         let dist = Math.round(this.getDistanceFromLatLonInKm(this.state.latitude,this.state.longitude,lat,long))
         let dict = {uLongitude:this.state.longitude,uLatitude:this.state.latitude,pLongitude:long,pLatitude:lat, 
            name:title , distance : dist , mail:email , contact , rate:rating ,img:imgUri,charge:FinImag,
            type:icoList[this.state.colorTags.indexOf(rout[i].typeOfStation)],typeName:rout[i].typeOfStation}

         cords.push(dict)                           
      }
 


     cords.sort(function(a, b){
        return a.distance-b.distance
    })

    this.state.DialogCard = cords

    return (  
      <View style={styles.container}>



        <View style={{flexDirection:"row"}}>
                <Button style={{backgroundColor:"white",paddingLeft:25,paddingRight:23}}
                        onPress={() => {this.props.navigation.navigate('nearmeMap')}}>
                    <Text style={{fontSize:21}}>Map </Text>
                    <FontAwesome5 name={"map-marked-alt"} brand style={{paddingLeft:5 , fontSize: 20, color:'black'}} />        
                </Button>

                <Button style={{marginLeft:1,backgroundColor:"white",paddingLeft:11,paddingRight:14}} 
                        onPress={() => {this.props.navigation.navigate('nearmelist')}}>
                    <Text style={{fontSize:21}} > {"charge:"+this.state.battery+"%"} </Text>
                    <FontAwesome5 name={"battery-three-quarters"} brand style={{transform: [{ rotate: '270deg'}],marginTop:5,paddingLeft:5 , fontSize: 20, color:'black'}} />        
                </Button>

                <Button style={{marginLeft:1,backgroundColor:"white",paddingLeft:23,paddingRight:27}} 
                        onPress={() => {this.props.navigation.navigate('nearmelist')}}>
                    <Text style={{fontSize:21}} > List </Text>
                    <FontAwesome5 name={"list-ul"} brand style={{paddingLeft:5 , fontSize: 20, color:'black'}} />        
                </Button>
        </View>

            <ScrollView>
               {
                  this.state.DialogCard.map((item, index) => (
                     
                     <View key = {index} >
                        {/* {console.warn("akaka    ",item.charge)} */}
                        <ListItem button style={{borderBottomWidth: 0 , paddingTop:0,paddingBottom:0}} 
                                    onPress={() => this.props.navigation.navigate('nearmerout',item)}>
                            <Content padder>
                                <Card>
                                
                                    <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center"}}>
                                        <Text style={{marginLeft:10,fontSize:23}} >{item.name}</Text>
                                        <Text style={{marginRight:10,fontSize:18}}>{item.distance+" kms Away"}</Text> 
                                    </View>
                                
                                    <Image style={{width:"100%",height:150,borderBottomWidth:0.7,borderColor:"#bab8b8"}} source={{uri:item.img}}></Image>

                                    <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                                        <Text style={{marginLeft:10,fontSize:15}} >{item.mail}</Text>
                                        <Text style={{marginRight:10,fontSize:15}}>{item.contact}</Text> 
                                    </View>

                                    <View style={{marginTop:5, borderBottomColor: '#e5e5e5',borderBottomWidth: 0.8,}} />


                                    <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                                        <Rating
                                            imageSize={30}
                                            readonly
                                            startingValue={item.rate}
                                            style={{marginLeft:10}}
                                            />
                                        <View style={{flexDirection:"row",marginRight:10}}>
                                            <FontAwesome5 name={item.type} brand style={{marginRight:10,paddingLeft:5 , fontSize: 30, color:'black'}} />   
                                            <Text style={{paddingTop:3}}>{item.typeName}</Text> 
                                        </View>   
                                    </View>

                                    <View style={{marginTop:5, borderBottomColor: '#e5e5e5',borderBottomWidth: 0.8,}} />

                                    <View style={{marginTop:10}}>
                                         <FlatList 
                                            numColumns={4}
                                            data = {item.charge}
                                            
                                            renderItem={i => {
                                               // console.warn("Baka Entered") 
                                                return (
                                                    <View style={{marginLeft:10}}><Image style={{width:45,height:45,margin:10}} source={i.item} ></Image></View>
                                                )}}
                                        >
                                        </FlatList>
                                    </View>

                    
                                <CardItem footer bordered>
                                    <Text>Descrpition abt the place will come here when nehal bhaiya sends the info</Text>
                                </CardItem>
                    
                                </Card>
                            </Content>
                        </ListItem>
                     </View>
                  ))
               }
            </ScrollView>


            <View style={{flexDirection:"row"}}>
            <Button style={{backgroundColor:"white",paddingLeft:55,paddingRight:55}}
                    onPress={() => {this.props.navigation.navigate('nearmeMap')}}>
                <Text style={{fontSize:21}}> Filters </Text>
                <FontAwesome5 name={"filter"} brand style={{paddingLeft:5 , fontSize: 20, color:'black'}} />        
            </Button>

            <Button style={{marginLeft:1,backgroundColor:"white",paddingLeft:60,paddingRight:75}} 
                    onPress={() => {this.props.navigation.navigate('nearmelist')}}>
                <Text style={{fontSize:21}} > Sort </Text>
                <FontAwesome5 name={"exchange-alt"} brand style={{transform: [{ rotate: '90deg'}],paddingLeft:5 , fontSize: 20, color:'black'}} />        
            </Button>

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

export default NearMeList;
