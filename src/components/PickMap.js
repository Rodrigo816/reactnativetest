import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Dimensions} from 'react-native';
import MapView from "react-native-maps";

class PickMap extends Component {
  state = {
    focusedLocation: {
      latitude: 38.732633,
      longitude: -27.068202,
      latitudeDelta: 0.0122,
      longitudeDelta:Dimensions.get("window").width / Dimensions.get("window").height *  0.0122
    }
  };

  
  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          style={}>
        </MapView>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={() => alert("mapa")}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  map: {
    height:150,
    width: '80%'
  },
  button: {
    marginBottom:10,
    marginTop:10
  }
});

export default PickMap;