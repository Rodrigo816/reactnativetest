import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import UserInput from '../components/UserInput';
import {connect} from 'react-redux';
import {addPlace} from '../store/actions/index'

class SharePlace extends Component {
  placeAddedHandler = (name) => {
    this.props.onAddPlaceComBatatas(name);
  }
  render(){
    return (
      <View>
        <UserInput onPlaceAdded={this.placeAddedHandler}/>

      </View>
    );
  }
}
const styles = StyleSheet.create({

});
const mapDispatchToProps = dispatch => {
  return{
    onAddPlaceComBatatas: (name) => dispatch(addPlace(name))
  }
}
export default connect(null, mapDispatchToProps)(SharePlace);