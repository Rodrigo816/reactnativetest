import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, ImageBackground, View, Dimensions, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Input from '../components/UI/Input';
import HeadingText from '../components/UI/HeadingText';
import MainText from '../components/UI/MainText';
import Button from '../components/UI/Button';
import validate from '../validation/validation';
import {tryAuth} from '../store/actions/index'

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape",
    authMode: 'login',
    controls: {
      email:{
        value:"",
        valid:false,
        validationRules:{
          isEmail:true
        },
        touched: false
      },
      password: {
        value:"",
        valid:false,
        validationRules:{
          minLength:6
        },
        touched: false
      },
      confirmPassword:{
        value:"",
        valid:false,
        validationRules:{
          equalTo:'password'
        },
        touched: false
      }
    }
  }
  constructor(props){
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }
  componentWillUnmount () {
      Dimensions.removeEventListener("change",this.updateStyles);
  }
  updateStyles = (dism) =>{
    this.setState({
      viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape"
    })
  }

  loginHandler = () =>{
    const authData = {
      email: this.state.controls.email.value,
      password:this.state.controls.password.value,
    }
    this.props.onLogin(authData);
    this.props.navigation.navigate('FindPlace');
  }
  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return{
        authMode: prevState.authMode === "login" ? "signup" : "login"
      }
    })
  }
  updateInputState = (key,value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo){
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      }
    }
    this.setState(prevState =>{
      return {
        controls:{
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid:validate(value, prevState.controls[key].validationRules, connectedValue),
            touched:true
          }
        }
      };
    })
  }
  render(){
    let headingText = null;
    let confirmPasswordControl = null;
    if(this.state.viewMode === "portrait") {
      headingText= (
        <MainText><HeadingText >Please login</HeadingText></MainText>
      );
    }
    if(this.state.authMode === "signup"){
      confirmPasswordControl = (
        <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landspacePasswordWrapper}>
          <Input 
            style={styles.input} 
            placeholder="confirm password"
            value={this.state.controls.confirmPassword.value}
            onChangeText={(val)=> this.updateInputState('confirmPassword',val)}
          
          />
        </View>
      )
    }
    return (
      <ImageBackground source={{uri:'https://cdn.pixabay.com/photo/2017/08/12/10/13/background-2633962_960_720.jpg'}} style={{width: '100%', flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            {headingText}
            <Button color="#29aaf4" onPress={this.switchAuthModeHandler}>Swith to {this.state.authMode}</Button>
            <View style={styles.inputContainer}>
              <Input 
                style={styles.input} 
                placeholder="your email adress" 
                value={this.state.controls.email.value}
                onChangeText={(val)=> this.updateInputState('email',val)}
                valid={this.state.controls.email.valid}
                touched={this.state.controls.email.touched}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
              />
              <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordContainer : styles.landspacePasswordContainer}>
                <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landspacePasswordWrapper}>
                  <Input 
                    style={styles.input} 
                    placeholder="password"
                    value={this.state.controls.password.value}
                    onChangeText={(val)=> this.updateInputState('password',val)}
                    valid={this.state.controls.password.valid}
                    touched={this.state.controls.password.touched}
                    secureTextEntry
                  />
                </View>
                {confirmPasswordControl}
              </View>
            </View>
            <Button 
              color="#29aaf4" 
              onPress={this.loginHandler}
              disabled={this.state.authMode==="signup" || !this.state.controls.password.valid || !this.state.controls.email.valid}>
              SUBMIT
            </Button>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
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
  },
  landspacePasswordContainer: {
    flexDirection:"row",
    justifyContent:'space-between'
  },
  portraitPasswordContainer: {
    flexDirection:"column",
    justifyContent:'flex-start'
  },
  landspacePasswordWrapper:{
    width:"45%"
  },
  portraitPasswordWrapper:{
    width:"100%"
  }
});
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (authData) => dispatch(tryAuth(authData))
  }
}
export default connect (null,mapDispatchToProps)(AuthScreen);