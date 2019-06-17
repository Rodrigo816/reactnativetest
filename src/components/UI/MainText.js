import React from 'react';
import {StyleSheet, Text} from 'react-native';

const mainText = props =>(
  <Text style={styles.mainText}  >{props.children}</Text>
);
const styles = StyleSheet.create({
  mainText: {
    color: "#bbb"
  }
});
export default mainText;