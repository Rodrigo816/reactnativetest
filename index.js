/**
 * @format
 */
import React from 'react';
//import { Navigation } from "react-native-navigation";
import { AppRegistry } from 'react-native'
import { Provider} from 'react-redux';
import {} from './'
import App from './App';
import { name as appName } from './app.json'
import configureStore from './src/store/configureStore'


//const store = configureStore();

const RNRedux = () => (
  <Provider store={configureStore()}>
    <App/>
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);