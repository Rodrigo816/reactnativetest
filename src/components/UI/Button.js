import React from 'react';
import {StyleSheet, TouchableHighlight, Text,View} from 'react-native';

const button = props =>(
  <TouchableHighlight onPress= {props.onPress}>
    <View style={[styles.button,{backgroundColor:props.color}]}>
      <Text>{props.children}</Text>
    </View>
  </TouchableHighlight>
);
const styles = StyleSheet.create({
  button:{
    marginTop:8,
    padding:10,
    borderColor: 'black',
    borderRadius:7,
    borderWidth:1
  }
});
export default button;