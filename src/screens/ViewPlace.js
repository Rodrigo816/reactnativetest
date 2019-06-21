import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Button, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {deletePlace} from '../store/actions/index'
import MapView from "react-native-maps";
//import Icon from 'react-native-vector-icons/Ionicons';

class ViewPlace extends Component {
  render(){
    const selectedPlace = this.props.navigation.getParam('selectedPlace', null);
    console.log ("estado", this.props.location);
    return(
      <View style={styles.container}>  
        <MapView initialRegion={{
          ...this.props.selectedPlace.location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          <MapView.Marker coordinate={this.props.selectedPlace.location}/>
        </MapView> 
        <Image
          style={{width: 50, height: 50 }}
          resizeMode='stretch'
          source={{uri: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'}}
        />
        <Text>{selectedPlace.value}</Text>
        <Button title="Delete" color="red" onPress={() => {
          this.props.onDeletePlace(selectedPlace.key)
          this.props.navigation.pop();
        }} />
        <Button title="Retroceder" onPress={() => this.props.navigation.goBack()}/>
      </View>  
    )
  }
}

const styles = StyleSheet.create({
  container:{
    margin:22
  },
  deleteButton: {
    alignItems:'center',
  },
  image: {
    marginRight:10,
    height: 30,
    width:"30%"
  },
})

const mapDispatchToProps = dispatch =>{
  return {
    onDeletePlace:(key) => dispatch(deletePlace(key))
  };
};
export default connect (null, mapDispatchToProps)(ViewPlace); 