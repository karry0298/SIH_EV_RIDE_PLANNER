import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import {Button,List,Fab,Icon} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { Rating} from 'react-native-elements';
import Dialog, { DialogTitle,DialogContent,DialogFooter,DialogButton,SlideAnimation} from 'react-native-popup-dialog';

Mapbox.setAccessToken('sk.eyJ1Ijoia2FycnkwMjk4IiwiYSI6ImNqcXVtcXJ3aTBrZHE0Mm55MjE1bm9xM28ifQ.B3V1a-Yd0Q1PS2GDjZ-_bg');

//"charge":["chademo","css_sae","j-1772","supercharger","type2","wall"]

var bord = 150

class NearMeMap extends Component {
  constructor(props) {
    super(props);

    

    this.state = {
        latitude: 19.13566162451865,
        longitude: 72.86615863993508,
        Dialog:false,
        DialogTitle:"abcTitle",
        dialogC:[2,3,4],
        DialogCharge:["chademo","css_sae","j-1772","supercharger","type2","wall"],
        DialogRating: 4,
        DialogMail:"abc@abc",
        DialogUri:'https://dqbasmyouzti2.cloudfront.net/assets/content/cache/made/content/images/articles/EV_ChargingII_XL_721_420_80_s_c1.jpg',
        DialogContact: 999233233,
        myStateFinale:[],
        prevLatLng: {},
        coordinate:{latitude: 19.26196225,longitude: 72.86661427},
    };
  }

  //charging-station
  //map-marker-alt  
  renderAnnotations (a,b,k,colr,tite,imgPik,imgUri,email,contact,rating) {
    //console.warn(imgPik)
      return (
        <Mapbox.PointAnnotation
          key={k}
          id={k}
    
          coordinate={[a,b]}>
                
              {/* <FontAwesome5 name={"charging-station"} brand style={{paddingLeft:15 , fontSize: 25, color:colr}}  

              /> */}
              <View style={{
    width: 30,
    height: 20,
    backgroundColor: 'white'
}} ><Text>Hello</Text></View>
              {/* onPress={() => { this.setState({Dialog: true , DialogTitle:tite , dialogC:imgPik ,DialogUri:imgUri ,DialogMail:email ,DialogContact:contact,DialogRating:rating });
              }} */}
          <Mapbox.Callout title={tite} />
        </Mapbox.PointAnnotation>
      )
   
  }



  componentDidMount(){

  //  console.log("mount entered")

    axios.get("http://192.168.2.13:2454/api/getAllStation")
    .then(s=>{

        const rout = s.data.data;
    //    console.log("dsvsdvdfvsvdfsfv",s.data)
        var cooors = []

        this.setState({myStateFinale:rout})

    })
    .catch(e=>{
       console.log("some errp ",e);
    } )


  }


  renderAnno () {
    //console.warn(imgPik)
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
        let img = [require("../../assets/images/chademo.png"),
            require("../../assets/images/css_sae.png"),
            require("../../assets/images/j-1772.png"),
            require("../../assets/images/supercharger.png"),
            require("../../assets/images/type2.png"),
            require("../../assets/images/wall.png")]
        let FinImag = []

      //  console.warn(img)

        for(j=0 ; j<imgPik.length;j++){

            //console.log(imgPik[j].connector)
            let z = DialogCharge.indexOf(imgPik[j].connector)
        //    console.log(z)
            FinImag.push(img[z])
        }

     //   console.warn(FinImag)

        cords.push( this.renderAnnotations(long,lat,i.toString(),col,title,FinImag,imgUri,email,contact,rating))                            
    }


    return (

       // navigate('nearmerout',item)

      <View style={styles.container}>
    
        <View style={{flexDirection:"row"}}>
                <Button style={{backgroundColor:"white",paddingLeft:25,paddingRight:23}}
                        onPress={() => {this.props.navigation.navigate('nearmeMap')}}>
                    <Text style={{fontSize:21}}>Map </Text>
                    <FontAwesome5 name={"map-marked-alt"} brand style={{paddingLeft:5 , fontSize: 20, color:'black'}} />        
                </Button>

                <Button style={{marginLeft:1,backgroundColor:"white",paddingLeft:11,paddingRight:14}} >
                    <Text style={{fontSize:21}} > {"charge:20%"} </Text>
                    <FontAwesome5 name={"battery-three-quarters"} brand style={{transform: [{ rotate: '270deg'}],marginTop:5,paddingLeft:5 , fontSize: 20, color:'black'}} />        
                </Button>

                <Button style={{marginLeft:1,backgroundColor:"white",paddingLeft:23,paddingRight:27}} 
                        onPress={() => {this.props.navigation.navigate('nearmelist',{abc:this.state.myStateFinale})}}>
                    <Text style={{fontSize:21}} > List </Text>
                    <FontAwesome5 name={"list-ul"} brand style={{paddingLeft:5 , fontSize: 20, color:'black'}} />        
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
                    startingValue={this.state.DialogRating}
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

export default NearMeMap;
