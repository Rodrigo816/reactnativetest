import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import ListItem from '../components/ListItem';
import {connect} from 'react-redux';

class FindPlace extends Component {
  itemSelectedHandler = (key) => {
    //alert ("oi");
    const selPlace = this.props.places.find(place => {
      return place.key === key
    })
    this.props.navigation.navigate('ViewPlace',{
      selectedPlace: selPlace,
    })
  }
  render(){
    return (
      <View>
        <Text>O caralho mais velho que a tia julia</Text>
        <ListItem places={this.props.places} onItemSeleted={this.itemSelectedHandler} />

      </View>
    );
  }
}
const styles = StyleSheet.create({

});
const mapStateToProps = state => {
  return {
    places:state.places.places
  }
}
export default connect(mapStateToProps)(FindPlace);