import React, {Component} from 'react';
import {StyleSheet,Button, View, ScrollView} from 'react-native';
import UserInput from '../components/UserInput';
import PickImage from '../components/PickImage';
import PickMap from '../components/PickMap';
import {connect} from 'react-redux';
import {addPlace} from '../store/actions/index';
import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";


class SharePlace extends Component {
  state = {
    placeName: "",
    location: {
      value:null,
      valid: false
    },
    image:{
      uri: null,
      valid: false
    }
  };
  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };
  locationPickedHandler = location => {
    this.setState(prev => {
      return {
        ...this.state,
        location: {
          value: location,
          valid: true
        }
      }
    })
  }
  pickImageHangler = image => {
    this.setState(prev => {
      return {
        ...this.state,
        image: {
          uri: image,
          valid: true
        }
      }
    })
  }
  placeAddedHandler = () => {
    if (this.state.placeName.trim() !== ""){
      this.props.onAddPlaceComBatatas(this.state.placeName, this.state.location.value, this.state.image.uri);
    }
  }
  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a plce with us!</HeadingText>
          </MainText>
          <PickImage onImagePick={this.pickImageHangler}/>
          <PickMap onLocationPick={this.locationPickedHandler}/>
          <UserInput 
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <View style={styles.button}>
            <Button title="share the place!" onPress= {this.placeAddedHandler}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
 container : {
   flex:1,
   alignItems: "center",
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
const mapDispatchToProps = dispatch => {
  return{
    onAddPlaceComBatatas: (name, location, image) => dispatch(addPlace(name, location,image))
  }
}
export default connect(null, mapDispatchToProps)(SharePlace);