import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Input from "../components/UI/Input";

const userInput = (props) =>{
  return(
    <Input 
      placeholder="Place Name" 
      value={props.placeName} 
      onChangeText={props.onChangeText}
    />
  )
} 

export default userInput;