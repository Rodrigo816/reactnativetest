import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class AuthScreen extends Component {
  loginHandler = () => {

  }
  render(){
    return (
      <View>
        <Text>Auth Screen</Text>
        <Button 
          title="Login" 
          onPress={() => this.props.navigation.navigate('FindPlace')}
        
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({

});

export default AuthScreen;