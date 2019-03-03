import React, { Component } from 'react';
import {CheckBox,Slider,StyleSheet} from 'react-native';
import { Container, Header, Content, ListItem, Text, Body, Button } from 'native-base';
import { sort } from '../../utils/sort'

export default class Sort extends Component {
    constructor(props){
        super(props);
        this.state={
          Price:false,
          UserRating:false,
          WomenFriendly:false,
          }
        
        this.onpress = this.onpress.bind(this);
    }

    onpress() {

        var data = this.props.navigation.state.params.data , res = [];
        if ( this.state.Price ){

            res = sort( data , 'price' )

        }else if( this.state.UserRating ){

            console.log("rating sort")
            res = sort( data , 'rating' )

        }else{

            console.log("women rating")

            res = sort( data , 'socialRating.womenSafety' )

        }

        var des = this.props.navigation.state.params.origin;
        this.props.navigation.state.params.updateFunc(res)

        this.props.navigation.navigate(des)

    }

    checkBox(){
        this.setState( { Price : ! this.state.Price } )
    }

    checkBox1(){
        this.setState( { UserRating : ! this.state.UserRating } )
    }

    checkBox2(){
        this.setState( { WomenFriendly : ! this.state.WomenFriendly } )
    }



    render() {
        return (
         <Container>
       
         <Content>
         <Text style={{fontSize:25,fontWeight:'500',padding:8}}>Type :</Text>
           <ListItem>
             <CheckBox value={this.state.Price} onChange={()=>this.checkBox()} />
             <Body>
               <Text>Price</Text>
             </Body>
           </ListItem>
           
           <ListItem>
             <CheckBox value={this.state.UserRating} onChange={()=>this.checkBox1()} />
             <Body>
               <Text>User Rating</Text>
             </Body>
           </ListItem>
           
           <ListItem>
             <CheckBox value={this.state.WomenFriendly} onChange={()=>this.checkBox2()} />
             <Body>
               <Text>Women Friendly</Text>
             </Body>
           </ListItem>

           <Button bordered success style={{alignSelf:'center'}} onPress={ ()=> this.onpress()}>
                   <Text>SUBMIT</Text>
           </Button>
         </Content>
       </Container>
        )
          
         }
       }
       const styles = StyleSheet.create({
         container: {
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: '#F5FCFF',
         },
         welcome: {
           fontSize: 20,
           textAlign:'center',
           margin: 10,
           
         },
       });
       