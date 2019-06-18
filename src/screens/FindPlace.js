import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View,Text, Button, Animated} from 'react-native';
import ListItem from '../components/ListItem';
import {connect} from 'react-redux';

class FindPlace extends Component {
  
  state = {
    placesLoaded: false,
    removeAnim: new Animated.Value(1),
    placesAnim: new Animated.Value(0)
  }
  
  itemSelectedHandler = (key) => {
    //alert ("oi");
    const selPlace = this.props.places.find(place => {
      return place.key === key
    })
    this.props.navigation.navigate('ViewPlace',{
      selectedPlace: selPlace,
    })
  }

  placesLoadedHandler = () => {
    Animated.timing(this.state.placesAnim,{
      toValue:1,
      duration:500,
      useNativeDriver: true
    }).start();
  }

  placesSearchHanlder= () => {
    Animated.timing(this.state.removeAnim, {
      toValue:0,
      duration:500,
      useNativeDriver:true
    }).start(()=>{
      this.setState({
        placesLoaded: true
      })
      this.placesLoadedHandler();
    });
  }

  render(){
    let content = (
      <Animated.View style={{
        opacity:this.state.removeAnim,
        transform: [
          {
            scale:this.state.removeAnim.interpolate({
              inputRange: [0,1],
              outputRange: [12,1]
            })
          }
        ]
      }}>
        <TouchableOpacity onPress={this.placesSearchHanlder}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find Places</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
    if (this.state.placesLoaded){
      content = (
        <Animated.View style={{
          opacity:this.state.placesAnim,
        }}>
          <ListItem places={this.props.places} onItemSeleted={this.itemSelectedHandler} />
        </Animated.View>  
      )
    }
    console.log("AA",this.state.placesLoaded)
    return (
      <View style={this.state.placesLoaded ? null: styles.buttonContainer}>
        {content}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  listContainer: {

  },
  searchButton: {
    borderColor: "orange",
    borderWidth:3,
    borderRadius:50,
    padding: 20
  },
  searchButtonText:{
    color: "orange",
    fontWeight: "bold",
    fontSize:26
  }
});
const mapStateToProps = state => {
  return {
    places:state.places.places
  }
}
export default connect(mapStateToProps)(FindPlace);