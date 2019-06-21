import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Dimensions} from 'react-native';
import MapView from "react-native-maps";

class PickMap extends Component {
  state = {
    focusedLocation: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    locationChosen: false
  };

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChosen: true
      }
    })
    this.props.onLocationPick({
      latitude: coords.latitude,
      longitude:coords.longitude
    })
  }

  locateHandler = () => {
    navigator.geolocation.getCurrentPosition(pos =>{
      const coordsEvent = {
        nativeEvent:{
          coordinate:{
            latitude: pos.coords.latitude,
            longitude:pos.coords.longitude,
          }
        }
      };
      this.pickLocationHandler(coordsEvent);
    },
    error => {
      console.log(error);
      alert("faile get current location");
    })
  }
  render() {
    let marker = null;
    if (this.state.locationChosen){
      marker = <MapView.Marker coordinate={this.state.focusedLocation}/>
    }

    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          style={styles.map}
          onPress={this.pickLocationHandler}
          ref={ref => this.map =ref }
        >
          {marker}
        </MapView>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={this.locateHandler}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  map: {
    height: 200,
    width: (Dimensions.get('window').width - 20),
  },
  button: {
    marginBottom:10,
    marginTop:10
  }
});

export default PickMap;