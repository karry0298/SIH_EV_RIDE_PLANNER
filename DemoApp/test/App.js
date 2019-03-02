   /**
    * Sample React Native App
    * https://github.com/facebook/react-native
    *
    * @format
    * @flow
    * @lint-ignore-every XPLATJSCOPYRIGHT1
    */

   import React, {
     Component
   } from 'react';
   import {
     Platform,
     StyleSheet,
     Text,
     View
   } from 'react-native';

   const instructions = Platform.select({
     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
     android: 'Double tap R on your keyboard to reload,\n' +
       'Shake or press menu button for dev menu',
   });

   export default class App extends Component {

     constructor() {
       super();
       this.state = {
         check: false,
         check1: false,
         check2: false,
         check3: false,
         check4: false,
         check5: false,
         check6: false,
         check7: false,
         check8: false,
         check9: false,
         check10: false,
         check11: false,
         check12: false,
         price: 0,
       }

     }

     getVal(val) {
       console.warn(val);
     }
     checkBox() {
       this.setState({
         check: !this.state.check,

       })
     }
     checkBox1() {
       this.setState({
         check1: !this.state.check1,

       })
     }
     checkBox2() {
       this.setState({
         check2: !this.state.check2,

       })
     }
     checkBox3() {
       this.setState({
         check3: !this.state.check3,

       })
     }
     checkBox4() {
       this.setState({
         check4: !this.state.check4,

       })
     }
     checkBox5() {
       this.setState({
         check5: !this.state.check5,

       })
     }
     checkBox6() {
       this.setState({
         check6: !this.state.check6,

       })
     }
     checkBox7() {
       this.setState({
         check7: !this.state.check7,

       })
     }
     checkBox8() {
       this.setState({
         check8: !this.state.check8,

       })
     }
     checkBox9() {
       this.setState({
         check9: !this.state.check9,

       })
     }
     checkBox10() {
       this.setState({
         check10: !this.state.check10,

       })
     }
     checkBox11() {
       this.setState({
         check11: !this.state.check11,

       })
     }
     checkBox12() {
       this.setState({
         check12: !this.state.check12

       })
     }
     onpress = () => {

       var filterList = [this.state.check, this.state.check1, this.state.check2, this.state.check3,
         this.state.check4, this.state.check5, this.state.check6, this.state.check7, this.state.check8,
         this.state.check9, this.state.check10, this.state.check11, this.state.check12
       ]
       alert(filterList)
     }


     render() {
       return ( <
         View style = {
           styles.container
         } >
         <
         Text style = {
           styles.welcome
         } > Welcome to React Native!cd.. / < /Text> <
         Text style = {
           styles.instructions
         } > To get started, edit App.js < /Text> <
         Text style = {
           styles.instructions
         } > {
           instructions
         } < /Text> <
         /View>
       );
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
       textAlign: 'center',
       margin: 10,
     },
     instructions: {
       textAlign: 'center',
       color: '#333333',
       marginBottom: 5,
     },
   });