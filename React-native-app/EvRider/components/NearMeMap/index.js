import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,FlatList,TouchableOpacity, AppState} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import {Button,List,Fab,Icon} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { Rating} from 'react-native-elements';
import Dialog, { DialogTitle,DialogContent,DialogFooter,DialogButton,SlideAnimation} from 'react-native-popup-dialog';
import geolib from 'geolib'
import { IP } from '../../utils/constants' 
import openMap from 'react-native-open-maps';

Mapbox.setAccessToken('sk.eyJ1Ijoia2FycnkwMjk4IiwiYSI6ImNqcXVtcXJ3aTBrZHE0Mm55MjE1bm9xM28ifQ.B3V1a-Yd0Q1PS2GDjZ-_bg');

//"charge":["chademo","css_sae","j-1772","supercharger","type2","wall"]

var bord = 150

class NearMeMap extends Component {

  constructor(props) {
    super(props);

    

    this.state = {
        latitude: 19.13566162451865,
        longitude: 72.86615863993508,
        placeLat : '',
        placeLon : '',
        Dialog:false,
        DialogTitle:"abcTitle",
        dialogC:[2,3,4],
        DialogCharge:["chademo","css_sae","j-1772","supercharger","type2","wall"],
        DialogRating: 4,
        DialogMail:"abc@abc",
        DialogUri:'https://dqbasmyouzti2.cloudfront.net/assets/content/cache/made/content/images/articles/EV_ChargingII_XL_721_420_80_s_c1.jpg',
        DialogContact: 999233233,
        myStateFinale:[],
        myStateFinaleDup:[],
        DialogIcon:'public',
        prevLatLng: {},
        coordinate:{},
        prevLoc : {
          lat : '',
          lon : '',
          time : ''
        },
        started : false,
        distanceTravelled : 0,
        DialogBattery:false,
        valueBattery:88,
        borderColor:'orange',
        statusMessage:'charging',
        colorText:'black',
        DialogPrice:120
    };

    this.tracker = this.tracker.bind(this);
    this.callServer = this.callServer.bind(this);
    this.updateStations = this.updateStations.bind(this);
    this.updateFunc = this.updateFunc.bind(this);
  }

  goToYosemite(coors) {
    openMap( { travelType : "drive",
    end : `${coors[0]},${coors[1]}`} )
  }

  
  //charging-station
  //map-marker-alt  
  renderAnnotations (a,b,k,colr,tite,imgPik,imgUri,email,contact,rating,locColr,price) {

    var icoList = ["bolt","house-damage","city","street-view","hotel"]
    var colors=["blue","black","brown","red","#ddbc00"]

    var glyf = icoList[colors.indexOf(colr)]
    
    // this.setState( { placeLat : b , placeLon : a } )

    // console.log("abcabca         ",glyf)

    //console.warn(imgPik)
      return (
        <Mapbox.PointAnnotation
          key={k}
          id={k}    
          coordinate={[a,b]}>

              <Text style={{color:"black" , backgroundColor:"white"}}>{price}</Text>
              <FontAwesome5 name={glyf} brand style={{fontSize: 28, color:locColr}}  
              onPress={() => { this.setState({Dialog: true , DialogTitle:tite , dialogC:imgPik ,
                                DialogUri:imgUri ,DialogMail:email ,DialogContact:contact,
                                DialogRating:rating ,DialogIcon:glyf, placeLat : b , placeLon : a ,DialogPrice:price});
            }}
              />
              
              {/* onPress={() => { this.setState({Dialog: true , DialogTitle:tite , dialogC:imgPik ,DialogUri:imgUri ,DialogMail:email ,DialogContact:contact,DialogRating:rating });
              }} */}
          <Mapbox.Callout title={tite} />
        </Mapbox.PointAnnotation>
      )
   
  }

