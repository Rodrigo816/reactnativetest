import React from 'react';
import {StyleSheet, TouchableHighlight,TouchableNativeFeedback,Platform, Text,View} from 'react-native';

const button = props =>{
  const content = (
    <View style={[styles.button,{backgroundColor:props.color}, props.disabled ? styles.disabled : null]}>
      <Text>{props.children}</Text>
    </View>
  );
  if(props.disabled){
    return content;
  }
  if (Platform.OS ==='android'){
    return(
      <TouchableNativeFeedback onPress= {props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableHighlight onPress= {props.onPress}>
      {content}
    </TouchableHighlight>
  )
};
const styles = StyleSheet.create({
  button:{
    marginTop:8,
    padding:10,
    borderColor: 'black',
    borderRadius:7,
    borderWidth:1
  },
  disabled: {
    backgroundColor: "#eee",
    color: "#aaa",
    borderColor: "#aaa"
  }
});
export default button;