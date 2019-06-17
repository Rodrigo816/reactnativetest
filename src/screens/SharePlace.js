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
    placeName: ""
  };
  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };
  placeAddedHandler = () => {
    if (this.state.placeName.trim() !== ""){
      this.props.onAddPlaceComBatatas(this.state.placeName);
    }
  }
  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a plce with us!</HeadingText>
          </MainText>
          <PickImage/>
          <PickMap/>
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
    onAddPlaceComBatatas: (name) => dispatch(addPlace(name))
  }
}
export default connect(null, mapDispatchToProps)(SharePlace);