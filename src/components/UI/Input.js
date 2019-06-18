import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const input = props =>(
  <TextInput 
    {...props}
    style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]} 
    
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
  },
  invalid: {
    backgroundColor:'#f9c0c0',
    borderColor: 'red'
  }
});
export default input;