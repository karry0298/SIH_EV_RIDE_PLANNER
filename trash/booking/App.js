import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import t from 'tcomb-form-native';
import { Container, Content, Footer, Button } from 'native-base'
import moment from 'moment';
var now = moment().format();


var work = t.enums({
  Fiat500e : 'Fiat 500e',
  FordFocusElectric : 'Ford Focus Electric',
  KiaSoulEV : 'Kia Soul EV',
  TeslaModelS: 'Tesla Model S',

})

var res = t.enums({
  chademo : 'chademo',
  cssSae : 'css sae',
  j_1772 : 'j-1772',
  teslaSupercharger : 'tesla supercharger',
  type2 : 'type2',
  nema520 : 'nema 520'
})

var smk = t.enums({
    formerly : 'formerly',
    No : 'No',
    Yes : 'Yes'

})
let myFormatFunction = (format,date) =>{
  return moment(date).format(format);
}
let myFormatFunction1 = (format,time) =>{
  return moment(time).format(format);
}
 var formOption = {
  fields: {
    arrivalDate: {
     mode: 'date' ,
     config:{
      format:(date) => myFormatFunction("DD MMM YYYY",date)
  }
     },
    arrivalTime:{
      
      mode:'time',
      config:{
        format:(time) => myFormatFunction1("HH mm",time)
    }
  }
}
};
const fund = t.struct({
    // stationName: t.String,
    chargingDuration: t.Number,
     carName: work,
   slotType : res,
   arrivalDate: t.Date,
   arrivalTime:t.Date
  
  });



const Form = t.form.Form;

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() , imageData : '' , value : ''  };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      
    handleChange(value) {
        this.setState({value});
    }

    handleSubmit(){
        const value = this._form.getValue();
        // console.log(value, "home form data")
        // this.props.navigation.navigate( 'Upload' , { demoData : value } )
        if (value) { // if validation fails, value will be null
          console.log(value); // value here is an instance of Person
        }
      
        
    }


  render() {
    return (

        <Container>

            <Content>

            <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize: 30,color:'black',textAlign:'center',padding:10}}>Slot Booking Form</Text>
        <Text style={{fontWeight:'bold', fontSize: 20,color:'black',textAlign:'center',padding:10}}>Station Name</Text>
            <Form 
            type={ fund }
            value={ this.state.value }
            onChange={ this.handleChange }
            options={formOption}
            ref={c => this._form = c} 
            />
 </View>
 </Content>

            

            <Button full info
            onPress={ this.handleSubmit }
            >
              <Text style={ styles.text } > Proceed </Text>
            </Button>

           

        </Container>

    );
  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
      },
    text : {
        fontSize : 25,
        
       
        
    }
});