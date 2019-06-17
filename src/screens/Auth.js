import React, {Component} from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import Input from '../components/UI/Input';
import HeadingText from '../components/UI/HeadingText';
import MainText from '../components/UI/MainText';
import Button from '../components/UI/Button'

class AuthScreen extends Component {
  loginHandler = () => {

  }
  render(){
    return (
      <ImageBackground source={{uri:'https://cdn.pixabay.com/photo/2017/08/12/10/13/background-2633962_960_720.jpg'}} style={{width: '100%', flex: 1}}>
        <View style={styles.container}>
          <MainText><HeadingText >Please login</HeadingText></MainText>
          <Button color="#29aaf4">Swith to login</Button>
          <View style={styles.inputContainer}>
            <Input style={styles.input} placeholder="your email adress"/>
            <Input style={styles.input} placeholder="password"/>
            <Input style={styles.input} placeholder="confirm password"/>
          </View>
          <Button color="#29aaf4" onPress={() => this.props.navigation.navigate('FindPlace')}>SUBMIT</Button>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    borderColor: 'red',
    borderWidth: 1,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  inputContainer:{
    width: '60%'
  },
  input:{
    backgroundColor: '#eee',
    borderColor:'#bbb'
  }
});

export default AuthScreen;