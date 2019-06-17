import React, {Component} from 'react';
import {StyleSheet, View, Image, Button} from 'react-native';


class PickImage extends Component {
  state = {
    placeName: ""
  };



  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image style={styles.previewImage} source={{uri:'https://facebook.github.io/react/logo-og.png'}}/>
        </View>
        <View style={styles.button}>
          <Button title="Pick Imddddddddddage" onPress={() => alert("pick AA")}/>
        </View>
      </View>
    ) 
  }
}
const styles = StyleSheet.create({
  container:{
    width:'100%',
    alignItems:'center'
  },
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
  },
  previewImage: {
   width:'100%',
   height:'100%'
 }
});

export default PickImage;