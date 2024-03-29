import React, {Component} from 'react';
import { createStackNavigator,createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Provider } from 'react-redux';
import AuthScreen from './src/screens/Auth';
import FindPlace from './src/screens/FindPlace';
import SharePlace from './src/screens/SharePlace';
import ViewPlace from './src/screens/ViewPlace';
import configureStore from './src/store/configureStore';

//Create Store
const store = configureStore();

//Create Stack navegation
const StackNavegation = createStackNavigator({
  Home: AuthScreen,
  FindPlace: FindPlace,
  SharePlace: SharePlace,
  ViewPlace:ViewPlace
});

//Create Tab navegation
const TabNavigator = createBottomTabNavigator({
  Home: StackNavegation,
  FindPlace: StackNavegation,
  SharePlace: StackNavegation,
});

//Create Root Container navegation
const AppContainer = createAppContainer(TabNavigator);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default App;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/*import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {connect} from 'react-redux';

import ListItem from './src/components/ListItem';
import UserInput from './src/components/UserInput';
import ModalDetail from './src/components/ModalDetail';
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index';
//import * as url from './src/Capture.PNG'

class App extends Component {

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };
  
  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  placeDeleteHandler = () =>{
    this.props.onDeletePlace();
  }

  closeModalHandler = () =>{
    this.props.onDeselectPlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <UserInput 
          onPlaceAdded={this.placeAddedHandler}
        />
        <ModalDetail 
          selectedPlace = {this.props.selectedPlace}
          onItemDeleted = {this.placeDeleteHandler}
          onModalClose = {this.closeModalHandler}
        />
        <ListItem
          style = {styles.listItem}
          places = {this.props.places}
          onItemSeleted = {this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal:20,
  },

});
const mapStateToProps = store => {
  return {
    places: store.places.places,
    selectedPlace:store.places.selectedPlace
  }

}
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace:() => dispatch(deselectPlace())
  }

}
export default connect (mapStateToProps,mapDispatchToProps)(App);*/