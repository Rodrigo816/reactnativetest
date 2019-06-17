import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const input = props =>(
  <TextInput 
    {...props}
    style={[styles.input, props.style]} 
    
  />
);
const styles = StyleSheet.create({
  input:{
    width:'100%',
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom:8,
    marginTop:8,
    padding:5
  }
});
export default input;