  callServer(lat,lon,range,options,takenTime){

    axios.post( IP + '/range/checkWarning', {
      lat : lat,
      lon : lon,
      range : range,
      options : options
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.post( IP + '/range/AnonyData', {
      slat : this.state.prevLoc.lat,
      slon : this.state.prevLoc.lon,
      elat : lat,
      elon : lon,
      takenTime,
      time : Date.now()
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log("Called")
  }  

  updateStations(stations){
      this.setState( { myStateFinale : stations } )
  }


  componentDidMount(){

  //  console.log("ababababababab",this.map.getZoom())

    console.disableYellowBox = true


    
    this.watchID = navigator.geolocation.watchPosition(
      position => {

        const { latitude, longitude } = position.coords;  
        this.state.lat = latitude
        this.state.lng = longitude
       
        console.log("Inside Tracker")
      //  console.log([latitude,longitude])    
        var status = this.state.started;
        if ( !status ){
          this.setState({ started : true,
          prevLoc : {
            lat : latitude,
            lon : longitude,
            time : Date.now()
          } });
        }
        if ( latitude != undefined ){
          this.tracker(latitude, longitude)
        }
        
    },
    (error) => alert(error.message),
    { enableHighAccuracy: true, maximumAge: 500 })


    let rout = this.props.navigation.getParam("abc");

    console.log("check" , rout)

    console.log("entered Mount")  



    axios.get("http://192.168.43.141:2454/api/getAllStation")
    .then(s=>{

        const rout = s.data.data;
    //    console.log("dsvsdvdfvsvdfsfv",s.data)
        var cooors = []

        this.setState({myStateFinale:rout})

    })
    .catch(e=>{
       console.log("some errp ",e);
    } )

if(this.state.valueBattery>75)
{
  this.setState({borderColor:'green',statusMessage:"Good condition",colorText:"green"})
  

}
else if(this.state.valueBattery>20)
{
  this.setState({borderColor:'#f2cd3c',statusMessage:"Charging",colorText:'#f2cd3c'})
}
else{
  this.setState({borderColor:'#d10808',statusMessage:"Charging required",colorText:'#d10808'})
}

  }


  tracker(nlat, nlon, time = Date.now()){
    console.log("location changed")
    console.log("prev lat lon: ", this.state.prevLoc.lat, this.state.prevLoc.lon,this.state.prevLoc.time)
    console.log("new lat lon: ", nlat, nlon,time)
    var speed = geolib.getSpeed(
      { lat :  this.state.prevLoc.lat , lng :  this.state.prevLoc.lon, time : this.state.prevLoc.time},
      {lat : nlat, lng : nlon , time: time},
      { unit : 'mph'})
      geolib.getDistance(
        {latitude: 51.5103, longitude: 7.49347},
        {latitude: "51° 31' N", longitude: "7° 28' E"}
    );

    var dist = geolib.getDistance(
      { lat :  this.state.prevLoc.lat , lng :  this.state.prevLoc.lon},
      {lat : nlat, lng : nlon}
  );

  this.setState({ distanceTravelled : dist });

  if ( dist > 200 ){
    var range = 1000, options = ['css_sae', 'chademo'];
    this.callServer( nlat, nlon, range, options, takenTime = dist/speed );
  }
  

  console.log("Speed and Distance", speed , dist);


  }

  renderAnno () {
    //console.warn(imgPik)
      return (
        <Mapbox.PointAnnotation
        key='pointAnnotation'
        id='pointAnnotation'
        coordinate={[this.state.longitude,this.state.latitude]}>

            <View style={styles.annotationContainer}>
              <View style={styles.annotationFill}>

  

              </View>
            </View>


        <Mapbox.Callout title='user Location' />
      </Mapbox.PointAnnotation>
      )
   
  }

  updateFunc(data){

    this.setState({ myStateFinale : data })
    console.log("called", data)
  }
 

  render() {

    var cords = [];

    let rout = this.state.myStateFinale

    // console.warn("after   ",this.state.myStateFinale)

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
        let imgPik = rout[i].slots
        let price = rout[i].price
        let img = [require("../../assets/images/chademo.png"),
            require("../../assets/images/css_sae.png"),
            require("../../assets/images/j-1772.png"),
            require("../../assets/images/supercharger.png"),
            require("../../assets/images/type2.png"),
            require("../../assets/images/wall.png")]

            let FinImag = []
            let totalSlots = rout[i].totalSlots
            let usedSlots = rout[i].slotsAvailable

            let locColor = "black"

            if(usedSlots/totalSlots*100 > 75){
                locColor = "green"
            }
            else if(usedSlots/totalSlots*100 > 40){
                locColor = "#e8c812"
            }
            else{
              locColor = "red"
            }




      //  console.warn(img)

        for(j=0 ; j<imgPik.length;j++){

            //console.log(imgPik[j].connector)
            let z = DialogCharge.indexOf(imgPik[j].connector)
        //    console.log(z)
            FinImag.push(img[z])
        }

     //   console.warn(FinImag)

        cords.push( this.renderAnnotations(long,lat,i.toString(),col,title,FinImag,imgUri,email,contact,rating,locColor,price))                            
    }


    return (

       // navigate('nearmerout',item)

      <View style={styles.container}>
            {/* tabStyle={{backgroundColor: '#62B1F6', height: 60}}
                         activeTabStyle={{backgroundColor: '#5291F6', height: 60}} */}
        <View style={{flexDirection:"row" ,justifyContent: 'center', }}>
              <Button style={{flex:2, backgroundColor:"#3700B3", }}
                      onPress={() => {this.props.navigation.navigate('nearmeMap')}}>
                <View style={{paddingLeft:4, paddingRight:4, flexDirection:"row",justifyContent: 'space-around',  }}>
                  <FontAwesome5 name={"map-marked-alt"} brand style={{paddingLeft:5 , fontSize: 20, color:'white', flex:1}} />
                  <Text style={{fontSize:21, flex:2, color:'white'}}>Map </Text>
                </View>
              </Button>

                <Button style={{flex:3, backgroundColor:"#6200EE", }} onPress={()=>this.setState({DialogBattery:true})} >
                <View style={{paddingLeft:4, paddingRight:4, flexDirection:"row",justifyContent: 'space-around',  }}>

                    <FontAwesome5 name={"battery-three-quarters"} brand style={{transform: [{ rotate: '270deg'}],fontSize: 20, color:"white" }} />
                    <Text style={{fontSize:21 ,color:"white"}} > {"charge:20%"} </Text>
                </View>
                </Button>
                <Button style={{flex:2, backgroundColor:"#6200EE", }}
                        onPress={() => {this.props.navigation.navigate('nearmelist',{abc:this.state.myStateFinale})}}>
                  <View style={{paddingLeft:4, paddingRight:4, flexDirection:"row" ,justifyContent: 'space-around', }}>
                    <FontAwesome5 name={"list-ul"} brand style={{fontSize: 20, color:"white", flex:1}} />     
                    <Text style={{fontSize:21,color:"white", flex:2}} > List </Text>
                </View>
                </Button>
        </View>


        <Mapbox.MapView styleURL={Mapbox.StyleURL.Street}
            zoomLevel={12}
            centerCoordinate={[72.872334,19.132236]}
            style={[styles.container,{zIndex:-1}]}
            >


        {this.renderAnno()}


        {cords}
        
        </Mapbox.MapView> 


        <View style={{backgroundColor:"transparent",position:'absolute',top:"50%",Left:"50%",marginTop:150,marginLeft:340,zIndex:10}}>
            <Button rounded style={{marginLeft:1,backgroundColor:"white",    width: 60, height: 60,borderRadius: 60}} 
                            onPress={() => {this.props.navigation.navigate('filter', { updateFunc : this.updateFunc})}}>
                        <FontAwesome5 name={"filter"} brand style={{paddingLeft:18,fontSize: 26, color:'black'}} />
                </Button>
        </View>


          <View style={{backgroundColor:"transparent",position:'absolute',top:"50%",Left:"50%",marginTop:230,marginLeft:340,zIndex:10}}>
              <Button rounded style={{marginLeft:1,backgroundColor:"white",    width: 60, height: 60,borderRadius: 60}}
                      onPress={() => {this.props.navigation.navigate('navigateRoute',{abc:this.state.myStateFinale})}}>
                  <FontAwesome5 name={"crosshairs"} brand style={{paddingLeft:18,fontSize: 26, color:'black'}} />
              </Button>
          </View>
{/* --------------------------------------------------------------------------------------------------------------------- */}
        <Dialog
                onDismiss={() => {
                this.setState({ Dialog: false });
                }}
                width={0.90}
                height={0.9}
                visible={this.state.Dialog}
                rounded
                actionsBordered
                >

                <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center", padding:5}}>
                    <Text style={{marginLeft:5,textAlign:'center',fontSize:30 ,color:"black", fontWeight: 'bold',}} >{this.state.DialogTitle}</Text>
                    <Text style={{ padding:3, textAlign:'center',borderWidth:1, borderRadius:3, borderColor:"black", fontSize:30 ,color:"black",}} >₹ {this.state.DialogPrice}</Text>
                </View>
            
                <Image style={{width:"100%",height:200,borderBottomWidth:0.7,borderColor:"#bab8b8"}} source={{uri:this.state.DialogUri}}></Image>

                <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                    <Text style={{marginLeft:10,fontSize:20}} >{this.state.DialogMail}</Text>

                    <View style={{flexDirection:"row"}}>
                      <FontAwesome5 name="phone" brand style={{color:'black',fontSize:20,   transform: [{ rotate: '90deg'}], marginRight:10}} />   
                      <Text style={{marginRight:10,fontSize:20}}>{this.state.DialogContact}</Text> 
                    </View>
                </View>

                <View style={{marginTop:5, borderBottomColor: '#e5e5e5',borderBottomWidth: 0.8,}} />


                <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center",marginTop:10}}>
                    <Rating
                        imageSize={30}
                        readonly
                        startingValue={this.state.DialogRating}
                        style={{marginLeft:10}}
                        />
                    <View style={{flexDirection:"row",marginRight:10}}>
                        <FontAwesome5 name={this.state.DialogIcon} brand style={{marginRight:10,paddingLeft:5 , fontSize: 30, color:'black'}} />   
                        <Text style={{paddingTop:3}}>{this.state.DialogIcon}</Text> 
                    </View>   
                </View>

                <View style={{marginTop:5, borderBottomColor: '#e5e5e5',borderBottomWidth: 0.8,}} />

                <View style={{marginTop:10, flexDirection:"row",justifyContent:"space-around" }}>
                      <FlatList 
                        numColumns={4}
                        data = {this.state.dialogC}
                        
                        renderItem={i => {
                            // console.warn("Baka Entered") 
                            var queueLength = Math.floor(Math.random() * 4);
                            return (
                                <View style={{ flex:1, flexDirection:"column", borderWidth:1, borderColor:"#e5e5e5", borderRadius:5}}>
                                  <Image style={{alignSelf:"center", width:45,height:45,margin:7}} source={i.item} ></Image>
                                  <Text style={{textAlign:"center", fontSize:15, marginLeft:15, marginRight:15,borderRadius:5, padding:3, backgroundColor:"#4200AE",color:"white"}}>{queueLength}</Text>
                                  </View>
                            )}}
                      >
                    </FlatList>
                </View>


                <Text style={{marginLeft:10, fontSize:15, paddingTop:10, paddingBottom:10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</Text>

<View style={{bottom:0}}>
            <View>

                <Button style={{backgroundColor:'#6200EE' , width:'100%'}} onPress={() => {this.goToYosemite( [this.state.placeLat, this.state.placeLon] )}}>
                  <Text style={{fontSize:21 , paddingLeft:130 , color:"white"}} >  Nav </Text>
                  <FontAwesome5 name={"location-arrow"} brand style={{paddingLeft:5, marginRight:130 , fontSize: 20, color:"white"}} />        
                </Button>                              
            </View>
            <View style={{flexDirection:"row"}}>
                <Button light onPress={() => {this.setState({ Dialog: false });}}>
                  <Text style={{fontSize:21 , paddingLeft:35}}>    Back </Text>
                  <FontAwesome5 name={"reply"} brand style={{paddingLeft:5 , paddingRight:35 , fontSize: 20, color:'black'}} />        
                </Button>
                <Button light onPress={() => {this.setState({ Dialog: false });}}>
                  <Text style={{fontSize:21}} >          Fav </Text>
                  <FontAwesome5 name={"star"} brand style={{paddingLeft:5 , fontSize: 20, color:'black', paddingRight:85}} />        
                </Button>
            </View>
            </View>
            </Dialog>



      <Dialog
        onDismiss={() => {
        this.setState({ DialogBattery: false });
        }}
        width={0.75}
        visible={this.state.DialogBattery}
        rounded
        actionsBordered
        onTouchOutside  ={()=>{
        this.setState({DialogBattery:false})
        }}
        >
          <View style={{height:"65%",flexDirection:"column",justifyContent: "space-between",alignItems: "center", }} >
          <View style ={styles.DialogBContainer}>
          
          <View style={[styles.CircleShapeView,{borderColor:this.state.borderColor}]}>
          <Text style={{ paddingLeft:20, textAlign:'center', fontSize:45,fontWeight:'bold',color:'black',}} > {this.state.valueBattery}% </Text>
          
          </View>
          </View>


          <View>
          <Text style={[styles.status,{color:this.state.colorText}]} > Status:{this.state.statusMessage}</Text>
          </View>
          <View >
          <Text style={{fontSize:22,fontWeight:'bold',color:'#000',marginTop:10}} > Estimated Range</Text>


          </View>

          <View style={{margin:10,marginTop:55}}>
          <Button style={{paddingRight:22,backgroundColor:"#f1813b"}} rounded onPress={() => {this.setState({ Dialog: false });}}>
          <Text style={{fontSize:22}} > Set reminder </Text>
          <FontAwesome5 name={"bell"} brand style={{paddingLeft:5 , fontSize: 20, color:'black'}} /> 
          </Button>

          </View>

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
    width: bord,
    height: bord,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgba(218, 82, 82, 0.25)',
    borderRadius: bord,
  },
  annotationFill: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#f20000',
    transform: [{ scale: 0.6 }],
  },
  DialogBContainer:{
    
backgroundColor:"#e0dcdb",    //grey
width:"100%",
    justifyContent: 'center',
    alignItems:'center'
  },
  CircleShapeView: {
        marginTop:10,
        marginBottom:10,
    elevation:10,
    justifyContent:'center',
    alignItems:'center',
    width: 150,
    height: 150,
    borderRadius: 150/2,
    borderStyle:'solid',
    borderWidth:10,
    borderColor:'#ea5e33',
    backgroundColor: '#fff'
},
status:{fontSize:22,
  fontWeight:'bold',
  alignItems:'center' ,
  marginTop:10}
 

});

export default NearMeMap;
