import React from 'react';
import {StyleSheet, Modal, View, Image, Text, Button, TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';

const modalDetail = (props) => {
  console.log('properino',props);
  return(
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.selectedPlace !== null}
    >
      <View style={styles.modalContainer}>   
        {props.selectedPlace!== null ? (
          <View>
          <Image
          style={{width: 50, height: 50 }}
          resizeMode='stretch'
          source={{uri: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'}}
        />

            <Text>{props.selectedPlace.value}</Text>
          </View>
        ) : null }
    
        <View>
      
          <Button title="Close" onPress={props.onModalClose} />
        </View>
      </View>  
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer:{
    margin:22
  },
  deleteButton: {
    alignItems:'center',
  },
  image: {
    marginRight:10,
    height: 30,
    width:"30%"
  },
})

export default modalDetail; 