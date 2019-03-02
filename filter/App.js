import React, { Component } from 'react';
import {CheckBox,Slider,StyleSheet} from 'react-native';
import { Container, Header, Content, ListItem, Text, Body, Button } from 'native-base';
//import RangeSlider from 'react-native-range-slider';

export default class App extends Component {
constructor(){
  super();
  this.state={
    check:false,
    check1:false,
    check2:false,
    check3:false,
    check4:false,
    check5:false,
    check6:false,
    check7:false,
    check8:false,
    check9:false,
    check10:false,
    check11:false,
    check12:false,
    price: 0,
  }

}
getVal(val){
  console.warn(val);
  }   
checkBox()
{
  this.setState({
     check:!this.state.check,
     
  })
}
checkBox1()
{
  this.setState({
     check1:!this.state.check1,
     
  })
}
checkBox2()
{
  this.setState({
     check2:!this.state.check2,
     
  })
}
checkBox3()
{
  this.setState({
     check3:!this.state.check3,
     
  })
}
checkBox4()
{
  this.setState({
     check4:!this.state.check4,
     
  })
}
checkBox5()
{
  this.setState({
     check5:!this.state.check5,
     
  })
}
checkBox6()
{
  this.setState({
     check6:!this.state.check6,
     
  })
}
checkBox7()
{
  this.setState({
     check7:!this.state.check7,
     
  })
}
checkBox8()
{
  this.setState({
     check8:!this.state.check8,
     
  })
}
checkBox9()
{
  this.setState({
     check9:!this.state.check9,
     
  })
}
checkBox10()
{
  this.setState({
     check10:!this.state.check10,
     
  })
}
checkBox11()
{
  this.setState({
     check11:!this.state.check11,
     
  })
}
checkBox12()
{
  this.setState({
     check12:!this.state.check12
     
  })
}
onpress = () =>
{
  
  var filterList=[this.state.check,this.state.check1,this.state.check2,this.state.check3,
  this.state.check4,this.state.check5,this.state.check6,this.state.check7,this.state.check8,
  this.state.check9,this.state.check10,this.state.check11,this.state.check12]
  alert(filterList)
}


  render() {
 return (
  <Container>
   
  <Header style={{backgroundColor:'white'}}>
    <Text style={{fontSize:30,fontWeight:'500',padding:8}}>Filter</Text>
  </Header>
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
