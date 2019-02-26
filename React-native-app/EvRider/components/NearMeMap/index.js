import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import {Button,Item,Input,List,Fab,Icon} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { Rating} from 'react-native-elements';
import Dialog, { DialogTitle,DialogContent,DialogFooter,DialogButton,SlideAnimation} from 'react-native-popup-dialog';

Mapbox.setAccessToken('sk.eyJ1Ijoia2FycnkwMjk4IiwiYSI6ImNqcXVtcXJ3aTBrZHE0Mm55MjE1bm9xM28ifQ.B3V1a-Yd0Q1PS2GDjZ-_bg');

//"charge":["chademo","css_sae","j-1772","supercharger","type2","wall"]

// onPress={() => { this.setState({Dialog: true , DialogTitle:tite , dialogC:imgPik ,DialogUri:imgUri ,DialogMail:email ,DialogContact:contact,DialogRating:rating });
// }}

var bord = 150

//var rot = {}

class NearMeList extends Component {
  constructor(props) {
    super(props);


    this.state = {
        latitude: 19.13566162451865,
        longitude: 72.86615863993508,
        BatDialog: false,
        Dialog:false,
        colorTags:["Turbo","Home","Mall","Public","Hotel"],
        colors:["blue","black","brown","red","#ddbc00"],
        DiagRout : {longitude:72.86615863993508,
                    latitude:19.13566162451865,
                    key:"abcab",
                    color:"red",
                    title:"abababab",
                    finLis:[8,9,10],
                    imgUri:'https://dqbasmyouzti2.cloudfront.net/assets/content/cache/made/content/images/articles/EV_ChargingII_XL_721_420_80_s_c1.jpg',
                    email:"abc@abc.com",
                    contact:999233233,
                    rating:4},
        enterRout:false,
        cords:[]
    };
  }

  //charging-station
  //map-marker-alt  
  renderAnnotations (a,b,k,colr,tite,imgPik,imgU,mail,cont,rate) {
    
    
    const stateList = {
        longitude:a,
        latitude:b,
        key : a,
        color : colr,
        title : k,
        finLis : imgPik,
        imgUri:imgU,
        email: mail,
        contact : cont,
        rating:rate
    }

    return (
        <Mapbox.PointAnnotation
          key={k}
          id={k}
          coordinate={[a,b]}>
                
              {console.log("stateList")}  
              <FontAwesome5 name={"charging-station"} brand style={{paddingLeft:15 , fontSize: 25, color:colr}}  

              />



          <Mapbox.Callout title={tite} />
        </Mapbox.PointAnnotation>
      )
   
  }



  renderAnno () {
      return (
        <Mapbox.PointAnnotation
        key='pointAnnotation'
        id='pointAnnotation'
        coordinate={[this.state.longitude,this.state.latitude]}>

        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>

        <Mapbox.Callout title='user Location' />
      </Mapbox.PointAnnotation>
      )
   
  }
  
 
  componentDidMount(){

    console.log("mount entered")

    axios.get("http://192.168.2.10:2454/api/getAllStation")
    .then(s=>{

        const rout = s.data.data;
       // console.log("dsvsdvdfvsvdfsfv",rout)
        var cooors = []

        for(i=0 ; i<rout.length ; i++){

            let colorTags=["Turbo","Home","Mall","Public","Hotel"]
            let colors=["blue","black","brown","red","#ddbc00"]
            let DialogCharge=["chademo","css_sae","j-1772","supercharger","type2","wall"]

            let long = rout[i].location.coordinates[0]
            let lat = rout[i].location.coordinates[1]
            let col = colors[colorTags.indexOf(rout[i].typeOfStation)]
            let title = rout[i].name
            let email = rout[i].email
            let contact = rout[i].contactNo
            let rating = rout[i].rating
            let owner = rout[i].owner
            let imgUri = rout[i].imgUri
            let imgPik = rout[i].slots
            let img = [require("../../assets/images/chademo.png"),
                require("../../assets/images/css_sae.png"),
                require("../../assets/images/j-1772.png"),
                require("../../assets/images/supercharger.png"),
                require("../../assets/images/type2.png"),
                require("../../assets/images/wall.png")]
            let FinImag = []    
            
            for(j=0 ; j<imgPik.length;j++){

                //console.log(imgPik[j].connector)
                let z = DialogCharge.indexOf(imgPik[j].connector)
            //    console.log(z)
                FinImag.push(img[z])
            }

            console.log(FinImag)
            cooors.push( this.renderAnnotations(long,lat,i.toString(),col,title,FinImag,imgUri,email,contact,rating))   
        }

        this.setState({cords:cooors , enterRout:true})

        console.log("making true")

    })
    .catch(e=>{
       console.log("some errp ",e);
    } )
  }


