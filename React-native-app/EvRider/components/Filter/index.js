import React, { Component } from 'react';
import {CheckBox,Slider,StyleSheet} from 'react-native';
import { Container, Header, Content, ListItem, Text, Body, Button } from 'native-base';
import { filter } from '../../utils/filter'

export default class App extends Component {
constructor(props){
  super(props);
  this.state={
    Home:false,
    Public:false,
    Turbo:false,
    Hotel:false,
    Mall:false,
    chademo:false,
    css_sae:false,
    j_1772:false,
    supercharger:false,
    type2:false,
    wall:false,
    women:false,
    available:false,
    price: 0,
  };

  console.log(this.props.navigation.getParam("data", "stuff failed transfer"))

}
getVal(val){
  console.warn(val);
  }   
checkBox()
{
  this.setState({
     Home:!this.state.Home,
     
  })
}
checkBox1()
{
  this.setState({
     Public:!this.state.Public,
     
  })
}
checkBox2()
{
  this.setState({
     Turbo:!this.state.Turbo,
     
  })
}
checkBox3()
{
  this.setState({
     Hotel:!this.state.Hotel,
     
  })
}
checkBox4()
{
  this.setState({
     Mall:!this.state.Mall,
     
  })
}
checkBox5()
{
  this.setState({
     chademo:!this.state.chademo,
     
  })
}
checkBox6()
{
  this.setState({
     css_sae:!this.state.css_sae,
     
  })
}
checkBox7()
{
  this.setState({
     j_1772:!this.state.j_1772,
     
  })
}
checkBox8()
{
  this.setState({
     supercharger:!this.state.supercharger,
     
  })
}
checkBox9()
{
  this.setState({
     type2:!this.state.type2,
     
  })
}
checkBox10()
{
  this.setState({
     wall:!this.state.wall,
     
  })
}
checkBox11()
{
  this.setState({
     women:!this.state.women,
     
  })
}
checkBox12()
{
  this.setState({
     available : !this.state.available
     
  })
}
onpress = () =>
{
  
  var type = [  ], connector = [], options = [] , price , women, available;

  var { Home, Public, Turbo, Hotel, Mall } = this.state;
  var { chademo, css_sae, j_1772, supercharger, type2, wall  } = this.state;
  var { women, available, price } = this.state;
  var typeInput = { Home, Public, Turbo, Hotel, Mall }, typeStatus = false;
  var conInput = { chademo, css_sae, j_1772, supercharger, type2, wall  }, conStatus = false;

  for ( var key in typeInput ){
    if ( typeInput[key] ){
      type.push( key )
      typeStatus = true;
    }
  }

  if ( typeStatus ){
    options.push( 'type' )
  }

  if ( women ){
    options.push( 'women' )
  }

  if ( available ){
    options.push( 'available' )
  }

  for ( var key in conInput ){
    if ( conInput[key] ){
      connector.push( key )
      conStatus = true;
    }
  }
  
  if ( conStatus ){
    options.push( 'connector' )
  }

  var optTypes = {
    type,connector,price
  }
  // console.log( optTypes, options )

  var res = filter(options, optTypes )
  console.log(res)
  // alert(filterList)

  // var funUpdateStation = this.props.navigation.getParam('updateStations')

  // funUpdateStation(res)

  this.props.navigation.navigate('nearmeMap')
}


  render() {
 return (
  <Container>

  <Content>
  <Text style={{fontSize:25,fontWeight:'500',padding:8}}>Type :</Text>
    <ListItem>
      <CheckBox value={this.state.check} onChange={()=>this.checkBox()} />
      <Body>
        <Text>Home</Text>
      </Body>
    </ListItem>
    <ListItem>
      <CheckBox value={this.state.check1} onChange={()=>this.checkBox1()} />
      <Body>
        <Text>Public</Text>
      </Body>
    </ListItem>
    <ListItem>
      <CheckBox value={this.state.check2} onChange={()=>this.checkBox2()} />
      <Body>
        <Text>Turbo</Text>
      </Body>
    </ListItem>
    <ListItem>
      <CheckBox value={this.state.check3} onChange={()=>this.checkBox3()} />
      <Body>
        <Text>Hotel</Text>
      </Body>
    </ListItem>
    <ListItem>
      <CheckBox value={this.state.check4} onChange={()=>this.checkBox4()} />
      <Body>
        <Text>Mall</Text>
      </Body>
    </ListItem>

    
    <Text style={{fontSize:25,fontWeight:'500',padding:8}}>Connector :</Text>
    <ListItem>
      <CheckBox value={this.state.check5} onChange={()=>this.checkBox5()} />
      <Body>
        <Text>CHA DEMO</Text>
      </Body>
    </ListItem>
    <ListItem>
      <CheckBox value={this.state.check6} onChange={()=>this.checkBox6()} />
      <Body>
        <Text>CSS_SAE</Text>
      </Body>
    </ListItem>
    <ListItem>
      <CheckBox value={this.state.check7} onChange={()=>this.checkBox7()} />
      <Body>
        <Text>J_1772</Text>
      </Body>
    </ListItem>
    <ListItem>
      <CheckBox value={this.state.check8} onChange={()=>this.checkBox8()} />
      <Body>
        <Text>Supercharger</Text>
      </Body>
    </ListItem>
    <ListItem>
      <CheckBox value={this.state.check9} onChange={()=>this.checkBox9()} />
      <Body>
        <Text>Type2</Text>
      </Body>
    </ListItem>
    <ListItem>
      <CheckBox value={this.state.check10} onChange={()=>this.checkBox10()} />
      <Body>
        <Text>Wall</Text>
      </Body>
    </ListItem>

    <Text style={{fontSize:25,fontWeight:'500',padding:8}}>Price :</Text> 
 
    <Slider style={{ width: 400}} step={1}
         minimumValue={0}
         maximumValue={500}
       
         value={this.state.price}
         onValueChange={val => this.setState({ price: val })}
         onSlidingComplete={ val => this.getVal(val)} />
    <Text style={styles.welcome}>
          {this.state.price}
        </Text>  
    <ListItem>
      <CheckBox value={this.state.check11} onChange={()=>this.checkBox11()} />
      <Body>
        <Text>Safe for Women</Text>
      </Body>
    </ListItem>
    
    <Text style={{fontSize:25,fontWeight:'500',padding:8}}>Status :</Text>
    <ListItem>
      <CheckBox value={this.state.check12} onChange={()=>this.checkBox12()} />
      <Body>
        <Text>Available</Text>
      </Body>
    </ListItem> 
    <Text>~{"\n"}</Text>
    <Button bordered success style={{alignSelf:'center'}} onPress={this.onpress}>
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
