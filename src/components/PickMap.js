import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class PickMap extends Component {
  state = {
    placeName: ""
  };



  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>GoogleMap</Text>
        </View>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={() => alert("mapa")}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    height:150,
    width: '80%'
  },
  button: {
    marginBottom:10,
    marginTop:10
  }
});

export default PickMap;