  render() {

    return (

      <View style={styles.container}>

        {console.warn("start entering")}

        <View> 
        <View style={{flexDirection:"row"}}>
                <Button style={{backgroundColor:"white",paddingLeft:25,paddingRight:23}}
                        onPress={() => {this.props.navigation.navigate('nearmeMap')}}>
                    <Text style={{fontSize:21}}>Map </Text>
                    <FontAwesome5 name={"map-marked-alt"} brand style={{paddingLeft:5 , fontSize: 20, color:'black'}} />        
                </Button>

                <Button style={{marginLeft:1,backgroundColor:"white",paddingLeft:11,paddingRight:14}} 
                        >
                    <Text style={{fontSize:21}} > {"charge:20%"} </Text>
                    <FontAwesome5 name={"battery-three-quarters"} brand style={{transform: [{ rotate: '270deg'}],marginTop:5,paddingLeft:5 , fontSize: 20, color:'black'}} />        
                </Button>

                <Button style={{marginLeft:1,backgroundColor:"white",paddingLeft:23,paddingRight:27}} 
                        onPress={() => {this.props.navigation.navigate('nearmelist')}}>
                    <Text style={{fontSize:21}} > List </Text>
                    <FontAwesome5 name={"list-ul"} brand style={{paddingLeft:5 , fontSize: 20, color:'black'}} />        
                </Button>
        </View>


        {console.log("entering maps")}

        <Mapbox.MapView styleURL={Mapbox.StyleURL.Street}
            zoomLevel={12}
            centerCoordinate={[72.872334,19.132236]}
            style={[styles.container,{zIndex:20}]}
            >

        {/* {this.renderAnno()}

        {console.log("middle maps")}

        {this.state.cords} */}
        
        </Mapbox.MapView> 

        <View style={{backgroundColor:"transparent",position:'absolute',top:"50%",Left:"50%",marginTop:230,marginLeft:340,zIndex:10}}>
            <Button rounded style={{marginLeft:1,backgroundColor:"white",    width: 60, height: 60,borderRadius: 60}} 
                            onPress={() => {this.props.navigation.navigate('navigateRoute')}}>
                        <FontAwesome5 name={"list-ul"} brand style={{paddingLeft:18,fontSize: 26, color:'black'}} />        
                </Button>
        </View>

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
                    <Text style={{fontSize:25}}>{this.state.DiagRout.title}</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent: "space-between",alignItems: "center"}}>
                    <Text style={{marginLeft:10,fontSize:15}} >{this.state.DiagRout.mail}</Text>
                    <Text style={{marginRight:10,fontSize:15}}>{this.state.DiagRout.contact}</Text> 
                </View>
                
                <Image style={{width:"100%",height:200}} source={{uri:this.state.DiagRout.imgUri}}></Image>

                <Rating
                    imageSize={30}
                    readonly
                    startingValue={this.state.DiagRout.rating}
                    style={{marginTop:3}}
                    />

                </View>

                <View >
                <FlatList 
                    numColumns={3}
                    data = {this.state.DiagRout.finLis}
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

            <Dialog

                width={0.85}
                visible={this.state.BatDialog}
                rounded
                actionsBordered>


                <View style={{alignItems: "center"}}>
                    <Text style={{fontSize:25}}>Enter Your Charge Of Battery</Text>
                </View>

                <Item rounded style={{marginLeft:25, marginRight:25 , marginTop:25}}>
                    <Input placeholder='Enter the battery level in Percentage(%)' placeholderTextColor="black" style={{paddingLeft:25 , color:'#ffffff'}} />
                </Item>

                <View style={{alignItems: "center", marginTop:15}}>
                    <Button style={{paddingLeft:25,paddingRight:25,alignSelf:"center"}} ><Text>Submit</Text></Button> 
                </View>
  
            </Dialog>

        
        
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
    width: bord,
    height: bord,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 153, 153, 0.4)',
    borderRadius: bord,
  },
  annotationFill: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#f20000',
    transform: [{ scale: 0.6 }],
  }
});

export default NearMeList;
