import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, Button } from 'native-base';


export default class AccordionHeaderContentStyleExample extends Component {
  render() {
    return (
      <View>
        <Collapse style={{ borderBottomWidth: 1, borderTopWidth: 1 }}>
          <CollapseHeader style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#E6E6E6' }}>
            <View style={{ width: '25%', alignItems: 'center' }}>
              <Thumbnail source={{ uri: 'https://www.biography.com/.image/t_share/MTQ3NjYxMzk4NjkwNzY4NDkz/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg' }} />
            </View>
            <View style={{ width: '60%' }}>
              <Text>Name : Mohammed Ali Kley</Text>

            </View>
          </CollapseHeader>
          <CollapseBody style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#EDEDED' }}>
            <Collapse style={{ flexDirection: 'row' }}>
              <CollapseHeader>
                <View style={{ width: 50, height: 50 }}>
                  <Thumbnail source={{ uri: 'https://cdn4.iconfinder.com/data/icons/rcons-phone/16/handset_round-2-512.png' }} />
                </View>

              </CollapseHeader>
              <CollapseBody style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                <Text>+1 310 346 0018</Text>
              </CollapseBody>
            </Collapse>
            <Collapse style={{ flexDirection: 'row' }}>
              <CollapseHeader>
                <Thumbnail source={{ uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png' }} />
              </CollapseHeader>
              <CollapseBody style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                <Text>sample@sample.ma</Text>
              </CollapseBody>
            </Collapse>
          </CollapseBody>
        </Collapse>


        <Collapse style={{ borderBottomWidth: 1, borderTopWidth: 1 }}>
          <CollapseHeader style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#E6E6E6' }}>

            <View style={{ width: '60%', height: '100%' }}>
              <Text style={{ alignItems: 'center' }}>Car Details</Text>

            </View>
          </CollapseHeader>
          <CollapseBody style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#EDEDED' }}>
            <Collapse style={{ flexDirection: 'row' }}>
              <CollapseHeader>
                <View style={{ width: 50, height: 50 }}>
                  <Text>Company</Text>
                </View>

              </CollapseHeader>
              <CollapseBody style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                <Text>+1 310 346 0018</Text>
              </CollapseBody>
            </Collapse>
            <Collapse style={{ flexDirection: 'row' }}>
              <CollapseHeader>
                <View style={{ width: 50, height: 50 }}>
                  <Text>Model</Text>
                </View>
              </CollapseHeader>
              <CollapseBody style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                <Text>sample@sample.ma</Text>
              </CollapseBody>
            </Collapse>
            <Collapse style={{ flexDirection: 'row' }}>
              <CollapseHeader>
                <View style={{ width: 50, height: 50 }}>
                  <Text>Add Car</Text>
                </View>
              </CollapseHeader>
            </Collapse>
            <CollapseBody style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>



            </CollapseBody>
            


          <Collapse style={{ borderBottomWidth: 1, borderTopWidth: 1 }}>
            <CollapseHeader style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#E6E6E6' }}>

              <View style={{ width: '60%', height: '100%' }}>
                <Text style={{ alignItems: 'center' }}>Booked Slots</Text>

              </View>
            </CollapseHeader>
            <CollapseBody style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#EDEDED' }}>
              <View>

              </View>
            </CollapseBody>
          </Collapse>
      
    </View>
        );
      }
}