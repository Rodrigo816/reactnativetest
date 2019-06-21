import React, {Component} from 'react';
import {StyleSheet, View, Image, Button} from 'react-native';
import ImagePicker from "react-native-image-picker"


class PickImage extends Component {
  state = {
    pickedImage: null
  };


  pickImageHandler = () => {
    ImagePicker.showImagePicker({
      title: "Seleciona uma imagem"
    }, response => {
      if(response.didCancel){
        console.log("user cancel");
      } else if (response.error){
        console.log("erro erro");
      } else {
        this.setState({
          pickedImage: {
            uri:response.uri
          }
        });
        this.props.onImagePick(response.uri);
      }
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image style={styles.previewImage} source={this.state.pickedImage}/>
        </View>
        <View style={styles.button}>
          <Button title="Pick Imddddddddddage" onPress={this.pickImageHandler}/>
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