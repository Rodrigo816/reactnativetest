import React from 'react';
import {StyleSheet, View,Text, FlatList, TouchableOpacity, Image} from 'react-native';

const listItem = (props) => {
  /*const placesOutput = props.places.map((place, key) =>{
    return (
      <TouchableWithoutFeedback key={key} onPress={()=>props.onItemDeleted(key)}>
        <Text style={styles.text}>{place}</Text>
      </TouchableWithoutFeedback>
    )
  })*/
  return (
    <FlatList 
      style={styles.listItem}
      keyExtractor = { (item, index) => index.toString()}
      data={props.places}
      renderItem={(info)=>( 
        <TouchableOpacity onPress={()=>props.onItemSeleted(info.item.key)}>
          <View style={styles.touch}>
            <Image resizeMode="contain" style={styles.image} source={{uri:info.item.image.url}} /> 
            <Text style={styles.text}>{info.item.value}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}
const styles = StyleSheet.create({
  listItem: {
    width:"100%",
  },
  text: {
    width:"70%",
    padding: 10,
    margin:5,
    color: "#000"
  },
  image: {
    marginRight:10,
    height: 30,
    width:"30%"
  },
  touch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    marginBottom:5,
    backgroundColor: "#ccc",
  }
});

export default listItem; 
//<Image resizeMode="contain" style={styles.image} source={{uri:info.item.image.url}} /> 